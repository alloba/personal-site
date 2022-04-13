import os
import shutil

from util_functions import tree_walk


class Generator:
    def __init__(self, config_object):
        self.CONFIG = config_object

    def render_markdown_file_to_fragment(self, markdown_file_path):
        if not markdown_file_path.endswith('.md'):
            raise Exception(f'Source file must be markdown: {markdown_file_path}')
        relative_name = markdown_file_path.removeprefix(self.CONFIG.PAGES_SUBDIR)
        output_name = self.CONFIG.BUILD_FRAGMENTS_SUBDIR + relative_name.removesuffix('md') + 'html'
        if not os.path.isdir(os.path.dirname(output_name)):
            print(f'Directory {output_name} does not exist. Creating.')
            os.makedirs(os.path.dirname(output_name), exist_ok=True)

        self.CONFIG.MD_PROCESSOR.reset()
        self.CONFIG.MD_PROCESSOR.convertFile(markdown_file_path, output_name)
        print(f'Rendered file "{relative_name}" to "{output_name}"')
        return output_name

    def render_merge_template_and_fragment(self, fragment_file_path):
        sub_marker = '${SOURCE}'
        title_marker = '${TITLE}'
        menu_marker = '${MENU}'

        if not os.path.exists(self.CONFIG.DEFAULT_TEMPLATE):
            raise Exception(f'Template file "{self.CONFIG.DEFAULT_TEMPLATE}" does not exist.')
        if not os.path.exists(self.CONFIG.BUILD_FRAGMENTS_SUBDIR):
            raise Exception(f'Fragments path "{self.CONFIG.BUILD_FRAGMENTS_SUBDIR}" does not exist.')
        if not os.path.exists(os.path.dirname(self.CONFIG.BUILD_SITE_SUBDIR)):
            print(f'Output path "{self.CONFIG.BUILD_SITE_SUBDIR}" does not exist. Creating.')
            os.makedirs(os.path.dirname(self.CONFIG.BUILD_SITE_SUBDIR), exist_ok=True)

        with open(self.CONFIG.DEFAULT_TEMPLATE, 'r') as template_file:
            template_file_raw = template_file.read()

            with open(fragment_file_path, 'r') as fragment_file:
                fragment_file_raw = fragment_file.read()
                fragment_relative_path = fragment_file_path.removeprefix(self.CONFIG.BUILD_FRAGMENTS_SUBDIR)
                fragment_path_out = os.path.abspath(self.CONFIG.BUILD_SITE_SUBDIR + '/' + fragment_relative_path)

                rendered = template_file_raw.replace(title_marker, self.find_header(fragment_file_raw))
                rendered = rendered.replace(menu_marker, self.generate_menu_html(self.CONFIG.MENU_CONFIG))
                rendered = rendered.replace(sub_marker, fragment_file_raw)

                if not os.path.exists(os.path.dirname(fragment_path_out)):
                    print(f'Sub path for fragment does not exist. Creating: {os.path.dirname(fragment_path_out)}')
                    os.makedirs(os.path.dirname(fragment_path_out), exist_ok=True)
                final_out_file = open(fragment_path_out, 'w')
                final_out_file.write(rendered)
                final_out_file.close()

    def copy_template_resources_to_output(self):
        if not os.path.exists(self.CONFIG.TEMPLATES_SUBDIR):
            raise Exception(f'Template root does not exist: {self.CONFIG.TEMPLATES_SUBDIR}')
        if not os.path.exists(self.CONFIG.BUILD_SITE_SUBDIR):
            print(f'Output path does not exist. Creating: {self.CONFIG.BUILD_SITE_SUBDIR}')
            os.makedirs(self.CONFIG.BUILD_SITE_SUBDIR, exist_ok=True)

        template_resources = tree_walk(self.CONFIG.TEMPLATES_SUBDIR)
        for file in template_resources:
            shutil.copy2(file, self.CONFIG.BUILD_SITE_SUBDIR)

    def find_header(self, html_fragment):
        headers = [x for x in [z.strip() for z in html_fragment.split('\n')] if x.startswith('<h1>')]
        if len(headers) == 0:
            print('WARN - no page title found for fragment')
            print(html_fragment)
            return 'No Page Title'
        return headers[0].replace('<h1>', '').replace('</h1>', '')

    def generate_menu_html(self, menu_config):
        elems = []
        for key, value in menu_config.items():
            elems.append(f'<a href="{value}">{key}</a>')
        return '\n'.join(elems)

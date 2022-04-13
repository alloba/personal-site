import os.path

import markdown

from markdown_preprocessors import HyperlinkExtension


# TODO: This should really be a separate file that gets loaded
class GeneratorConfig:
    def __init__(self, root_dir):
        self.ROOT_PATH =                os.path.abspath(root_dir) + '/'
        self.BUILD_SUBDIR =             os.path.abspath(f'{root_dir}/build/') + '/'
        self.BUILD_FRAGMENTS_SUBDIR =   os.path.abspath(f'{root_dir}/build/fragments/') + '/'
        self.FRAGMENT_SEPARATOR =       'fragments/'
        self.BUILD_SITE_SUBDIR =        os.path.abspath(f'{root_dir}/build/site/') + '/'
        self.TEMPLATES_SUBDIR =         os.path.abspath(f'{root_dir}/templates/default/') + '/'
        self.DEFAULT_TEMPLATE =         os.path.abspath(f'{root_dir}/templates/default/default_template.html')
        self.PAGES_SUBDIR =             os.path.abspath(f'{root_dir}/pages/') + '/'
        self.MD_PROCESSOR =             markdown.Markdown(extensions=['sane_lists', HyperlinkExtension()])
        self.MENU_CONFIG = {
            'Home': '/index.html',
            'About Me': '/about.html',
            'Projects': '/projects/projects.html',
            'Kaleidoscope': 'http://kaleidoscope.alexlbates.com'
        }

from generator_functions import *
from config import GeneratorConfig
from util_functions import tree_walk

'''
Handle all conversion and build output for a static site.
- Gather all files in the source directory
- Feed markdown files through the generator, and save the output in the build folder (keep the sub-structure intact)
- Copy all non-markdown files as-is, to preserve links and references.
'''

if __name__ == '__main__':
    root_dir = '../'  # TODO: this should be mandatory passed in at runtime.
    CONFIG = GeneratorConfig(root_dir)
    generator = Generator(CONFIG)

    # Gather all target files (except template, which is handled separately)
    content_file_paths = tree_walk(CONFIG.PAGES_SUBDIR)
    markdown_paths = [x for x in content_file_paths if x.endswith('.md')]
    misc_paths = [x for x in content_file_paths if x not in markdown_paths]

    # Convert markdown files into HTML
    for file in markdown_paths:
        fragment_path = generator.render_markdown_file_to_fragment(file)
        generator.render_merge_template_and_fragment(fragment_path)

    # Move all remaining resource files into build folder
    for file in misc_paths:
        shutil.copy2(file, CONFIG.BUILD_SITE_SUBDIR)

    # Copy all template resources into build folder.
    # You end up with templates in the final product, but w/e. This makes it easy to shift all the css over.
    generator.copy_template_resources_to_output()

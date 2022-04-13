from markdown.extensions.attr_list import AttrListExtension
from markdown.preprocessors import Preprocessor
from markdown.extensions import Extension

import re


class HyperlinkExtension(Extension):
    def extendMarkdown(self, md) -> None:
        md.registerExtension(self)
        processor = HyperlinkEditor(md)
        md.preprocessors.register(processor, "hyperlink_editor", 700)


class HyperlinkEditor(Preprocessor):
    """
    Change all relative links that end in '.md' to instead end in '.html'.
    This preserves the connection when converting everything to HTML pages
    (The assumption being that all links to md files are something you want to have hyperlinks for)
    """

    def __init__(self, md):
        super().__init__(md)
        self._has_attr_list = any(isinstance(ext, AttrListExtension) for ext in md.registeredExtensions)

    def run(self, lines):
        new_lines = []
        for line in lines:
            m = re.search(r"\[.*]\(.*\.md\)", line)
            if m:
                new_lines.append(line.replace('.md', '.html'))
            else:
                new_lines.append(line)

        return new_lines

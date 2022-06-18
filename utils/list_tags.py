'''
This is a simple little function that scans the entire site contents 
for this repository and returns a sorted list of all the tags that 
are used for the pages. 

The outcome should be identical to the tags page of the actual website. 
This is a preemptive move to ensure I don't lose track of the tags that 
I use for everything, although honestly it isn't very likely that 
I make use of the script very often... I literally can just look at 
a locally running instance of the site if I really need to... 

A good idea for a paired utility script would be to find 
which pages have a specified tag. Which again would just 
be duplicating functionality that the site itself already has... 
'''

import pathlib 


project_base_directory = pathlib.Path(__file__).parents[1].resolve()
content_base_path = pathlib.Path(project_base_directory / 'site' / 'content').resolve()  # Using the slash operator like this is an actual sin 

all_site_files = list(content_base_path.glob('**/*.md'))
all_tags = {}

for mdfile in all_site_files: 
    with open(mdfile, 'r') as f: 
        content = f.read()
        content = content.strip('\n').strip()
        if content.startswith('+++'):
            header_start = content.index('+++')
            header_end = content[header_start + 3:].find('+++')
            if header_start == -1 or header_end == -1: 
                print('File started with header, but unable to determine the full content. Skipping - ' + str(mdfile))
            header_content = content[header_start + 3:header_end].strip()
            if header_content.find('\ntags') != -1: 
                tag_line_start = header_content.find('\ntags')
                tag_array_relative_start = header_content[tag_line_start:].find('[')
                tag_array_relative_end = header_content[(tag_line_start + tag_array_relative_start):].find(']')

                # This is very gross but it works. Some sticky array index math. 
                tag_contents = header_content[(tag_line_start + 1 + tag_array_relative_start):(tag_line_start + tag_array_relative_start + tag_array_relative_end)]
                for x in [x.strip().strip('"') for x in tag_contents.split(',')]: 
                    if x in all_tags:  
                        all_tags[x] += 1
                    else: 
                        all_tags[x] = 1

tags = list(all_tags.keys())
tags.sort()

for t in tags: 
    print(f'{t}: {all_tags[t]}')





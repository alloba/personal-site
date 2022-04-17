# coding: utf-8
"""
This script is meant to simplify the creation of daily notes pages to include in this project.
*New Functionality* - Can pass a commandline argument to specify subpages.
                      Can provide extra argument for distinct page title. (sys.argv[1] and [2])

The tasks it performs: 
    - create a sub-folder in the notes section with the current date
    - create an index.md file in the current date folder
    - scan for additional markdown files in the date folder, and add a link to it at the top of the index markdown file.
    - append the current date index.md file to a root notes page (also named index.md)

    - all of this done in a non-destructive way (if it already exists, dont wipe anything away)

Expectations:
    Folder Structure is very strict for this script.
    Layout is expected to be as follows:
        project_root/
        ├──scripts
            ├──THIS_SCRIPT.py
        ├── index.md       [this is USER-generated -- MUST have archive section (const defined below)]
            ├──2021-07-21  [this is auto-generated]
                ├──index.md    [this is auto-generated]
                ├──other.md    [this is USER-generated]

    So basically, don't get too fancy with file/folder structure and expectations and just expect it to work.
    Run off backups and double check if you ever want to change from the above layout.
"""

import os
from datetime import date
import sys
import argparse
from argparse import RawTextHelpFormatter


def create_today_note_directory(today_notes_directory):
    today_date_string = date.today().strftime('%Y-%m-%d')
    today_note_directory = today_notes_directory + '/' + today_date_string + '/'

    if not os.path.isdir(today_note_directory):
        os.mkdir(today_note_directory)

    return today_note_directory


def create_today_note_file(today_notes_directory):
    note_file = today_notes_directory + 'index.md'
    if not os.path.isfile(note_file):
        today_date_string = date.today().strftime("%B %d, %Y")

        f = open(note_file, 'x')
        f.write(f'# {today_date_string} \n\n## Sub Pages \n\n## Day Summary \n\n- ')
        f.close()
    return note_file


def create_subpage_note(today_notes_directory, filename, page_title=''):
    note_file = f'{today_notes_directory}{filename}.md'
    if not os.path.isfile(note_file):
        f = open(note_file, 'x')
        title = page_title if page_title != '' else filename
        f.write(f'# {title} \n\n')
        f.close()
    return note_file


def find_index_first_occurrence_in_file(note_file, search_param, start_line=0):
    with open(note_file) as notes:
        main_file_text = notes.readlines()
        search_results = [s for s in main_file_text[start_line:] if search_param in s]

        if len(search_results) > 0:
            return main_file_text.index(search_results[0])
        else:
            return -1


def append_subfiles_to_today_note(note_dir, note_file):
    markdown_files = [x for x in os.listdir(note_dir) if x.endswith(".md") and x != 'index.md']

    if len(markdown_files) != 0:
        title_strings = []
        for x in markdown_files:
            f = open(note_dir + x)
            title_string = next(z for z in f.readlines() if z.startswith('#'))
            f.close()

            if title_string != '' and title_string is not None:
                title_strings.append(f'- [{title_string.strip("#").strip()}]({x})\n')

        starting_index = find_index_first_occurrence_in_file(note_file, '## Sub Pages')
        ending_index = find_index_first_occurrence_in_file(note_file, '#', starting_index+1)

        f = open(note_file)
        main_file = f.readlines()
        f.close()

        del main_file[starting_index+1:ending_index-1]
        for item in title_strings:
            main_file.insert(starting_index + 1, item)
        f = open(note_file, 'w')
        f.writelines(main_file)
        f.close()


def update_root_notes_index(today_note, root_note):
    archive_section = find_index_first_occurrence_in_file(root_note, ROOT_ARCHIVE_SECTION)
    if archive_section == -1:
        print('Archive Notes section not found in root note file. Cannot append.')
        return

    with open(today_note) as today_note_read:
        today_note_title = next(z for z in today_note_read.readlines() if z.startswith('#'))
    if today_note_title == '':
        print('Today note does not have any titles, cannot append.')
        return
    today_note_title = today_note_title.strip('#').strip()

    today_note_relative_path = os.path.relpath(today_note, root_note).strip('../')
    with open(root_note, 'r+') as root_file_read:
        root_lines = root_file_read.readlines()
        target_string = f'- [{today_note_title}]({today_note_relative_path})\n'

        if target_string in root_lines:
            return

        root_lines.insert(archive_section + 1, target_string)
        root_file_read.seek(0)
        root_file_read.writelines(root_lines)


def process_arguments(parser_object):
    subpage_title = None
    subpage_file = None

    args = parser_object.parse_args()

    # if args.subfile == 'MISSING' and args.subtitle == 'MISSING' and len(args.remainder) == 0:
    #     parser.print_help()

    if args.subfile == 'MISSING' or args.subtitle == 'MISSING':
        # no fully qualified args, falling back on inferred ordering
        if len(args.remainder) == 1:
            # single argument means the file and the title are named the same
            subpage_file = args.remainder[0]
            subpage_title = args.remainder[0]
        if len(args.remainder) >= 2:
            # subpage creation process, since enough implicit args
            subpage_file = args.remainder[0]
            subpage_title = args.remainder[1]

    else:
        # both values supplied, so we are using them
        subpage_file = " ".join(args.subfile)
        subpage_title = " ".join(args.subtitle)

    return subpage_file, subpage_title


def sysops(root_dir, today_dir, subpage):
    today_date_string = date.today().strftime('%Y-%m-%d')

    if subpage is not None:
        os.system(f'nvim {today_dir}/{subpage}.md')
    else:
        os.system(f'nvim {today_dir}/index.md')

    os.system(f'git -C {root_dir} add       {today_dir}* {root_dir}/pages/daily-notes/index.md')
    os.system(f'git -C {root_dir} commit    {today_dir}* {root_dir}/pages/daily-notes/index.md -m "notes - {today_date_string}"')
    os.system(f'git -C {root_dir} push')




if __file__ is None:
    print('__file__ not found, terminating script. (Are you running this via interpreter?)')
    exit(1)

if sys.version_info[0] < 3:
    print('This script must be run in Python 3 or higher.')
    exit(1)


ROOT_ARCHIVE_SECTION = '# Daily Notes Archive'
EXECUTING_SCRIPT_DIR = os.path.dirname(os.path.realpath(__file__))
ROOT_PROJECT_DIR = os.path.join(EXECUTING_SCRIPT_DIR, '../')
ROOT_NOTE_DIR = os.path.join(EXECUTING_SCRIPT_DIR, '../pages/daily-notes')

today_working_directory = create_today_note_directory(ROOT_NOTE_DIR)
today_note_file = create_today_note_file(today_working_directory)


parser = argparse.ArgumentParser(
    formatter_class=RawTextHelpFormatter,
    description='Note taking assistive script.\n'
                'Create and edit note files, ' 
                'to then be automatically uploaded to a hosted site. '
                '\n'
                'A few approaches can be taken to use this script:\n' 
                '- Provide no arguments. This will open the default daily note section to edit and save.\n'
                '- Provide the two named args. This will open a subpage of the current daily notes to edit.\n'
                '- Provide two unnamed args. This will do the same as above.\n'
                '\n'
                'You can also omit the subtitle arg, in which case the subpage will be named ' 
                'the same as the file itself.'

                 )

parser.add_argument('--subfile', '-f',        nargs='+', type=str, default='MISSING', help='Filename of the subpage being created')
parser.add_argument('--subtitle', '-t', '-n', nargs='+', type=str, default='MISSING', help='Title of the subpage being created')
parser.add_argument('remainder',              nargs='*', type=str, default=[], help='Catch-all for unnamed positional args.')

sub_file, sub_title = process_arguments(parser)

if sub_file is not None and sub_title is not None:
    create_subpage_note(today_working_directory, sub_file, sub_title)

append_subfiles_to_today_note(today_working_directory, today_note_file)
update_root_notes_index(today_note_file, ROOT_NOTE_DIR + '/index.md')
sysops(ROOT_PROJECT_DIR, today_working_directory, sub_file)


#!/bin/bash
# WARNING:: This is deprecated, and causes a double execution of the whole
#           note taking workflow.
#           I'm keeping it just in case, but really just use the python script directly.


# Terminate immediately if anything in the script exits with non-zero code.
set -e 

NOTES_PROJECT_DIRECTORY=${HOME}/projects/personal-landing-site
TODAY=$(date '+%Y-%m-%d')
TODAY_DIRECTORY="${NOTES_PROJECT_DIRECTORY}/pages/daily-notes/${TODAY}"


if [ "$#" -gt 0 ]; then
  if [ "$1" == "help" ] || [ "$1" == "h" ]; then
    echo "This command can either be called with 0, 1, or 2 arguments."
    echo "0 will invoke default notes file, 1 and 2 will open a subpage named 1,"
    echo "with 2 being the page title if it is being created new."
  fi

  SUBPAGE="$1"
  SUBPAGE_TITLE=""
  if [ $# -gt 1 ]; then
    SUBPAGE_TITLE=$2
  fi

  echo "${NOTES_PROJECT_DIRECTORY}"/daily-logger/note_section_generator.py "$SUBPAGE" "$SUBPAGE_TITLE"
  python3 "${NOTES_PROJECT_DIRECTORY}"/daily-logger/note_section_generator.py "$SUBPAGE" "$SUBPAGE_TITLE"
  nvim "${TODAY_DIRECTORY}"/"${SUBPAGE}".md

else
  python3 "${NOTES_PROJECT_DIRECTORY}"/daily-logger/note_section_generator.py
  nvim "${TODAY_DIRECTORY}"/index.md
fi


#echo git -C "${NOTES_PROJECT_DIRECTORY}" add "${TODAY_DIRECTORY}"/*  "${NOTES_PROJECT_DIRECTORY}"/pages/daily-notes/index.md
#echo git -C "${NOTES_PROJECT_DIRECTORY}" commit "${TODAY_DIRECTORY}"/*  "${NOTES_PROJECT_DIRECTORY}"/pages/daily-notes//index.md -m "notes - ${TODAY}"
#echo git -C "${NOTES_PROJECT_DIRECTORY}" push
 

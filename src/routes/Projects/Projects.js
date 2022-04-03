import React from 'react';
import {Box, Heading, Link, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";

const projectList = [
    {
        name: 'Personal Landing Site',
        description: 'This website! I slightly intend for this site to be a jumping off point for anything else that ' +
            'has an online presence. It\'s still shaping up though.',
        link: '//gitlab.com/alloba/personal-landing-site'
    },
    {
        name: 'Kaleidoscope',
        description: 'Random media player website. This currently holds the record for longest-lived personal project of mine, ' +
            'in terms of uptime and actual usage.',
        link: '//kaleidoscope.alexlbates.com'
    },
    {
        name: 'Developer Setup',
        description:
            'A one stop shop for common workspace configurations and scripts that I would want to carry between machines. ' +
            'This includes anything like support scripts or shell configurations that are kind of annoying to set up again and again.',
        link: '//gitlab.com/alloba/developer-environment-configs'
    },
    {
        name: 'WSG Scraper',
        description: 'Download Webm files from 4chan based on thread and search-term, and automatically upload to S3.',
        link: '//gitlab.com/alloba/kaleidoscope-combined'
    },
    {
        name: 'Terraform Zoo',
        description: 'Sample projects for Terraform managed infrastructure. Honestly it\'s a bit dated at this point - ' +
            'I now consider the purpose of the project to be consolidation of reference materials and notes rather than ' +
            'any kind of production ready thing.',
        link: '//gitlab.com/alloba/terraform-examples'
    },
    {
        name: 'Documentation Website',
        description: 'An auto-publishing website for all the notes I would take. ' +
            'Currently defunct, although I do remember it fondly. ' +
            'This project is competing for space in my brain with this website and Obsidian... ' +
            'Still not sure how I ultimately want my note-taking to live on. It changes with the seasons.',
        link: ''
    }
]

/**
 * Convert a list of project objects into a table row
 * Just composes single entries (refer to single element version for details)
 * @returns {*[]}
 */
function renderProjectListElements() {
    return projectList.map(entry => renderSingleProjectListElement(entry))
}

/**
 * Convert a project object into a table row.
 * Has conditional logic to allow hyperlinks out to the project if available.
 *
 * @param projectItem Object of structure {name: '', description: '', link: ''}. Link field is optional
 * @returns {JSX.Element}
 */
function renderSingleProjectListElement(projectItem) {
    if (projectItem.link) {
        return (
            <Tr key={projectItem.name}>
                <Td color={'blue.200'} fontWeight={'bold'}><Link className={'list-item'} href={projectItem.link}>{projectItem.name}</Link></Td>
                <Td>{projectItem.description}</Td>
            </Tr>
        )
    } else {
        return (
            <Tr key={projectItem.name}>
                <Td color={'blue.500'} fontWeight={'bold'}>{projectItem.name}</Td>
                <Td>{projectItem.description}</Td>
            </Tr>
        )
    }
}

export default function Projects() {
    return (
        <Box>
            <Heading as={'h1'} textAlign={'center'} paddingBottom={'0.2em'} paddingTop={'1em'}>Projects</Heading>
            <Text textAlign={'center'} paddingBottom={'1'}>(That I care to mention)</Text>
            <Table className={'project-table-div'}>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Description</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {renderProjectListElements()}
                </Tbody>
            </Table>
        </Box>
    )
}

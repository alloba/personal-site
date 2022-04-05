import React from 'react';
import {Box, Heading, Text, VStack} from "@chakra-ui/react";
import {PageMention} from "../../components/PageMention";

export default function Projects() {
    return (
        <Box>
            {/*TODO: It would be nice to integrate this page with the site's router, and then have subpages */}
            {/*      for all these things. It would give a dedicated space to add more information about each */}
            {/*      project. or category of project (CLI customizations could really all fit together).*/}
            <Heading as={'h1'} textAlign={'center'} paddingBottom={'0.2em'} paddingTop={'1em'}>Projects and
                Ideas</Heading>
            <Text align={'center'} paddingBottom={'3em'}>(That I care to mention)</Text>

            <VStack spacing={'2em'}>
                <PageMention title={'Personal Site'}
                             link={'./projects'}
                             description={'This website! I slightly intend for this site to be a jumping off point for anything else that has an online presence. It\'s still shaping up though.'}/>
                <PageMention title={'Kaleidoscope'}
                             link={'//kaleidoscope.alexlbates.com'}
                             description={'Random media player website. This currently holds the record for longest-lived personal project of mine, in terms of uptime and actual usage.'}/>
                <PageMention title={'Developer Setup'}
                             link={'//gitlab.com/alloba/developer-environment-configs'}
                             description={'A one stop shop for common workspace configurations and scripts that I would want to carry between machines. This includes anything like support scripts or shell configurations that are kind of annoying to set up again and again.'}/>
                <PageMention title={'WSG Scraper'}
                             link={'//gitlab.com/alloba/kaleidoscope-combined'}
                             description={'Download Webm files from 4chan based on thread and search-term, and automatically upload to S3.'}/>
                <PageMention title={'Documentation Website'}
                             link={''}
                             description={'An auto-publishing website for all the notes I would take. Currently defunct, although I do remember it fondly. This project is competing for space in my brain with this website and Obsidian... Still not sure how I ultimately want my note-taking to live on. It changes with the seasons.'}/>
            </VStack>
        </Box>
    )
}

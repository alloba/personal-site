import React from 'react';
import {Box, Heading, Link, Text} from "@chakra-ui/react";
import PageWrapper from "../../components/PageWrapper";

export default function Projects() {
    return (
        <PageWrapper>
            <Box inlineSize={'100%'}>
                {/*TODO: It would be nice to integrate this page with the site's router, and then have subpages */}
                {/*      for all these things. It would give a dedicated space to add more information about each */}
                {/*      project. or category of project (CLI customizations could really all fit together).*/}
                <Heading as={'h1'} paddingBottom={'0.2em'} paddingTop={'1em'}>Projects and
                    Ideas</Heading>
                <Text paddingBottom={'3em'}>(That I care to mention)</Text>

                <Link href={'./projects'} fontWeight={'bold'} >Personal Site</Link>
                <Text paddingBottom={'1em'}>This website! I slightly intend for this site to be a jumping off point for anything else that has an online presence. It's still shaping up though.</Text>

                <Link href={'//kaleidoscope.alexlbates.com'} fontWeight={'bold'} >Kaleidoscope</Link>
                <Text paddingBottom={'1em'}>Random media player website. This currently holds the record for longest-lived personal project of mine, in terms of uptime and actual usage.</Text>

                <Link href={'//gitlab.com/alloba/developer-environment-configs'} fontWeight={'bold'} >Developer Setup</Link>
                <Text paddingBottom={'1em'}>A one stop shop for common workspace configurations and scripts that I would want to carry between machines. This includes anything like support scripts or shell configurations that are kind of annoying to set up again and again.</Text>

                <Link href={'//gitlab.com/alloba/wsg_scraper'} fontWeight={'bold'} >WSG Scraper</Link>
                <Text paddingBottom={'1em'}>Download Webm files from 4chan based on thread and search-term, and automatically upload to S3.</Text>

                <Link fontWeight={'bold'} >Documentation Website</Link>
                <Text paddingBottom={'1em'}>An auto-publishing website for all the notes I would take. Currently defunct, although I do remember it fondly. This project is competing for space in my brain with this website and Obsidian... Still not sure how I ultimately want my note-taking to live on. It changes with the seasons.</Text>
            </Box>
        </PageWrapper>
    )
}

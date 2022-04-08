import React from "react";
import {Box, Heading, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {MinusIcon} from "@chakra-ui/icons";

function AboutSite() {
    return (
        <Box>
            <Heading as={'h1'} textAlign={'left'} paddingBottom={'1em'} paddingTop={'1em'}>About this Site</Heading>

            <Heading as={'h2'} fontSize={'1.5em'} paddingBottom={'0.5em'}>Purpose</Heading>
            <Text>
                This site is meant to be jumping-off point for anything I create that has a web presence.
                It can be anything from other websites to links to source code, to self-contained
                webpages or write-ups. It all starts here!
            </Text>
            <Text paddingTop={'0.5em'}>
                Or at least that is the idea.
            </Text>

            <Heading as={'h2'} paddingTop={'3em'} paddingBottom={'0.5em'} fontSize={'1.5em'}>Technology</Heading>
            <Text paddingBottom={'1em'}>
                Here is a list of all the tech that is being used to keep this site going:
            </Text>
            <List>
                <ListItem fontWeight={'bold'} fontSize={'lg'}>UI</ListItem>
                <List paddingBottom={'1em'}>
                    <ListItem><ListIcon as={MinusIcon}/>React - All you see here is from React</ListItem>
                    <ListItem><ListIcon as={MinusIcon}/>Chakra UI - Just Kidding! Everything you see is from Chakra</ListItem>
                </List>

                <ListItem fontWeight={'bold'} fontSize={'lg'}>Infrastructure</ListItem>
                <List paddingBottom={'1em'}>
                    <ListItem><ListIcon as={MinusIcon}/>Terraform - Infrastructure as code</ListItem>
                    <ListItem><ListIcon as={MinusIcon}/>Cloudfront - CDN/Request routing</ListItem>
                    <ListItem><ListIcon as={MinusIcon}/>S3 - Content hosting</ListItem>
                    <ListItem><ListIcon as={MinusIcon}/>Route53 - Network routing</ListItem>
                </List>

                <ListItem fontWeight={'bold'} fontSize={'lg'}>CI/CD</ListItem>
                <List paddingBottom={'1em'}>
                    <ListItem><ListIcon as={MinusIcon}/>GitLab CI - Auto-build and deploy changes to both this site and the supporting infra.</ListItem>
                </List>
            </List>
        </Box>
    )
}

export default AboutSite

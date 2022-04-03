import React from 'react';
import {Box, Heading, Link, List, ListItem, Text} from "@chakra-ui/react";

const About = () => (
  <Box>
      <Heading as={'h1'} textAlign={'center'} paddingBottom={'1em'} paddingTop={'1em'}>About Me</Heading>
      <Text>I'm just like... a guy, my dude.</Text>

      <List paddingTop={'1em'} paddingBottom={'1em'}>
          <ListItem>
              <Link color={'blue.200'} href={'https://www.linkedin.com/in/alexanderlbates/'}>Fullstack Developer </Link>
              (with projects on <Link color={'blue.200'} href={'https://gitlab.com/alloba'}>GitLab</Link>)
          </ListItem>
          <ListItem><Link color={'blue.200'} href={'https://anilist.co/user/alloba/'}>Enjoyer of Trash Anime</Link></ListItem>
          <ListItem><Link color={'blue.200'} href={'https://open.spotify.com/user/alloba0'}>Garbage Music Connoisseur</Link></ListItem>
      </List>

      <Text>All of these things are true.</Text>
  </Box>
);

export default About;

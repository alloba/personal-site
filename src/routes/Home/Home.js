import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";

function Home() {
    return (
        <Box>
            <Heading as={'h1'} textAlign={'center'} paddingBottom={'1em'} paddingTop={'1em'}>You found me!</Heading>
            <Text textAlign={'center'}>
                There currently isn't much to this website, although I have big hypothetical ambitions connected to
                it.
            </Text>
        </Box>
    )
}

export default Home;

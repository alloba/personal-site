import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import PageWrapper from "../../components/PageWrapper";

function Home() {
    return (
        <PageWrapper>
            <Box>
                <Heading as={'h2'} textAlign={'left'} paddingBottom={'1em'} paddingTop={'1em'}>You found me!</Heading>
                <Text>
                    There currently isn't much to this website, although I have big hypothetical ambitions connected to
                    it.
                </Text>
            </Box>
        </PageWrapper>
    )
}

export default Home;

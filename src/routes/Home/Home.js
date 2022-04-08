import React from 'react';
import {Heading, Text} from "@chakra-ui/react";
import PageWrapper from "../../components/PageWrapper";

function Home() {
    return (
        <PageWrapper>
            <Heading>You found me!</Heading>
            <Text>
                There currently isn't much to this website, although I have big hypothetical ambitions connected to
                it.
            </Text>
        </PageWrapper>
    )
}

export default Home;

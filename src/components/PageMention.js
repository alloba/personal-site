import React from "react";
import {Box, HStack, Link, Text} from "@chakra-ui/react";

const titleFontSize = '1.4em'

export const PageMention = ({title, description = '', link = ''}) => (
    <Box width={'100%'} alignItems={'top'}>
        <HStack display={'flex'} alignItems={'top'}>
            <Link href={link} fontSize={titleFontSize} fontWeight={'bold'} width={'25%'} paddingRight={'5%'}>{title}</Link>
            <Text width={'70%'}>{description}</Text>
        </HStack>
    </Box>
)

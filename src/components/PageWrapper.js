import React from "react";
import {Box, Stack} from "@chakra-ui/react";

const PageWrapper = (props) => (
    <Stack direction={['column', 'row']} gap={'2em'}>
        <Box fontWeight={'bold'} maxWidth={'10em'} minWidth={'10em'}>{props.subMenu}</Box>
        <Box>{props.children}</Box>
    </Stack>
)

export default PageWrapper

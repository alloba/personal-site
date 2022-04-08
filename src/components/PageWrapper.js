import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const PageWrapper = (props) => (
    <Flex>
        <Box paddingTop={'2em'}
             paddingRight={'4em'}
             minWidth={'3em'}
             maxWidth={'14em'}
             fontWeight={'bold'}>
            {props.subMenu}
        </Box>
        <Box>{props.children}</Box>
    </Flex>
)

export default PageWrapper

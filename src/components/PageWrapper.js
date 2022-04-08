import React from "react";
import {Box, HStack, VStack} from "@chakra-ui/react";

const PageWrapper = (props) => (
    <VStack>
        <HStack justifyContent={'center'} gap={'0.3rem'} paddingLeft={'1rem'} paddingRight={'1rem'}>{props.subMenu}</HStack>
        <Box width={'100%'} >{props.children}</Box>
    </VStack>
)

export default PageWrapper

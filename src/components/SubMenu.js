import React from "react";
import {List} from "@chakra-ui/react";

const SubMenu = (props) => (
    <List paddingTop={'1em'}>
        {props.children}
    </List>
)

export default SubMenu

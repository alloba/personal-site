import React, {useEffect} from 'react';
import {Box, ListItem, Stack, StackDivider} from "@chakra-ui/react";
import {Link as RouterLink, Route, Routes} from 'react-router-dom'
import AboutMe from "./AboutMe";
import AboutHardware from "./AboutHardware";
import SubMenu from "../../components/SubMenu";

// TODO: Honestly using hooks is not currently feeling good.
//       Specifically the way I lose context when providing a sub-menu (since it's from the parent element ultimately)
//       Also the way you feed stuff into the main route elements is kind of trash feeling. will have to reevaluate.
function About({changeSubMenu, currentLocation}) {

    useEffect(() => {
            changeSubMenu(subMenu())
            return function cleanup() { changeSubMenu(<SubMenu/>) }
        },
        [changeSubMenu, currentLocation]
    )

    const subMenu = () => (
        <SubMenu>
            <RouterLink to={'/about/me'}> <ListItem>Me</ListItem></RouterLink>
            <RouterLink to={'/about/hardware'}> <ListItem>Hardware</ListItem></RouterLink>
        </SubMenu>
    )

    return (
        <Box>
            <Stack direction={'column'} divider={<StackDivider/>}>
            </Stack>

            <Routes>
                <Route path={'/'} en element={<AboutMe/>}/>
                <Route path={'me'} en element={<AboutMe/>}/>
                <Route path={'hardware'} element={<AboutHardware/>}/>
            </Routes>
        </Box>
    )
}

export default About;

import React from 'react';

import {
    Box,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"
import {Routes, Route, Link as RouterLink} from 'react-router-dom'
import NavigationComponent from "./data-structures/NavigationComponent";
import Home from "./routes/Home/Home";
import Projects from "./routes/Projects/Projects";
import About from "./routes/About/About";
import PointMapVisualization from "./routes/PointMapVisualization/PointMapVisualization";

/**
 * Entrypoint into the React site.
 * All that happens here is the creation of a menu, a route render area, and a list of objects to populate both.
 *
 * Simply create/maintain a list of NavigationComponent objects,
 * and they will be fed into both the page menu and the Router for the site.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    return (
        <Box>
            <Box paddingLeft={'1em'} paddingTop={'1em'} position={'absolute'}>
                <Menu>
                    <MenuButton as={IconButton} icon={<HamburgerIcon/>}/>
                    <MenuList>
                        <RouterLink to={'/'}><MenuItem>Home</MenuItem></RouterLink>
                        <RouterLink to={'/projects'}><MenuItem>Projects</MenuItem></RouterLink>
                        <RouterLink to={'/about'}><MenuItem>About Me</MenuItem></RouterLink>
                        <RouterLink to={'/canvas-test'}><MenuItem>Canvas Test</MenuItem></RouterLink>
                    </MenuList>
                </Menu>
            </Box>

            <Box maxW={'5xl'} m={'0 auto'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/canvas-test'} element={<PointMapVisualization/>}/>
                </Routes>
            </Box>
        </Box>
    );
}

export default App;

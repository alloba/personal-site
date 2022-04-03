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
                <MenuList>{menuRender}</MenuList>
            </Menu>
            </Box>
            <Box maxW={'5xl'} m={'0 auto'}>
                <Routes>{routes}</Routes>
            </Box>
        </Box>
    );
}

const menuItems = [
    new NavigationComponent('Home', 'Home page for website', '/', <Home/>),
    new NavigationComponent('Projects', 'Projects page', '/projects', <Projects/>),
    new NavigationComponent('About', 'About me.', '/about', <About/>),
    new NavigationComponent('CanvasTest', 'Testing Canvas Api for Visuals.', '/canvas-test', <PointMapVisualization/>)
]

const routes = menuItems.map(item =>
    <Route key={item.title} path={item.link} element={item.component}/>)

const menuRender = menuItems.map(item =>
    <RouterLink to={item.link} key={item.title}><MenuItem>{item.title}</MenuItem></RouterLink>)

export default App;

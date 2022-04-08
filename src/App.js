import React from 'react';

import {Box, HStack, Text, VStack} from "@chakra-ui/react";
import {Link as RouterLink, Route, Routes} from 'react-router-dom';
import Home from "./routes/Home/Home";
import Projects from "./routes/Projects/Projects";
import About from "./routes/About/About";
import NotFound from "./routes/NotFound/NotFound";

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
        <VStack padding={'1rem'} >
            <HStack gap={'0.3rem'} padding={'1rem'}>
                <RouterLink to={'/'}>               <Text fontSize={'1.2rem'} fontWeight={'semibold'}>Home</Text></RouterLink>
                <RouterLink to={'/about'}>          <Text fontSize={'1.2rem'} fontWeight={'semibold'}>About</Text></RouterLink>
                <RouterLink to={'/projects'}>       <Text fontSize={'1.2rem'} fontWeight={'semibold'}>Projects</Text></RouterLink>
            </HStack>
            <Box maxWidth={'1000px'}>
                <Routes>
                    <Route path={'/'} element={<Home/>} exact={true}/>
                    <Route path={'/about/*'} element={<About/>}/>
                    <Route path={'/projects/*'} element={<Projects/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Box>
        </VStack>

    );
}

export default App;

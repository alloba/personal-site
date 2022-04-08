import React from 'react';
import {Box, List, ListItem} from "@chakra-ui/react";
import {Link as RouterLink, Route, Routes} from 'react-router-dom'
import AboutMe from "./AboutMe";
import AboutSite from "./AboutSite";
import PageWrapper from "../../components/PageWrapper";
import NotFound from "../NotFound/NotFound";

function About() {

    const menu = (
        <List>
            <RouterLink to={'about-me'}><ListItem>About Me</ListItem></RouterLink>
            <RouterLink to={'about-site'}><ListItem>About this Site</ListItem></RouterLink>
        </List>
    )

    return (
        <PageWrapper subMenu={menu}>
            <Box>
                <Routes>
                    <Route path={'/'} exact={true} element={<AboutMe/>}/>
                    <Route path={'about-me'} exact={true} element={<AboutMe/>}/>
                    <Route path={'about-site'} exact={true} element={<AboutSite/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Box>
        </PageWrapper>
    )
}

export default About;

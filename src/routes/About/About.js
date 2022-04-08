import React from 'react';
import {Box, List, Text} from "@chakra-ui/react";
import {Link as RouterLink, Route, Routes} from 'react-router-dom'
import AboutMe from "./AboutMe";
import AboutSite from "./AboutSite";
import PageWrapper from "../../components/PageWrapper";
import NotFound from "../NotFound/NotFound";

function About() {

    const menu = (
        <>
            <RouterLink to={'about-me'}><Text>About Me</Text></RouterLink>
            <RouterLink to={'about-site'}><Text>About this Site</Text></RouterLink>
        </>
    )

    return (
        <PageWrapper subMenu={menu}>
            <>
                <Routes>
                    <Route path={'/'} exact={true} element={<AboutMe/>}/>
                    <Route path={'about-me'} exact={true} element={<AboutMe/>}/>
                    <Route path={'about-site'} exact={true} element={<AboutSite/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </>
        </PageWrapper>
    )
}

export default About;

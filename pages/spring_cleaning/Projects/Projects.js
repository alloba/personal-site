import React from 'react';
import {Text} from "@chakra-ui/react";
import PageWrapper from "../../../src_old/components/PageWrapper";
import {Link as RouterLink, Route, Routes} from "react-router-dom";
import NotFound from "../../../src_old/routes/NotFound/NotFound";
import ProjectKaleidoscope from "./ProjectKaleidoscope";
import ProjectDeveloperSetup from "./ProjectDeveloperSetup";
import {ProjectWsgScraper} from "./ProjectWsgScraper";
import {ProjectDocumentationSite} from "./ProjectDocumentationSite";

export default function Projects() {

    const subMenu = (
        <>
            <RouterLink to={'kaleidoscope'}><Text>Kaleidoscope</Text></RouterLink>
            <RouterLink to={'developer-setup'}><Text>Developer Setup</Text></RouterLink>
            <RouterLink to={'wsg-scraper'}><Text>WSG Scraper</Text></RouterLink>
            <RouterLink to={'documentation-site'}><Text>Documentation Site</Text></RouterLink>
        </>
    )

    return (
        <PageWrapper subMenu={subMenu}>
            <Routes>
                <Route path={'/'} exact={true}/>
                <Route path={'kaleidoscope'} exact={true} element={<ProjectKaleidoscope/>}/>
                <Route path={'developer-setup'} exact={true} element={<ProjectDeveloperSetup/>}/>
                <Route path={'wsg-scraper'} exact={true} element={<ProjectWsgScraper/>}/>
                <Route path={'documentation-site'} exact={true} element={<ProjectDocumentationSite/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </PageWrapper>
    )
}

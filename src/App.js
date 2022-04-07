import React from 'react';

import {Box, Grid, GridItem, List, ListItem} from "@chakra-ui/react";
import {Link as RouterLink, Route, Routes} from 'react-router-dom'
import Home from "./routes/Home/Home";
import Projects from "./routes/Projects/Projects";
import About from "./routes/About/About";
import PointMapVisualization from "./routes/PointMapVisualization/PointMapVisualization";
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
        <Grid templateColumns={'repeat(6, 1fr)'}>

            <GridItem colSpan={1}>
                <Box paddingLeft={'1em'} paddingTop={'8em'} width={'10em'}>
                    <List>
                        <RouterLink to={'/'}> <ListItem>Home </ListItem> </RouterLink>
                        <RouterLink to={'/projects'}> <ListItem>Projects </ListItem> </RouterLink>
                        <RouterLink to={'/about'}> <ListItem>About Me </ListItem> </RouterLink>
                        <RouterLink to={'/canvas-test'}> <ListItem>Canvas Test </ListItem> </RouterLink>
                    </List>
                </Box>
            </GridItem>

            <GridItem colSpan={4}>
                <Box>
                    <Routes>
                        <Route path={'/'} exact={true} element={<Home/>}/>
                        <Route path={'/projects'} element={<Projects/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/canvas-test'} element={<PointMapVisualization/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </Box>
            </GridItem>

            <GridItem colSpan={1}><Box/></GridItem>

        </Grid>
    );
}

export default App;

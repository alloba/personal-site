import React from 'react';
import './App.css';

import {Routes, Route} from 'react-router-dom'
import NavigationComponent from "./data-structures/NavigationComponent";
import MenuTop from "./components/MenuTop/MenuTop";
import Home from "./routes/home/Home";
import Projects from "./routes/projects/Projects";
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
        <div className="App">
            <MenuTop menuObjects={menuItems}/>
            <div className={'routes'}>
                <Routes>{routes}</Routes>
            </div>
        </div>
    );
}

const menuItems = [
    new NavigationComponent('Home', 'Home page for website', '/', <Home/>),
    new NavigationComponent('Projects', 'Projects page', '/projects', <Projects/>),
    new NavigationComponent('About', 'About me.', '/about', <About/>),
    new NavigationComponent('CanvasTest', 'Testing Canvas Api for Visuals.', '/canvas-test', <PointMapVisualization/>)
]

const routes = menuItems.map(item =>
    <Route key={item.title} path={item.link} element={item.component}>{item.title}</Route>
)

export default App;

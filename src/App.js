import './App.css';

import Home from "./home/Home";
import Projects from "./projects/Projects";
import {
    Routes,
    Route,
    Link
} from 'react-router-dom'


const headerSections = [
    {title: 'Home', location: '/', component: <Home/>},
    {title: 'Projects', location: '/projects', component: <Projects/>}
]
const headerLinks = headerSections.map(section =>
    <li className={'header-list-item'} key={section.title}>
        <Link className={'header-list-link'} to={section.location}>{section.title}</Link>
    </li>
)
const headerRoutes = headerSections.map(section =>
    <Route key={section.title} path={section.location} element={section.component}>{section.title}</Route>
)


function App() {
    return (
        <div className="App">
            <div className={'header-section'}>
                <ul className={'header-links'}>{headerLinks}</ul>
            </div>
            <Routes>{headerRoutes}</Routes>
        </div>
    );
}

export default App;

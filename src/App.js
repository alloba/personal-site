import './App.css';

import Home from "./routes/home/Home";
import Projects from "./routes/projects/Projects";
import {
    Routes,
    Route
} from 'react-router-dom'
import MenuTop from "./components/MenuTop/MenuTop";
import {NavigationComponent} from "./data-structures/NavigationComponent";

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
            <Routes>{routes}</Routes>
        </div>
    );
}

const menuItems = [
    new NavigationComponent('Home', 'Home page for website', '/', <Home/>),
    new NavigationComponent('Projects', 'Projects page', '/projects', <Projects/>)
]

const routes = menuItems.map(item =>
    <Route key={item.title} path={item.link} element={item.component}>{item.title}</Route>
)

export default App;

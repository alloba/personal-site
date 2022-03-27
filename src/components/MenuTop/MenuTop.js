import React from 'react';
import './MenuTop.css';
import {Link} from "react-router-dom";

const MenuTop = ({menuObjects}) => (
    <div className="MenuTop">
        <ul>
            {generateMenu(menuObjects)}
        </ul>
    </div>
);

/**
 * Generate menu object HTML from provided object list..
 *
 * @param {Array<NavigationComponent>} menuObjects
 * @returns {JSX.Element}
 */
function generateMenu(menuObjects) {
    const menuList = menuObjects.map(item => generateMenuItem(item))
    return (<ul>{menuList}</ul>)
}

/**
 * Generate menu item from provided object.
 * @param {NavigationComponent} itemObject
 * @returns {JSX.Element}
 */
function generateMenuItem(itemObject) {
    return (
        <li key={itemObject.title}>
            <Link className={'header-list-link'}
                  to={itemObject.link}
                  title={itemObject.description}>
                {itemObject.title}
            </Link>
        </li>
    )
}


MenuTop.propTypes = {};

MenuTop.defaultProps = {};

export default MenuTop;

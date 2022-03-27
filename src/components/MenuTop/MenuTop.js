import React from 'react';
import './MenuTop.css';
import {Link} from "react-router-dom";

const MenuTop = ({menuObjects}) => (
    <div className="MenuTop">
        {generateMenu(menuObjects)}
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
    return (<ul className={'menu-top-list'}>{menuList}</ul>)
}

/**
 * Generate menu item from provided object.
 * @param {NavigationComponent} itemObject
 * @returns {JSX.Element}
 */
function generateMenuItem(itemObject) {
    return (
        <li className={'menu-top-list-item'} key={itemObject.title}>
            <Link className={'menu-top-anchor'}
                  to={itemObject.link}
                  title={itemObject.description}>
                {itemObject.title}
            </Link>
        </li>
    )
}

export default MenuTop;

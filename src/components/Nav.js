import React from 'react'
import {MenuList, MenuItem} from '@material-ui/core';
import './Nav.css'

const Nav = () => {
    return (
        <MenuList className="menu">
            <MenuItem>
                <a href="/">Main</a>
            </MenuItem>
            
        </MenuList>
    )
}

export default Nav
import React from 'react'
import { NavLink } from 'react-router-dom'

import './style/sidemenu.css'

function Sidemenu(props) {
    return (
        <div className='sidemenu'>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            {
                (props.profile === 'Manager') ? <NavLink activeClassName="active" to="/info">Info</NavLink> :
                    (props.profile === 'Marketing' || props.profile === 'VIP') ? <NavLink activeClassName="active" to="/report">Reports</NavLink> :
                        (props.profile === 'Admin') ?
                            <div>
                                <NavLink activeClassName="active" to="/info">Info</NavLink>
                                <NavLink activeClassName="active" to="/report">Reports</NavLink>
                                <NavLink activeClassName="active" to="/user">Users</NavLink>
                            </div> : ''
            }
        </div>
    )
}

export default Sidemenu
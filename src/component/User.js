import React, { useState } from 'react'
import '../style/user.css'
import axios from 'axios';
const user = [
    {
        name: 'avinash',
        mobile: '8127730824',
        role: 'Admin'
    },
    {
        name: 'avinash',
        mobile: '8127730824',
        role: 'Admin'
    },
    {
        name: 'avinash',
        mobile: '8127730824',
        role: 'Admin'
    },
    {
        name: 'avinash',
        mobile: '8127730824',
        role: 'Admin'
    }
]

function User() {
    return (
        <div className="user">
            <h1>Name of the user:</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Mobile number</th>
                    <th>Role</th>
                </tr>
                {user.map((data, index) => {
                    return (
                        <tr id='index'>
                            <td>{data.name}</td>
                            <td>{data.mobile}</td>
                            <td>{data.role}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default User

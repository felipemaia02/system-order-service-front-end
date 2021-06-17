import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Header(){
    return(
        <div className='header'>
            <div className='header__main'>
                <div>
                    <h2>SOS</h2>
                </div>
                <ul>
                    <li>
                        <NavLink to='/'>
                            Cliente
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/adm'>
                            Admin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dev'>
                            Dev
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
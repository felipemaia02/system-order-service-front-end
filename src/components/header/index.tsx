import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import Icon from '../../assets/focavetor.png'

export default function Header(){
    return(
        <div className='header'>
            <div className='header__main'>
                <div>
                    <NavLink to='/'>
                        <img src={Icon} alt=''/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
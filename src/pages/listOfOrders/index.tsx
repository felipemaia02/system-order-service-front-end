import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Accordion } from '../../components/Accordion';
import Header from '../../components/header';


import api from '../../config/api';
import './style.scss'


export default function ListOfOrders(){
    return(
        <>
        
        <div className='pagelist-order'>
        <h1>Serviços do cliente</h1>
            <div className='pagelist-order__main'>
                <Accordion title="service 01">
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </Accordion>
                <Accordion title="service 01">
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </Accordion>
                <Accordion title="service 01">
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </Accordion>
                <Accordion title="service 01">
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </Accordion>
            </div>
        </div>
        </>
    );
}
  

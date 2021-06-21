import React, { useState, useEffect, FormEvent } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import ReactModal from 'react-modal';
import { Accordion } from '../../components/Accordion';

import Header from '../../components/header';


import api from '../../config/api';
import './style.scss'


export default function ListOfOrders(){
    const [modal, setModal] = useState(false);

    return(
        <>
        <div className='pagelist-order'>
        <h1>Serviços do cliente</h1>
            <div className='pagelist-order__main'>
                <Accordion title="Title">
                    <p>Descrição</p>
                    <div className='button-div'> 
                        <button type="button" className='button-delete' onClick={() => {}}> 
                            <FiTrash2/>
                        </button>
                    </div>
                </Accordion>
            </div>
        </div>
        </>
    );
}
  

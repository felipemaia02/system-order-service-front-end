import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import './style.scss'

export default function createOrder(){
    return(
        <div className="create-order">
            <h1>Criar OS</h1>
            <div className='create-order__main'>
                <form>
                    <div>
                        <label>Descrição:</label>
                        <textarea placeholder='Inserir descrição'/>
                    </div>
                    <div className='button-create'>
                        <button type="submit" className='button-add'> 
                            Criar chamado
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

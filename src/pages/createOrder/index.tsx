import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import {createOS} from '../../services/order'

import './style.scss'

export default function CreateOrder(){
  const [text, setText] = useState('ADM');
  const [clienteId, setClienteId] = useState(0);


  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params: any = Object.fromEntries(urlSearchParams.entries());
    if(params.userId) {
        setClienteId(params.userId)
    } 
  }, [])

  const postOs = async () => {
    await createOS({clienteId, descricao:text})
  }


    return(
        <div className="create-order">
            <h1>Criar OS</h1>
            <div className='create-order__main'>
                <form>
                    <div>
                        <label>Descrição:</label>
                        <textarea onChange={event=>setText(event.target.value)}placeholder='Inserir descrição'/>
                    </div>
                    <div className='button-create'>
                        <button onClick={postOs} type="submit" className='button-add'> 
                            Criar chamado
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

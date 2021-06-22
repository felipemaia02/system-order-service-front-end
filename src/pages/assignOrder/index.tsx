import React, { useState, useEffect, FormEvent } from "react";

import './style.scss'

export default function AssignOrder () {
    const [duration, setDuration] = useState(0)
    const [userId, setUserId] = useState(0)

    let orderId:number

    useEffect(() => {
        
    })

    return (
      <div className="assign-order">
            <h1>Criar OS</h1>
            <div className='assign-order__main'>
                <form>
                    <div>
                        <label>Data Final:</label>
                        <input type="number" placeholder='Data Final'/>
                    </div>
                    <div>
                        <label>Usuários:</label>
                        <select>
                          <option value="value">Valor1</option>
                        </select>
                    </div>
                    <div className='button-create'>
                        <button type="submit" className='button-add'> 
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
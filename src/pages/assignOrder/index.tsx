import React, { useState, useEffect, FormEvent } from "react";

import {assignOrderToDev} from '../../services/order'
import {listDevs} from '../../services/dev'
import {IUser} from '../../utils/interfaces'
import './style.scss'

export default function AssignOrder () {
    const [duration, setDuration] = useState(0)
    const [userId, setUserId] = useState(0)
    const [orderId, setOrderId] = useState(0)
    const [devs, setDevs] = useState<IUser[]>([])

    
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params: any = Object.fromEntries(urlSearchParams.entries());
        console.log(params)
        if (params.orderId) setOrderId(params.orderId)
        listDevs().then(devs => {
            if (devs){
                setDevs(devs)
                if(devs.length === 1) setUserId(devs[0].id)
            } 
        })
    },[])

    const assingOrder = async () => {
        assignOrderToDev({devId:userId, orderId}, duration).then(resp => console.log(resp)).catch(err => console.log(err))
    }

    return (
      <div className="assign-order">
            <h1>Criar OS</h1>
            <div className='assign-order__main'>
                <form>
                    <div>
                        <label>Data Final:</label>
                        <input onChange={event => setDuration(parseInt(event.target.value))} type="number" placeholder='Data Final'/>
                    </div>
                    <div>
                        <label>Usuários:</label>
                               <select onChange={event => {setUserId(parseInt(event.target.value))}}>
                               {devs.map((dev:any) => (
                                   <option value={dev.id} >{dev.nome}</option>
                            ))}
                             </select> 
                            
                    </div>
                    <div className='button-create'>
                        <button onClick={assingOrder} type="submit" className='button-add'> 
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
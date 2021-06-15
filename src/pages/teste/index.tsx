import React from 'react';

import {listDevs} from '../../services/dev' //OK
import {createFeedback} from '../../services/feedback'
import {assignOrderToDev,createOS,finalizeOs,findActiveOSAndAssignToDev,findOSAndAssignedToDev} from '../../services/order'
// OK OK OK NOK OK 
const list = async () => {
    // const devs = await assignOrderToDev({
    //     orderId: 2,
    //     devId: 3
    // }, 4) 
    // const devs = await createOS({
    //     descricao : 'test',
    //     clienteId: 1
    //     }) 
    // const devs = await listDevs()
    // const devs = await findActiveOSAndAssignToDev({
    //     devId: 3,
    //     status: 'ABERTA'})
    // const devs = await findOSAndAssignedToDev(3)
    // const devs = finalizeOs(1)
    const devs = await createFeedback(2, { autorId: 1,
        mensagem: 'vai que vai'})
    console.log('devs => ',devs)
} 

const index : React.FC = () => {
    return(
        <div>
        <h1>Pai ta on</h1>
        <button onClick={() => list()}> test </button>
        </div>
    );
}

export default index
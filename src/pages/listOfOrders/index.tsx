import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Accordion } from "../../components/Accordion";
import Header from "../../components/header";
import { IOrder } from "../../utils/interfaces";
import { findOSAssignedToDev, findAllOs, findOSCreatedByClient } from "../../services/order";

import "./style.scss";

export default function ListOfOrders() {
  const [orders, serOrder] = useState<IOrder[]>([]);
  const [userTypeState, setUserType] = useState('ADM');

  let userType = 'ADM'
  let userId = 1

  useEffect(() => {
    defineuserIdAndType();
    switch (userType) {
      case 'DEV':
        console.log(userId)
        getDevOSs(userId);
        break;
      case 'ADM':
        getAllOSs();
        break;
      case 'USR':
        getClientOSs(userId)
        break;
      default:
        getAllOSs();
        break;
    }
  }, []);

  const defineuserIdAndType = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params: any = Object.fromEntries(urlSearchParams.entries());
    if (params) {
        try {
            userType = params.userType
            setUserType(userType)
            userId = params.userId
        } catch (error) {
            console.log(error)
        }
    } 
  };

  const getDevOSs = async (id:number) => {
    const orders = await findOSAssignedToDev(id);
    console.log(orders);
    if (orders) serOrder(orders);
  };

  const getAllOSs = async () => {
    const orders = await findAllOs();
    console.log(orders);
    if (orders) serOrder(orders);
  };

  const getClientOSs = async (clientId:number) => {
    const orders = await findOSCreatedByClient(clientId);
    console.log(orders);
    if (orders) serOrder(orders);
  };

  const atribuirOs = (orderId:number) => {
    //mudar para tela de atribuir OS
  }

  const criarOs = () => {
    
    //mudar para tela de criar OS
  }

  return (
    <>
      <div className="pagelist-orders">
        <h1>Serviços</h1>
        <div className="pagelist-order__main">
          {orders.map( order => (
            <Accordion title={order.descricao}>
                {order.dataFechamento && (<p>dataFechamento: {order.dataFechamento}</p>)}
                {order.dataInicioAtendimento && (<p>dataInicioAtendimento: {order.dataInicioAtendimento}</p>)}
                <p>prazoParaConclusao: {order.prazoParaConclusao}</p>
                {order.assunto && (<p>assunto: {order.assunto}</p>)}
                <p>status: {order.status}</p>
                {(order.status === 'ABERTA' && userTypeState === 'ADM') &&(<button onClick={() => atribuirOs(order.id)}>Atribuir OS</button>)}
                {(userTypeState === 'USR' || userTypeState === 'DEV') && (<a href={`/feedback?orderId=${order.id}&userId=${userId}`}>feedback</a>)}
            </Accordion>
          ))}
          {userTypeState === 'USR' && (<button onClick={()=>criarOs}>Criar OS</button>)}
        </div>
      </div>
    </>
  );
}
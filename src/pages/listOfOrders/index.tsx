import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Accordion } from "../../components/Accordion";
import { IOrder } from "../../utils/interfaces";
import { findOSAndAssignedToDev, findAllOs } from "../../services/order";

import "./style.scss";

export default function ListOfOrders() {
  const [orders, serOrder] = useState<IOrder[]>([]);
  const [userId, setUserId] = useState(1);
  const [userType, setUserType] = useState('ADM');

  useEffect(() => {
    defineuserIdAndType();
    switch (userType) {
      case 'DEV':
        getDevOSs(userId);
        break;
      case 'ADM':
        getAllOSs();
        break;
      case 'USR':
        //getClienteOSs
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
            setUserType(params.userType)
            setUserId(parseInt(params.userId));
        } catch (error) {
            console.log(error)
        }
    } 
  };

  const getDevOSs = async (id:number) => {
    const orders = await findOSAndAssignedToDev(id);
    console.log(orders);
    if (orders) serOrder(orders);
  };

  const getAllOSs = async () => {
    const orders = await findAllOs();
    console.log(orders);
    if (orders) serOrder(orders);
  };

  return (
    <>
      <div className="pagelist-order">
        <h1>Serviços do cliente</h1>
        { orders.length <= 0 ? (
            <h2>Vazio</h2>
        ): (
            <div className="pagelist-order__main">
            {orders.map( order => (
              <Accordion title="service 01">
                  {order.descricao && <p>Descricao: {order.descricao}</p> }
                  {order.dataFechamento && (<p>dataFechamento: {order.dataFechamento}</p>)}
                  {order.dataInicioAtendimento && (<p>dataInicioAtendimento: {order.dataInicioAtendimento}</p>)}
                  {order.prazoParaConclusao && (<p>prazoParaConclusao: {order.prazoParaConclusao}</p>)}
                  {order.assunto && (<p>assunto: {order.assunto}</p>)}
                  {order.status && (<p>status: {order.status}</p>)}
                  <a href={`/feedback?orderId=${order.id}&userId=${userId}`}>feedback</a>
              </Accordion>
              /* LINK PARA CONVERSAÇÃO [CLIENTE | DEV]  {order.feedbacks}*/
            ))}
            {/* BOTÃO DE CRIAR OS */}
          </div>
        )}
      </div>
    </>
  );
}
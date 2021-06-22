import React, { useState, useEffect } from "react";
import { Accordion } from "../../components/Accordion";
import { IFeedback } from "../../utils/interfaces";
import { getFeedback, createFeedback } from "../../services/feedback";
import {findOs} from '../../services/order'

import "./style.scss";

export default function ListOfOrders() {
    const [feedbacks, serFeedbacks] = useState<IFeedback[]>([]);
    const [text, setText] = useState("");
    const [sendingMsg, setSendingMsg] = useState(false);
    const [orderName, setOrderName] = useState('');

    let orderId:number
    let autorId:number

    useEffect(() => {
        setQueryValues()
        setFeedbackAndOrderName()
    }, []);

    const setQueryValues = () =>{
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params: any = Object.fromEntries(urlSearchParams.entries());
        if(params?.userId){
            autorId = params.userId
        }
        if(params?.orderId){
            orderId = parseInt(params.orderId); 
        }
    }

    const setFeedbackAndOrderName = async () => {
        const feedback = await getFeedback(orderId);
        const order = await findOs(orderId)
        if (order) setOrderName(order.descricao)
        if (feedback) serFeedbacks(feedback);
    };

    const sendMessage = async () => {
        setSendingMsg(true);
        try {
            const newFeedback = await createFeedback(orderId, { autorId: autorId, mensagem: text }).then(resp => {
                if (resp) {
                    const newFeedback: IFeedback = resp.data
                    let newFeedbacks = [...feedbacks]
                    newFeedbacks.push(newFeedback)
                    serFeedbacks(newFeedbacks)
                }
                setSendingMsg(false);
            });
        } catch (error) {
            setSendingMsg(false);
            console.log(error);
        }
    };

    return (
        <>
            <div className="pagelist-orders">
                <h1>FeedBack {orderName}</h1>
                <div className="pagelist-order__main">
                    {feedbacks.map((feedback) => (
                        <>
                            {feedback.autor.nome && (
                                <p>
                                    {feedback.autor.nome}: {feedback.descricao}
                                </p>
                            )}
                        </>
                    ))}
                    <textarea
                        onChange={(event) => {
                            setText(event.target.value);
                        }}
                    ></textarea>
                    {!sendingMsg && <button onClick={sendMessage}>enviar</button>}
                    {sendingMsg && <p>CARREGANDO</p>}
                </div>
            </div>
        </>
    );
}

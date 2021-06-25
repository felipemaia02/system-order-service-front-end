import React, { useState, useEffect } from "react";
import { IFeedback } from "../../utils/interfaces";
import { getFeedback, createFeedback } from "../../services/feedback";
import {findOs} from '../../services/order'

import "./style.scss";

export default function ListOfOrders() {
    const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
    const [text, setText] = useState("");
    const [sendingMsg, setSendingMsg] = useState(false);
    const [orderName, setOrderName] = useState('');
    const [orderIdState, setOrderIdState] = useState(0);
    const [autorIdState, setAutorIdState] = useState(0);

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
            setAutorIdState(autorId)
        }
        if(params?.orderId){
            orderId = parseInt(params.orderId);
            setOrderIdState(orderId) 
        }
    }

    const setFeedbackAndOrderName = async () => {
        const feedback = await getFeedback(orderId);
        const order = await findOs(orderId)
        if (order) setOrderName(order.descricao)
        if (feedback) setFeedbacks(feedback);
    };

    const sendMessage = async () => {
        setSendingMsg(true);
        try {
            await createFeedback(orderIdState, { autorId: autorIdState, mensagem: text }).then(resp => {
                if (resp) {
                    const newFeedback: IFeedback = resp.data
                    let newFeedbacks = [...feedbacks]
                    newFeedbacks.push(newFeedback)
                    setFeedbacks(newFeedbacks)
                    setText('')
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
            <div className="feedback-chat">
                <h1>FeedBack {orderName}</h1>
                <div className="feedback-chat__main">
                    {feedbacks.map((feedback, index) => (
                        <>
                            {feedback.autor.nome && (
                                <p>
                                    {feedback.autor.nome}: {feedback.descricao}
                                </p>
                            )}
                        </>
                    ))}
                    <textarea
                        value={text}
                        onChange={(event) => {
                            setText(event.target.value);
                        }}
                    ></textarea>
                    <div className="button-feedback">
                        {!sendingMsg && <button className = 'button-feedback-create' onClick={sendMessage}>enviar</button>}
                        {sendingMsg && <p>CARREGANDO</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

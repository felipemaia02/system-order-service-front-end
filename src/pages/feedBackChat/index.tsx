import React, { useState, useEffect } from "react";
import { Accordion } from "../../components/Accordion";
import { IFeedback } from "../../utils/interfaces";
import { getFeedback, createFeedback } from "../../services/feedback";

import "./style.scss";

export default function ListOfOrders() {
    const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
    const [text, setText] = useState("");
    const [sendingMsg, setSendingMsg] = useState(false);
    const [stateOrderId, setSstateOrderId] = useState(0);
    const [stateAutorId, setStateAutorId] = useState(0);

    let orderId: number;
    useEffect(() => {
        setQueryValues()
        setFeedback();
    }, []);

    const setQueryValues = () =>{
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params: any = Object.fromEntries(urlSearchParams.entries());
        if(params?.userId){
            setStateAutorId(params.userId)
        }
        if(params?.orderId){
            orderId = parseInt(params.orderId); 
            setSstateOrderId(orderId)
        }
    }

    const setFeedback = async () => {
        const feedback = await getFeedback(orderId);
        console.log(feedback);
        if (feedback) setFeedbacks(feedback);
    };

    const sendMessage = async () => {
        setSendingMsg(true);
        try {
            const newFeedback = await createFeedback(stateOrderId, { autorId: stateAutorId, mensagem: text }).then(resp => {
                if (resp) {
                    const newFeedback: IFeedback = resp.data
                    let newFeedbacks = [...feedbacks]
                    newFeedbacks.push(newFeedback)
                    setFeedbacks(newFeedbacks)
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
                <h1>FeedBack [NomeDaOrder]</h1>
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

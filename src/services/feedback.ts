import api from '../config/api'



const createFeedback = async (orderId:number, payload:IAuthorAndMessage) => {
    try {
        return await api.post(`/ordens/${orderId}/feedbacks`, payload)
    } catch (err) {
        //tratar erro
        console.log(err)
        return {err}
    }
}

const getFeedback = async (orderId:number,) => {
    try {
        return (await api.get(`/ordens/${orderId}/feedbacks`)).data
    } catch (err) {
        //tratar erro
        console.log(err)
        return {err}
    }
}

export  {
    createFeedback,
    getFeedback
}

interface IAuthorAndMessage {
    autorId: number,
    mensagem: string
}
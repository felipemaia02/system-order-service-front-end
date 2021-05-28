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

export  {
    createFeedback
}

interface IAuthorAndMessage {
    autorId: number,
    mensagem: string
}
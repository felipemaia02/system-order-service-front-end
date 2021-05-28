import api from '../config/api'



const createOS = async (payload: IOS) => {
    try {
        return (await api.post('/ordens', payload)).data
    } catch (err) {
        //tratar erro
        console.log(err)
        return {err}
    }
}

const assignOrderToDev = async (params: IOrderAndDevId, prazo: number) => {
    const {orderId, devId} = params
    try {
        return (await api.post(`/ordens/${orderId}/devs/${devId}`, {prazo})).data
    } catch (err) {
        //tratar erro
        console.log(err)
        return {err}
    }
}

const findActiveOSAndAssignToDev = async (query: IDevIdAndStatus) => {
    const {status, devId} = query
    try {
        return (await api.get(`/ordens/?dev=${devId}&status=${status}`)).data
    } catch (err) {
        //tratar erro
        console.log(err)
        return {err}
    }
}

const findOSAndAssignedToDev = async (devId: number) => {
    try {
        return (await api.get(`/ordens/?dev=${devId}`)).data
    } catch (err) {
        //tratar erro
        console.log(err)
        return {err}
    }
}

const finalizeOs = async (id: number) => {
    try {
        return (await api.delete(`/ordens/${id}`)).data
    } catch (err) {
        //tratar erro
        console.log(err)
        return {err}
    }
}

export  {
    createOS,
    assignOrderToDev,
    findOSAndAssignedToDev,
    findActiveOSAndAssignToDev,
    finalizeOs
}

interface IDevIdAndStatus {
    devId: number,
    status: string
}

interface IOrderAndDevId {
    orderId: number,
    devId: number
}

interface IOS {
    descricao : string,
    clienteId: number
}
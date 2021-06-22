import api from '../config/api'
import {IOrder} from '../utils/interfaces'


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

const findOSAssignedToDev = async (devId: number) => {
    try {
        const orders:IOrder[] = (await api.get(`/ordens/?dev=${devId}`)).data
        return orders
    } catch (err) {
        //tratar erro
        console.log(err)
        return false
    }
}

const findOSCreatedByClient = async (clientId: number) => {
    try {
        const orders:IOrder[] = (await api.get(`/ordens/?cliente=${clientId}`)).data
        return orders
    } catch (err) {
        //tratar erro
        console.log(err)
        return false
    }
}

const listOs = async () => {
    try {
        const orders:IOrder[] = (await api.get(`/ordens`)).data
        return orders
    } catch (err) {
        //tratar erro
        console.log(err)
        return false
    }
}

const findOs = async (id:number) => {
    try {
        const orders:IOrder = (await api.get(`/ordens/${id}`)).data
        return orders
    } catch (err) {
        //tratar erro
        console.log(err)
        return false
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
    findOSAssignedToDev,
    findActiveOSAndAssignToDev,
    finalizeOs,
    listOs,
    findOSCreatedByClient,
    findOs
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
interface IUser {
    id: number,
    email: string,
    nome: string,
    tipo: IUserType
}

interface IUserType {
    id:number,
    nome: string
}

interface IFeedback {
    id: number
    descricao: string|null
    autor: IUser
    dataDeCriacao: Date
}

interface IOrder {
    id: number,
    descricao: string,
    dataAbertura: Date,
    dataFechamento: Date|null,
    dataInicioAtendimento: Date|null,
    prazoParaConclusao: number,
    cliente: IUser,
    desenvolvedor: IUser,
    justificativa: string|null,
    assunto: string|null,
    feedbacks: IFeedback[],
    status: string
}

export type {
    IOrder,
    IFeedback,
    IUserType,
    IUser
}
import api from '../config/api'



const listDevs = async () => {
    try {
        return (await api.get('/devs')).data
    } catch (err) {
        //tratar erro
        console.log(err)
        return false
    }
}

export  {
    listDevs
}
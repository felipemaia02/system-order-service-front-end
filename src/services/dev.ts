import api from '../config/api'



const listDevs = async () => {
    try {
        console.log('listDevs')
        return await api.get('/devs')
    } catch (err) {
        //tratar erro
        console.log(err)
        return {err}
    }
}

export  {
    listDevs
}
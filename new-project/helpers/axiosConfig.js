import axios from 'axios'
import { getAccessToken } from '../helpers/helpersFunction'

export const axiosConfig = axios.create({
    baseURL: 'http://localhost:8080/'
})

export const getAllUsers = async () => {
    try {
        return await axiosConfig.get('/api/user/',
            { headers: { Authorization: await getAccessToken() } }
        )
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (userId) => {

    try {
        return await axiosConfig.get(`/api/user/${userId}`,
            { headers: { Authorization: await getAccessToken() } }
        )
    } catch (error) {
        console.log(error)
    }
}















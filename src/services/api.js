import axios from 'axios';

const API_BASE = "https://rickandmortyapi.com/api";


const api = axios.create({
    baseURL: API_BASE
})

const api2 = axios.create({
    baseURL: "https://api.github.com"
})


export default {
    listGit: async (newUser) => {
        const response = await api2.get(`/users/${newUser}`)
        return response.data
    },
    listAll: async (mode) => {
        let resp = [];
        try {
            resp = await api.get(`/${mode}`);

            return resp.data

        } catch (error) {
            console.error(error)
        }

    },
    listSearch: async (mode, search, nameSearch) => {
        let resp = [];
        try {
            resp = await api.get(`/${mode}/?${search}=${nameSearch}`);
            return resp.data

        } catch (error) {
            console.error(error)
        }
    },
    listForId: async (mode, numberId) => {
        let resp = [];
        try {
            resp = await api.get(`/${mode}/${numberId}`);
            return resp.data
        } catch (error) {
            console.error(error)
        }
    },
    listAllPages: async (search) => {
        let resp = [];
        try {
            resp = await api.get(`/${search}`);
            return resp.data

        } catch (error) {
            console.error(error)
        }

    }

}


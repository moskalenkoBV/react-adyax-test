import axios from 'axios'

const API_PATH = 'http://localhost:3002/api'

export default {
	products: {
		get: () => axios.get(`${API_PATH}/products`).then(response => response.data)
	},
  users: {
    add: data => axios.post(`${API_PATH}/users`, data).then(response => response.data),
    get: () => axios.get(`${API_PATH}/users`).then(response => response.data),
    login: credentials => axios.post(`${API_PATH}/users/login`, credentials).then(response => response.data),
    getUserData: token => axios.post(`${API_PATH}/users/userdata`, token).then(response => response.data),
    update: (token, userData) => axios.post(`${API_PATH}/users/update`, {token, userData}).then(response => response.data)
  },
  orders: {
    make: (email, products) => axios.post(`${API_PATH}/orders`, { email, products }).then(response => response.data)
  }
}
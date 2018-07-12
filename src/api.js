import axios from 'axios'

const apiPath = 'http://5b46f9eb81846500140c4384.mockapi.io/adyax/test'

export default {
	products: {
		get: () => ( axios.get(`${apiPath}/products`).then(res => res.data) )
	}
}
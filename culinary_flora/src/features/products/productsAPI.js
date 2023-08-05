import axios from 'axios'
export function fetchProducts() {
  return axios.get('https://floraapi.onrender.com/products')
}

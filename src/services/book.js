import axios from 'axios'

const baseUrl = 'http://localhost:3001/books'

const getOne = url => {
  const request = axios.get(`${baseUrl}/${url}`)
  return request.then(response => response.data)
}

export default { getOne }

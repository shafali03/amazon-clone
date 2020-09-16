import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-clone-84608.cloudfunctions.net/api'
  // http://localhost:5001/clone-84608/us-central1/api
  // https://us-central1-clone-84608.cloudfunctions.net/api
})

export default instance
class servicesAxios {

  axios
  baseURL

  constructor (axios){
    this.axios = axios;
    this.baseURL = 'http://localhost:3001/employees-list'
  }

  getAll() {
    return this.axios.get(this.baseURL)
  }

  createNew(){
    return this.axios.post('xx')
  }
}

export default servicesAxios
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://0.0.0.0:8000/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const login = async (username: string, password: string) => {
  try {
    const response = await axiosInstance.post('login/', {
      username,
      password
    })
    console.log('Login successful:', response.data)
    return response
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}

export const logout = () => {
  try {
    localStorage.removeItem('authAdmin')
    console.log('Logout successful')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get('books')
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

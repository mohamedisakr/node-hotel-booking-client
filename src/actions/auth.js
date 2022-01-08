import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL
const loginUrl = `${apiUrl}/login`
const registerUrl = `${apiUrl}/register`

export const register = async (user) => {
  try {
    const res = await axios.post(registerUrl, user)
    return res
  } catch (err) {
    console.error(err)
    if (err.response.status === 400) {
    }
  }
}

export const login = async (user) => {
  const {email, password} = user
  const credentials = {email, password}
  try {
    const res = await axios.post(loginUrl, credentials)
    return res
  } catch (err) {
    console.error(err)
    if (err.response.status === 400) {
    }
  }
}

import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL
const url = `${apiUrl}/login`

export const register = async (user) => {
  try {
    const res = await axios.post(url, user)
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
    const res = await axios.post(url, credentials)
  } catch (err) {
    console.error(err)
    if (err.response.status === 400) {
    }
  }
}

// module.exports = {register}

import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL
const url = `${apiUrl}/register`

export const register = async (user) => {
  try {
    // const newUser = {name, email, password}
    const res = await axios.post(url, user)
    // console.log(`register user ${res}`)
    // toast.success('Register success, please login')
    // navigate('/login')
  } catch (err) {
    console.error(err)
    if (err.response.status === 400) {
      //   toast.error(`${err.response.data.message}`)
    }
  }
}

// module.exports = {register}

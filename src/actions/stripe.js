import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL
const url = `${apiUrl}/create-connect-account`

export const createConnectAccount = async (token) => {
  try {
    const res = await axios.post(
      url,
      {},
      {headers: {Authorization: `Bearer ${token}`}},
    )
  } catch (err) {
    console.error(err)
    if (err.response.status === 400) {
    }
  }
}

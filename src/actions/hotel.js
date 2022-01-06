import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL
const url = `${apiUrl}/create-hotel`

export const createHotel = async (token, hotel) => {
  try {
    const res = await axios.post(url, hotel, {
      headers: {Authorization: `Bearer ${token}`},
    })
  } catch (err) {
    console.error(err)
    if (err.response.status === 400) {
    }
  }
}

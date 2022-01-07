import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL
const createUrl = `${apiUrl}/create-hotel`
const getAllUrl = `${apiUrl}/hotels`

export const createHotel = async (token, hotel) => {
  try {
    const res = await axios.post(createUrl, hotel, {
      headers: {Authorization: `Bearer ${token}`},
    })
  } catch (err) {
    console.log(`Error : ${err}`)
    return err.response.data.error
    // if (err.response.status === 400) {
    //   console.log(`Error creating new hotel ${err}`)
    // }
  }
}

export const getAllHotels = async () => {
  try {
    const res = await axios.get(getAllUrl)
    return res
  } catch (err) {
    console.log(`Error : ${err}`)
    return err.response.data.error
  }
}

/*
export const createHotel = async (token, hotel) => {
  try {
    const res = await axios.post(url, hotel, {
      headers: {Authorization: `Bearer ${token}`},
    })
    return res.data
  } catch (err) {
    if (err.status === 400) {
      return err
    }
    // console.log(`Error : ${err}`)
    // return err.response.data //.data.error
    // if (err.response.status === 400) {
    //   console.log(`Error creating new hotel ${err}`)
    // }
  }
}
*/

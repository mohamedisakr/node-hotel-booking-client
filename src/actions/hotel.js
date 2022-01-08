import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL
const createUrl = `${apiUrl}/create-hotel`
const deleteUrl = `${apiUrl}/delete-hotel`
const getAllUrl = `${apiUrl}/hotels`
const getSellerHotelsUrl = `${apiUrl}/seller`
// const getSellerHotelsUrl = `${apiUrl}/seller-hotels`

export const createHotel = async (token, hotel) => {
  try {
    const res = await axios.post(createUrl, hotel, {
      headers: {Authorization: `Bearer ${token}`},
    })
    return res
  } catch (err) {
    console.log(`Error : ${err}`)
    return err.response.data.error
    // if (err.response.status === 400) {
    //   console.log(`Error creating new hotel ${err}`)
    // }
  }
}

export const deleteHotel = async (token, hotelId) => {
  try {
    const res = await axios.delete(`${deleteUrl}/${hotelId}`, {
      headers: {Authorization: `Bearer ${token}`},
    })
    // return res
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

export const getAllSellerHotels = async (token) => {
  try {
    const res = await axios.get(getSellerHotelsUrl, {
      headers: {Authorization: `Bearer ${token}`},
    })
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

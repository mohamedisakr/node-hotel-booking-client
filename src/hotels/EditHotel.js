import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {read} from '../actions/hotel'
import {toast} from 'react-toastify'
// import HotelNewForm from '../components/HotelNewForm'

const EditHotel = ({match}) => {
  const [hotel, setHotel] = useState({})
  const {
    auth: {token, user},
  } = useSelector((state) => ({...state}))

  const {hotelId} = useParams()

  useEffect(() => {
    loadSellerHotel()
  }, [])

  const loadSellerHotel = async () => {
    const {
      data: {data},
    } = await read(hotelId)
    console.log(data)
    setHotel(data)
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Edit hotel</h1>
      </div>
      <div className="col-md-2">
        <pre>{JSON.stringify({hotel}, null, 4)}</pre>
      </div>
    </>
  )
}

export default EditHotel

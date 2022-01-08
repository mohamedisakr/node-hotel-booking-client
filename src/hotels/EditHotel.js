import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {read} from '../actions/hotel'
import {toast} from 'react-toastify'
import HotelEditForm from '../components/HotelEditForm'
// import HotelNewForm from '../components/HotelNewForm'

const EditHotel = () => {
  // redux
  const {
    auth: {token, user},
  } = useSelector((state) => ({...state}))

  // parameter
  const {hotelId} = useParams()

  // state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [bed, setBed] = useState('')
  const [postedBy, setPostedBy] = useState('')
  const [preview, setPreview] = useState(
    `${process.env.PUBLIC_URL}/images/100-100-preview.png`,
  )
  const [hotel, setHotel] = useState({})

  useEffect(() => {
    loadSellerHotel()
  }, [])

  const loadSellerHotel = async () => {
    const {
      data: {data},
    } = await read(hotelId)
    console.log(data)
    setHotel(data)
    const {title, content, location, image, price, from, to, bed, postedBy} =
      data
    setTitle(title)
    setContent(content)
    setLocation(location)
    setImage(image)
    setPrice(price)
    setFrom(from)
    setTo(to)
    setBed(bed)
    setPostedBy(postedBy)
  }

  const resetFormState = () => {
    setTitle('')
    setContent('')
    setLocation('')
    setImage('')
    setPrice('')
    setFrom('')
    setTo('')
    setBed('')
    setPostedBy('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPostedBy(user._id)
    const hotelToAdd = {
      title,
      content,
      location,
      image,
      price,
      from,
      to,
      bed,
      postedBy: postedBy || user._id,
    }

    try {
      //   const res = await createHotel(token, hotelToAdd)
      //   console.log(`response : ${res}`)
      //   // console.log(JSON.stringify(hotelToAdd, null, 4))
      //   resetFormState()
      //   toast.success('New hotel added successfully')
    } catch (err) {
      console.log(`Error : ${err}`)
      toast.error(`${err}`)

      // if (err.status === 400) {
      //   toast.error(`${err}`)
      //   // toast.error(`${err.message}`)
      // }

      // if (err.response.status === 400) {
      //   toast.error(`${err.response.data.message}`)
      // }
    }
  }

  const handleImageChange = (event) => {
    const files = event.target.files
    const firstFile = files[0]
    setImage(firstFile.name)
    setPreview(URL.createObjectURL(firstFile))
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleBedChange = (value) => {
    setBed(value)
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Edit hotel</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <HotelEditForm
              handleSubmit={handleSubmit}
              handleImageChange={handleImageChange}
              title={title}
              handleTitleChange={handleTitleChange}
              content={content}
              handleContentChange={handleContentChange}
              location={location}
              handleLocationChange={handleLocationChange}
              price={price}
              handlePriceChange={handlePriceChange}
              bed={bed}
              setBed={setBed}
              handleBedChange={handleBedChange}
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
            />
          </div>
          <div className="col-md-2">
            <img src={preview} alt="preview" className="img img-fluid m-2" />
            <pre>
              {JSON.stringify(
                {
                  postedBy,
                  title,
                  content,
                  location,
                  image,
                  price,
                  from,
                  to,
                  bed,
                },
                null,
                4,
              )}
            </pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditHotel

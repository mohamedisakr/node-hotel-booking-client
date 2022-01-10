import moment from 'moment'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {read} from '../actions/hotel'
import {getNumberOfDays} from '../utils/date'
import {pluralize} from '../utils/text'

const ViewHotel = () => {
  // redux
  const {auth} = useSelector((state) => ({...state}))

  // state
  const [hotel, setHotel] = useState({})
  const navigate = useNavigate()

  // parameter
  const {hotelId} = useParams()

  useEffect(() => {
    loadSellerHotel()
  }, [])

  const loadSellerHotel = async () => {
    const {
      data: {data},
    } = await read(hotelId)
    setHotel(data)
    // console.log(data)
  }

  const diff = (from, to) => {
    return getNumberOfDays(from, to)
  }

  const handleBookClick = (event) => {
    event.preventDefault()
    if (!auth) {
      navigate('/login')
    }
    console.log(
      `get session id from stripe to show a button > checkout with stripe`,
    )
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>{hotel.title}</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              src={hotel.image}
              alt={hotel.title}
              className="img img-fluid m-2"
            />
          </div>

          <div className="col-md-6">
            <h3 className="mt-3">{hotel.content}</h3>
            <p className="alert alert-info">${hotel.price}</p>
            <p className="card-text">
              <span className="float-right text-primary">
                {`Available for ${pluralize(
                  diff(hotel.from, hotel.to),
                  'day',
                )}`}
              </span>
            </p>
            <p className="card-text">
              {`Available from ${moment(new Date(hotel.from)).format(
                'MMMM Do YYYY, h:mm a',
              )}`}
            </p>
            <p className="card-text">
              {`Available to ${moment(new Date(hotel.to)).format(
                'MMMM Do YYYY, h:mm a',
              )}`}
            </p>
            <i className="mb-3">
              Posted by {hotel.postedBy && hotel.postedBy.name}
            </i>
            <br />
            <button
              onClick={handleBookClick}
              className="btn btn-block btn-lg btn-primary mt-3"
            >
              {auth && auth.token ? 'Book Now' : 'Login to Book'}
            </button>
          </div>
        </div>
      </div>

      {/* <div className="col-md-2">
        <pre>{JSON.stringify({hotel}, null, 4)}</pre>
      </div> */}
    </>
  )
}

export default ViewHotel

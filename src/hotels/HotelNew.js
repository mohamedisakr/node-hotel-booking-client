import {useState} from 'react'
import AlgoliaPlaces from 'algolia-places-react'

const NewHotel = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [bed, setBed] = useState('')

  const handleSubmit = (event) => {
    //
  }

  const handleImageChange = (event) => {
    //
  }

  const hotelForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="btn btn-outline-secondary btn-block m-2 text-left">
            Image
            <input
              type="file"
              name="image"
              data-test-id="image"
              onChange={handleImageChange}
              accept="image/*"
              hidden
            />
          </label>
        </div>
      </form>
    )
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Add a new hotel</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">{hotelForm()}</div>
          <div className="col-md-2">Image</div>
        </div>
      </div>
    </>
  )
}

export default NewHotel

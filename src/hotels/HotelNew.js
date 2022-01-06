import {useState} from 'react'
import AlgoliaPlaces from 'algolia-places-react'
// import imagePreview from '../../public/images/100-100-preview.png'

const options = {
  appId: process.env.REACT_APP_ALGOLIA_APP_ID,
  apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
}

const NewHotel = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [bed, setBed] = useState('')
  const [preview, setPreview] = useState(
    `${process.env.PUBLIC_URL}/images/100-100-preview.png`,
  )

  const handleSubmit = (event) => {
    //
  }

  const handleImageChange = (event) => {
    // console.log(`files : ${event.target.files}`)
    setPreview(URL.createObjectURL(event.target.files[0]))
    setImage(event.target.files[0])
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleBedChange = (event) => {
    setBed(event.target.value)
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

          <input
            type="text"
            name="title"
            data-test-id="title"
            className="form-control m-2"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />

          <textarea
            name="content"
            data-test-id="content"
            className="form-control m-2"
            placeholder="Content"
            value={content}
            onChange={handleContentChange}
          />

          <AlgoliaPlaces
            className="form-control ml-2 mr-2"
            placeholder="Where you love to visit!"
            defaultValue={location}
            options={options}
            onChange={({suggestion}) => setLocation(suggestion.value)}
            style={{height: '50px'}}
            data-test-id="location"
          />

          <input
            type="number"
            name="price"
            data-test-id="price"
            className="form-control m-2"
            placeholder="Price"
            value={price}
            onChange={handlePriceChange}
          />

          <input
            type="number"
            name="bed"
            data-test-id="bed"
            className="form-control m-2"
            placeholder="Number of Beds"
            value={bed}
            onChange={handleBedChange}
          />
        </div>
        <button className="btn btn-outline-primary m-2">Save</button>
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
          <div className="col-md-2">
            <img src={preview} alt="preview" className="img img-fluid m-2" />
            <pre>
              {JSON.stringify(
                {
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

export default NewHotel

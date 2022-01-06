// import {useState} from 'react'
// import {useSelector} from 'react-redux'
import {DatePicker, Select} from 'antd'
import moment from 'moment'
// import {createHotel} from '../actions/hotel'
// import {toast} from 'react-toastify'

const {Option} = Select

const HotelNewForm = ({
  handleSubmit,
  handleImageChange,
  title,
  handleTitleChange,
  content,
  handleContentChange,
  location,
  handleLocationChange,
  price,
  handlePriceChange,
  handleBedChange,
  setFrom,
  setTo,
}) => {
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

        <input
          type="text"
          name="location"
          data-test-id="location"
          className="form-control m-2"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
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

        <Select
          placeholder="Number of Beds"
          data-test-id="bed"
          onChange={handleBedChange}
          className="w-100 m-2"
          size="large"
        >
          <Option key={1}>{1}</Option>
          <Option key={2}>{2}</Option>
          <Option key={3}>{3}</Option>
          <Option key={4}>{4}</Option>
        </Select>

        <DatePicker
          placeholder="From date"
          className="form-control m-2"
          onChange={(date, dateString) => setFrom(dateString)}
          disabledDate={(current) =>
            current && current.valueOf() < moment().subtract(1, 'days')
          }
          data-test-id="fromDate"
        />

        <DatePicker
          placeholder="To date"
          className="form-control m-2"
          onChange={(date, dateString) => setTo(dateString)}
          disabledDate={(current) =>
            current && current.valueOf() < moment().subtract(1, 'days')
          }
          data-test-id="toDate"
        />
      </div>
      <button className="btn btn-outline-primary m-2">Save</button>
    </form>
  )
}

export default HotelNewForm

//   return (
//     <>
//       <div className="container-fluid bg-secondary p-5 text-center">
//         <h1>Add a new hotel</h1>
//       </div>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-10">{hotelForm()}</div>
//           <div className="col-md-2">
//             <img src={preview} alt="preview" className="img img-fluid m-2" />
//           </div>
//         </div>
//       </div>
//     </>
//   )
//

//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')
//   const [location, setLocation] = useState('')
//   const [image, setImage] = useState('')
//   const [price, setPrice] = useState('')
//   const [from, setFrom] = useState('')
//   const [to, setTo] = useState('')
//   const [bed, setBed] = useState('')
//   const [postedBy, setPostedBy] = useState('')
//   const [preview, setPreview] = useState(
//     `${process.env.PUBLIC_URL}/images/100-100-preview.png`,
//   )

//   const resetFormState = () => {
//     setTitle('')
//     setContent('')
//     setLocation('')
//     setImage('')
//     setPrice('')
//     setFrom('')
//     setTo('')
//     setBed('')
//     setPostedBy('')
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     console.log(`user id : ${user._id}`)
//     setPostedBy(user._id)
//     const hotelToAdd = {
//       title,
//       content,
//       location,
//       image,
//       price,
//       from,
//       to,
//       bed,
//       postedBy: postedBy || user._id,
//     }
//     console.table(hotelToAdd)

//     try {
//       const res = await createHotel(token, hotelToAdd)
//       console.log(JSON.stringify(hotelToAdd, null, 4))
//       resetFormState()
//       toast.success('New hotel added successfully')
//     } catch (err) {
//       console.error(err)
//       if (err.response.status === 400) {
//         toast.error(`${err.response.data.message}`)
//       }
//     }
//   }

//   const handleImageChange = (event) => {
//     const files = event.target.files
//     const firstFile = files[0]
//     // console.log(`first file : ${firstFile}`)
//     setImage(firstFile.name)
//     setPreview(URL.createObjectURL(firstFile))
//   }

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value)
//   }

//   const handleContentChange = (event) => {
//     setContent(event.target.value)
//   }

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value)
//   }

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value)
//   }

//   const handleBedChange = (value) => {
//     setBed(value)
//   }

// import AlgoliaPlaces from 'algolia-places-react'
// const options = {
//   appId: process.env.REACT_APP_ALGOLIA_APP_ID,
//   apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
// }

/* <AlgoliaPlaces
            className="form-control ml-2 mr-2"
            placeholder="Where you love to visit!"
            defaultValue={location}
            options={options}
            onChange={({suggestion}) => setLocation(suggestion.value)}
            style={{height: '50px'}}
            data-test-id="location"
          /> */

/* <input
            type="number"
            name="bed"
            data-test-id="bed"
            className="form-control m-2"
            placeholder="Number of Beds"
            value={bed}
            onChange={handleBedChange}
          /> */

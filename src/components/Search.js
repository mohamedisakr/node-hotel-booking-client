import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {DatePicker, Select} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import moment from 'moment'

// destructure values from ant components
const {RangePicker} = DatePicker
const {Option} = Select

const Search = () => {
  // state
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [bed, setBed] = useState(0)
  const navigate = useNavigate()

  // parameter
  const {hotelId} = useParams()

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search-result?location=${location}&date=${date}&bed=${bed}`)
  }

  return (
    <div className="d-flex pb-4 ">
      <div className="w-100">
        <input
          type="text"
          name="location"
          data-test-id="location"
          className="form-control m-2"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
    </div>
  )
}

export default Search

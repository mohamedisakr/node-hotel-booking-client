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
      {/* <div className="w-100"> */}
      <input
        type="text"
        name="location"
        data-test-id="location"
        className="form-control m-2 w-100"
        placeholder="Location"
        value={location}
        onChange={handleLocationChange}
      />
      <RangePicker
        onChange={(value, dateString) => setDate(dateString)}
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, 'days')
        }
        className="w-100"
        data-test-id="fromDate"
      />
      <Select
        placeholder="Number of Beds"
        data-test-id="bed"
        onChange={(value) => setBed(value)}
        className="w-100 m-2"
        size="large"
      >
        <Option key={1}>{1}</Option>
        <Option key={2}>{2}</Option>
        <Option key={3}>{3}</Option>
        <Option key={4}>{4}</Option>
      </Select>

      <SearchOutlined
        onClick={handleSubmit}
        className="btn btn-primary btn-square p-3"
      />
    </div>
  )
}

export default Search

import {DatePicker, Select} from 'antd'
import moment from 'moment'

const {Option} = Select

const HotelEditForm = ({
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
  bed,
  setBed,
  handleBedChange,
  from,
  setFrom,
  to,
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

        {location && location.length && (
          <input
            type="text"
            name="location"
            data-test-id="location"
            className="form-control m-2"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
        )}

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
          value={bed}
        >
          <Option key={1}>{1}</Option>
          <Option key={2}>{2}</Option>
          <Option key={3}>{3}</Option>
          <Option key={4}>{4}</Option>
        </Select>

        {from && (
          <DatePicker
            placeholder="From date"
            className="form-control m-2"
            defaultValue={moment(from, 'YYYY-MM-DD')}
            onChange={(date, dateString) => setFrom(dateString)}
            disabledDate={(current) =>
              current && current.valueOf() < moment().subtract(1, 'days')
            }
            data-test-id="fromDate"
          />
        )}

        {to && (
          <DatePicker
            placeholder="To date"
            className="form-control m-2"
            defaultValue={moment(to, 'YYYY-MM-DD')}
            onChange={(date, dateString) => setTo(dateString)}
            disabledDate={(current) =>
              current && current.valueOf() < moment().subtract(1, 'days')
            }
            data-test-id="toDate"
          />
        )}
      </div>
      <button className="btn btn-outline-primary m-2">Save</button>
    </form>
  )
}

export default HotelEditForm

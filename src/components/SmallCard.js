import {useNavigate, Link} from 'react-router-dom'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import {formatCurrency} from '../utils/currency'
import {getNumberOfDays} from '../utils/date'
import {pluralize} from '../utils/text'

const SmallCard = ({h, handleHotelDelete = (f) => f}) => {
  const {_id, title, content, location, image, price, from, to, bed, postedBy} =
    h
  const navigate = useNavigate()

  const diff = (from, to) => {
    return getNumberOfDays(from, to)
  }

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/900x500.png`}
            alt="hotel"
            className="card-image img img-fluid"
          />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">
              {title}{' '}
              <span className="float-right text-primary">
                {formatCurrency({amount: price, currency: 'usd'})}
              </span>
            </h3>
            <p className="alert alert-info">{location}</p>
            <p className="card-text">
              {content.length < 200 ? content : content.substring(0, 200)}
            </p>
            <p className="card-text">
              <span className="float-right text-primary">
                {`Available for ${pluralize(diff(from, to), 'day')}`}
              </span>
            </p>
            <p className="card-text">{pluralize(bed, 'bed')} </p>
            <p className="card-text">
              {`Available from ${new Date(from).toLocaleDateString()}`}
            </p>
            {/* <p className="card-text">
              {`Available to ${new Date(to).toLocaleDateString()}`}
            </p> */}

            <div className="d-flex justify-content-between h4">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate(`/hotel/${_id}`)
                }}
              >
                Show more
              </button>{' '}
              <Link to={`/hotel/edit/${_id}`}>
                <EditOutlined className="text-warning" />
              </Link>
              <DeleteOutlined
                className="text-danger"
                onClick={() => handleHotelDelete(_id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallCard

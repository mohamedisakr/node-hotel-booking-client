import React from 'react'
import {formatCurrency} from '../utils/currency'

const SmallCard = ({h}) => {
  const {title, content, location, image, price, from, to, bed, postedBy} = h
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
            <p className="card-text">{`${content.substring(0, 200)} ...`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallCard

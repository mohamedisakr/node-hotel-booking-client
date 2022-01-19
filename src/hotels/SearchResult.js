import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import {searchListings} from '../actions/hotel'

const SearchResult = () => {
  // state
  const [searchLocation, setSearchLocation] = useState('')
  const [searchDate, setSearchDate] = useState('')
  const [searchBed, setSearchBed] = useState(0)
  const [hotels, setHotels] = useState([])

  // get search params from url & send to backend
  useEffect(() => {
    loadHotels()
  }, [window.location.search])

  const loadHotels = async () => {
    const {location, date, bed} = queryString.parse(window.location.search)
    console.table({location, date, bed})
    const res = await searchListings({location, date, bed})
    console.log(res.data)
    setHotels(res.data)
  }

  return (
    <div className="container">
      <div className="row">
        <p>search result</p>
        <pre>{JSON.stringify(hotels, null, 4)}</pre>
      </div>
    </div>
  )
}

export default SearchResult

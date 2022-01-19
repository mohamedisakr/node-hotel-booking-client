import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import {searchListings} from '../actions/hotel'
import Search from '../components/Search'
import SmallCard from '../components/SmallCard'

const SearchResult = () => {
  // state
  const [searchLocation, setSearchLocation] = useState('')
  const [searchDate, setSearchDate] = useState('')
  const [searchBed, setSearchBed] = useState('')
  const [hotels, setHotels] = useState([])

  // get search params from url & send to backend
  useEffect(() => {
    loadSearchResults()
    // const {location, date, bed} = queryString.parse(window.location.search)
    // searchListings({location, date, bed}).then((res) => {
    //   console.log(JSON.stringify(res, null, 4))
    //   setHotels(res.data)
    // })
  }, [window.location.search])

  const loadSearchResults = async () => {
    const {location, date, bed} = queryString.parse(window.location.search)
    // console.table({location, date, bed})
    const res = await searchListings({location, date, bed})
    console.log(JSON.stringify(res, null, 4))
    setHotels(res.data)
  }

  return (
    <>
      <div className="col mt-5">
        <Search />
      </div>
      <div className="container">
        <div className="row mt-5">
          {hotels.map((h) => (
            <SmallCard key={h._id} h={h} />
          ))}
        </div>
        {/* <div className="container-fluid mb-3"></div> */}
      </div>
    </>
  )
}

export default SearchResult

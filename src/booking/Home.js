import {useEffect, useState} from 'react'
import {getAllHotels} from '../actions/hotel'
import Search from '../components/Search'
import SmallCard from '../components/SmallCard'

const Home = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    loadAllHotels()
  }, [])

  const loadAllHotels = async () => {
    const res = await getAllHotels()
    console.log(`response : ${res}`)
    setHotels(res.data.data)
  }

  return (
    <>
      <div className="container-fluid bg-secondary mb-5 p-5 text-center">
        <h1>All Hotels</h1>
      </div>
      <div className="col">
        <Search />
      </div>
      <div className="container-fluid mb-3">
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        {hotels.map((h) => (
          <SmallCard key={h._id} h={h} />
        ))}
      </div>
    </>
  )
}

export default Home

import {useEffect, useState} from 'react'
import {getAllHotels} from '../actions/hotel'
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
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>All Hotels</h1>
      </div>
      <div className="container-fluid">
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        {hotels.map((h) => (
          <SmallCard key={h._id} h={h} />
        ))}
      </div>
    </>
  )
}

export default Home

import {useSelector} from 'react-redux'

const Home = () => {
  const {user} = useSelector((state) => {
    return state
  })
  return (
    <div className="container-fluid">
      {/* {JSON.stringify(user)} */}
      <h1> Home Page</h1>
    </div>
  )
}

export default Home

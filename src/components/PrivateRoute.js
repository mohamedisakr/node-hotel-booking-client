import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = ({children}) => {
  const {auth} = useSelector((state) => ({...state}))
  const isAuthorized = auth && auth.token
  return isAuthorized ? children : <Navigate to="/login" />
}

export default PrivateRoute

// solution
// https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou

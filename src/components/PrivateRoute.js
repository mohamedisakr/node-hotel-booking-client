import {Route, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

// const PrivateRoute = ({...rest}) => {
const PrivateRoute = ({children}) => {
  const {auth} = useSelector((state) => ({...state}))
  const isAuthorized = auth && auth.token
  return isAuthorized ? children : <Navigate to="/login" />
  //   return isAuthorized ? <Route {...rest} /> : <Navigate to="/login" />
}

export default PrivateRoute

// solution
// https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
/**
 const PrivateRoute = ({ children }) => {
  const authed = isauth() // isauth() returns true or false based on localStorage
  
  return authed ? children : <Navigate to="/Home" />;
}
And to use

<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
 */

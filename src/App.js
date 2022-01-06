import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import 'antd/dist/antd.min.css'
import 'antd/dist/antd.min.css'

import PrivateRoute from './components/PrivateRoute'
import TopNav from './components/TopNav'
import Home from './booking/Home'
import Register from './auth/Register'
import Login from './auth/Login'
import Dashboard from './user/Dashboard'
import DashboardSeller from './user/DashboardSeller'
import NewHotel from './hotels/HotelNew'

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/dashboard/seller"
          element={
            <PrivateRoute>
              <DashboardSeller />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/hotels/new"
          element={
            <PrivateRoute>
              <NewHotel />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

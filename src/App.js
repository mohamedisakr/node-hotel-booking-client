import {BrowserRouter, Switch, Routes, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Home from './booking/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

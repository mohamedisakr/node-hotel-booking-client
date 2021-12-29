import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Home from './booking/Home'
import TopNav from './components/TopNav'

const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login} from '../actions/auth'
import LoginForm from '../components/LoginForm'

const Login = () => {
  const [email, setEmail] = useState('johndoe@gmail.com')
  const [password, setPassword] = useState('password')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await login({email, password})
      if (res.data) {
        console.log(
          `Saving user response to redux and local storage & redirect`,
        )

        // save user and his token to localStorage
        localStorage.setItem('auth', JSON.stringify(res.data))

        // save user and his token to redux
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: res.data,
        })
      }
      toast.success(`Login Success`)
      navigate('/')
    } catch (err) {
      console.error(`Error : ${err}`)
      if (err.response.status === 400) {
        // if (err.status === 400) {
        // toast.error(`${err.response.data.message}`)
        // toast.error(`${err.response.message}`)
        toast.error(`${err.message}`)
      }

      if (err.response.status === 404) {
        // toast.error(`${err.response.data.message}`)
        // toast.error(`${err.response.message}`)
        toast.error(`${err.message}`)
      }
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Login</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <LoginForm
              handleSubmit={handleSubmit}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

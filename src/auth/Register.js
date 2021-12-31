import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import RegisterForm from '../components/RegisterForm'
import {register} from '../actions/auth'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newUser = {name, email, password}
      const res = register(newUser) //await axios.post(url, newUser)
      console.log(`register user ${res}`)
      toast.success('Register success, please login')
      navigate('/login')
    } catch (err) {
      console.error(err)
      if (err.response.status === 400) {
        toast.error(`${err.response.data.message}`)
      }
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
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
        <h1>Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterForm
              handleSubmit={handleSubmit}
              handleNameChange={handleNameChange}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              name={name}
              setName={setName}
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

export default Register

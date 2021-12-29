import {useState} from 'react'
import axios from 'axios'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const url = 'http://localhost:5000/api/v1/register'

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newUser = {name, email, password}
      const res = await axios.post(url, newUser)
      console.log(`register user ${res}`)
    } catch (error) {
      console.error(error)
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

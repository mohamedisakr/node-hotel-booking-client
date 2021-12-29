import {useState} from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.table(name, email, password)
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

  const registerForm = () => {
    return (
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type your name"
            value={name}
            onChange={handleNameChange}
            data-test-id="name"
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Type your email"
            value={email}
            onChange={handleEmailChange}
            data-test-id="email"
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            data-test-id="password"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    )
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">{registerForm()}</div>
        </div>
      </div>
    </>
  )
}

export default Register

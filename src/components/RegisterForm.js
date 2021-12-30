const RegisterForm = ({
  handleSubmit,
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
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
      <button data-test-id="submitButton" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default RegisterForm

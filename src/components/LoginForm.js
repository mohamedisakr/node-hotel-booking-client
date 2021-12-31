const LoginForm = ({
  handleSubmit,
  handleEmailChange,
  handlePasswordChange,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
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
      <button
        disabled={!email || !password}
        data-test-id="loginButton"
        className="btn btn-primary"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm

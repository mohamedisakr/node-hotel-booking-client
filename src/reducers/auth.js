let userState = null

const auth = JSON.parse(localStorage.getItem('auth'))

if (auth) {
  userState = auth
} else {
  userState = null
}

const authReducer = (state = userState, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return {...state, ...action.payload}
    case 'LOGOUT':
      return action.payload
    default:
      return state
  }
}

export {authReducer}

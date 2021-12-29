const me = {name: 'mohamed', role: 'admin'}

const authReducer = (state = {...me}, action) => {
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

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return {...state, ...action.payload}
    case 'LOGOUT':
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({user: authReducer})

const store = createStore(rootReducer, composeWithDevTools)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

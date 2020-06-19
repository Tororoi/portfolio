import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// redux dependencies
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// routing dependencies
import {BrowserRouter} from 'react-router-dom'

//Initial State
let initialState = {
  // Change the key-value pairs here
  night: false,
  hello: "From inside the state"
}

// if an action gets dispatched, that action will be ran through all of the reducers
let theReducer = (state = initialState, action) => {

  switch (action.type) {

    case "TOGGLE_NIGHT":

      return {
        ...state,
        night: !state.night
      }

    default:
      return state
  }

}

let storeObject = createStore(theReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <BrowserRouter>
    <Provider store={storeObject}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

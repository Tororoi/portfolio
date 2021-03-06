import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data'
import grid from './maze'

// redux dependencies
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// routing dependencies
import {BrowserRouter} from 'react-router-dom'

//Initial State
let initialState = {
  // Change the key-value pairs here
  night: false,
  hello: "From inside the state",
  projects: [...data.projects],
  blogs: [...data.blogs],
  maze: grid
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

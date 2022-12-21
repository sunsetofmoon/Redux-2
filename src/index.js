import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'



const initialState = 0

const reducer = (state = initialState, action) =>{
  
  switch(action.type){
    case 'plus':
      return state + 1;
      
    case 'minus':
      return state - 1;

    case 'reset':
      return 0 
  }

  
  return 0
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <App />
  </Provider>
    
);
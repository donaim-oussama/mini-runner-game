import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react'
import {render} from 'react-dom'

import configureStore from './store'


const store = configureStore()

render(<App store={store} />, document.getElementById('root'))

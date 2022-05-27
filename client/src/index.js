import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
)

ReactDOM.render(
    <Provider store={store}> <App /> </Provider>, 
    document.getElementById('root')
)
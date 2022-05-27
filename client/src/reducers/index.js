import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'         // named import using 'as' keyword
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer
})
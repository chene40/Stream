import _ from 'lodash'
import {
    FETCH_STREAMS,
    FETCH_STREAM,
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types'

export default (state = {}, action) => {
    switch(action.type){

        // return original state +/- the new record(s) [represented as objects]

        // GET response: array of records
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }

        // GET response: single record
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        // POST response: single record
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        // DELETE response: nothing
        case DELETE_STREAM:
            return _.omit(state, action.payload)            // does not change original object - creates new object

        // PUT response: single record
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
            
        default:
            return state
    }
}
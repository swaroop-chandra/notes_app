import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from "../reducers/user"
import notesReducer from '../reducers/notes'
import categoriesReducer from '../reducers/categories'

const configureStore=()=>{
    const store=createStore(combineReducers({
        notes:notesReducer,
        user:userReducer,
        categories:categoriesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux'

import configureStore from './component/store/configureStore';
import {startGetNotes} from './component/actions/notes'
import {startGetCategories} from './component/actions/categories'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

const store=configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})

if(localStorage.getItem('authToken')){
    store.dispatch(startGetNotes())
    store.dispatch(startGetCategories())
}


const ele=(
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));


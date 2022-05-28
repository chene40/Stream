import React from 'react'
import { Router, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'

// CLIENT ID: 817113998350-esqssm6u4cqkdcoga7opq6mj70nt88k7.apps.googleusercontent.com

export default function App(){
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit" exact component={StreamEdit}/>
                    <Route path="/streams/delete" exact component={StreamDelete}/>
                    <Route path="/streams/show" exact component={StreamShow}/>
                </div>
            </Router>
        </div>
    )
}
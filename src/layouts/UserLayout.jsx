import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponent from '../utils/AsyncComponent';

const Info = AsyncComponent(()=> import('../pages/user/info')); 
export default class UserLayout extends Component {
    render() {
        return (
            <Switch>
                <Route path="/user/info" component={Info} />
            </Switch>
        )
    }
}

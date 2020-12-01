import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import AsyncComponent from '../utils/AsyncComponent';

const entry = AsyncComponent(() => import('../pages/main/entry') );
const fuck = AsyncComponent(() => import('../pages/main/fuck') );
const refDemo = AsyncComponent(() => import('../pages/refDemo') );
const useMome = AsyncComponent(() => import('../pages/useMome') );

export default class MainLayout extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={entry}  />
                <Route path='/fuck' component={fuck}  />
                <Route path='/ref' component={refDemo}  />
                <Route path='/usememo' component={useMome}  />
            </Switch>
        )
    }
}

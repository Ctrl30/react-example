import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import AsyncComponent from '../utils/AsyncComponent';

const entry = AsyncComponent(() => import('@/pages/main/entry') );
const fuck = AsyncComponent(() => import('@/pages/main/fuck') );
const refDemo = AsyncComponent(() => import('@/pages/refDemo') );
const useMome = AsyncComponent(() => import('@/pages/useMome') );
const useCallback = AsyncComponent(() => import('@/pages/useCallback') );
const PraentChild = AsyncComponent(() => import('@/pages/useCallback/parentChild') );
const UseLayoutEffect = AsyncComponent(() => import('@/pages/useLayoutEffect') );
const Useimperativehandle = AsyncComponent(() => import('@/pages/useimperativehandle') );
const Three = AsyncComponent(() => import('@/pages/three') );
const Drag = AsyncComponent(() => import('@/pages/drag') );
const Worker = AsyncComponent(() => import('@/pages/worker') );

export default class MainLayout extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={entry}  />
                <Route path='/fuck' component={fuck}  />
                <Route path='/ref' component={refDemo}  />
                <Route path='/useMemo' component={useMome}  />
                <Route path='/useCallback' component={useCallback}  />
                <Route path='/parent-child' component={PraentChild}  />
                <Route path='/effect' component={UseLayoutEffect}  />
                <Route path='/imperative' component={Useimperativehandle}  />
                <Route path='/three' component={Three}  />
                <Route path='/drag' component={Drag}  />
                <Route path='/worker' component={Worker}  />
            </Switch>
        )
    }
}

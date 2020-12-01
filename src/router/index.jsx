import React ,{Component} from "react";
import { HashRouter,Route,Switch} from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import MainLayout from '../layouts/MainLayout';

class Router extends Component{
    render(){
return (
    <HashRouter>
        <Switch>
            <Route path="/user" component={UserLayout} />
            <Route path="/" component={MainLayout} />
        </Switch>
    </HashRouter>
)
    }
}

export default Router;
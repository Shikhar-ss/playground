import React from 'react'
import Beluga from "./Beluga";
import BlueWhale from "./BlueWhale";
import {useLocation,useParams, useRouteMatch,Switch, Route} from "react-router-dom";

function Whale() {
    const queryString = require('query-string')
    // const {search} = useLocation();
    // accessing search paramters from location object' search attribute
    // const name = queryString.parse(search).name;
    // accessing url parameter from location object's pathname attribute
    // const {name} = useParams();
    const {path} = useRouteMatch();

    return (
        <div>
            <h2>
                Whale
            </h2>
            <Switch>
                <Route path={`${path}/beluga`}>
                    <Beluga/>
                </Route>
                <Route path={`${path}/blueWhale`}>
                    <BlueWhale/>
                </Route>
            </Switch>
        </div>
        

    )
}

export default Whale

import React from 'react'
import Beluga from "./Beluga";
import BlueWhale from "./BlueWhale";
import {useLocation,useParams} from "react-router-dom";

function Whale() {
    const queryString = require('query-string')
    const {search} = useLocation();
    // accessing search paramters from location object' search attribute
    // const name = queryString.parse(search).name;
    // accessing url parameter from location object's pathname attribute
    const {name} = useParams();
    console.log("SEARCH_Parameter: ",name)

    return (
        <div>
            <h2>
                Whale
            </h2>
            {name === "beluga" && <Beluga/>}
            {name === "blueWhale" && <BlueWhale/>}
        </div>
        

    )
}

export default Whale

import React from "react"
import { Link, Route, Switch } from "react-router-dom"

export default function NavBar () {

    return (
        <div>
            (NavBar)
            LAMBDA EATS
            <Link to="/">Home</Link>
            <Link to="/pizza">Order Pizza</Link>
        </div>
    )
}
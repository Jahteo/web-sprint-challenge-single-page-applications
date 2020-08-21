import React from "react"
import { Link, Route, Switch } from "react-router-dom"

export default function NavBar () {

    return (
        <div>
            NavBar
            <Link to="/">Home</Link>
            <Link to="/pizza">Order Pizza</Link>
        </div>
    )
}
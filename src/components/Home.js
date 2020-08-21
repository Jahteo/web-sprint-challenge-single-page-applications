import React from "react"
import { useHistory } from "react-router-dom"
import { Link, Route, Switch } from "react-router-dom"

export default function Home () {
    const history = useHistory()
    const routeToPizza = () => {
        history.push("/pizza")
    }


    return (
        <div>
            <h1>Welcome to Lambda Eats</h1>
            {/* is the routeToPizza somthing biult into Link? idk why to use a button vs a link, so I smashed them together brutally here. */}
            <Link to="/pizza" onclick={routeToPizza}>
                Order Pizza Now!
            </Link>
            <img src="https://source.unsplash.com/afDu-GuxjjM" alt="Pizza delivery scooter"></img>
        </div>
    )
}
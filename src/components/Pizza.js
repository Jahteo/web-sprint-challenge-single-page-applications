import React, { useState } from "react"
import { Link, Route, Switch } from "react-router-dom"

export default function Pizza () {
    const initialOrder = {name: "", size: "", toppings: [], instructions: ""}
    const [order, setOrder] = useState({initialOrder})

    const handleChanges = (e) => {
        setOrder({[e.target.name]: e.target.value})
    }
    const submitOrder = (e) => {
        e.preventDefault();
        //axios.post
    }
    return (
        <div>
            <h1>Build Your Own Pizza</h1>
            <form onSubmit={submitOrder}>
                <label htmlFor="name" /> Name <p className="required">Required</p>
                    <input type="text" id="name" onChange={handleChanges} placeholder="Enter name" data-cy="name"></input>
                <br />
                <label htmlFor="size" /> Choose a Pizza Size <p className="required">Required</p>
                    <select id="size" onChange={handleChanges} data-cy="size">
                        <option>--Please select a size--</option>
                        <option>Small: 8" personal pie</option>
                        <option>Medium: 10" pie for two</option>
                        <option>Large: 12" to share. Or 1 hungry teen.</option>
                    </select>
                <br />
                <p>Choose your toppings</p>
                    <label htmlFor="cheese" /> Extra cheese
                        <input id="cheese" type="checkbox" name="cheese" checked={true} data-cy="cheese"/>
                    <label htmlFor="anchovies" /> Anchovies
                        <input id="anchovies" type="checkbox" name="anchovies" checked={true} data-cy="anchovies"/>
                    <label htmlFor="pepperoni" /> Pepperoni
                      <input id="pepperoni" type="checkbox" name="pepperoni" checked={true} data-cy="pepperoni"/>
                    <label htmlFor="balamic" /> Balamic Dennissimo
                        <input id="balamic" type="checkbox" name="balamic" checked={true} data-cy="balamic"/>
                <br />
                <label htmlFor="instructions" /> Special Instructions
                    <textarea id="instructions" onChange={handleChanges} data-cy="instructions" placeholder="Type any special requests here"></textarea>
                <button type="submit">Place Order</button>
            </form>
        </div>
    )
}
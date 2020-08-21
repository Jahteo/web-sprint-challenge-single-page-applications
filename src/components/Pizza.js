import React, { useState } from "react"
import { Link, Route, Switch } from "react-router-dom"
import * as yup from "yup"

export default function Pizza () {
    const initialOrder = {name: "", size: "", toppings: {cheese: "", anchovies: "", pepperoni: "", balsamic: ""}, instructions: ""}
    const [order, setOrder] = useState({initialOrder})
    const [errors, setErrors] = useState()

    // const formSchema = yup.object().shape({
    //     name: yup.string().min(2, "at least 2 letters please").required("Name is a required field."),
    // })
    // const validateChange = (e) => {
    //     yup.reach(formSchema, e.target.name)
    //         .validate(e.target.name === "terms" ? e.target.checked : e.target.value)
    //         .then(valid => {
    //             setErrors({...errors, [e.target.name]: ""});
    //         })
    //         .catch(err => {
    //             setErrors({...errors, [e.target.name]: err.errors[0]});
    //         });
    //     };
    // }

    const handleChanges = (e) => {
        const newOrderData = {...order, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value}
        console.log(newOrderData)
        // validateChange ();
        setOrder(newOrderData)
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
                    <input type="text" id="name" name="name" onChange={handleChanges} value={order.name} placeholder="Enter name" data-cy="name"></input>
                <br />
                <label htmlFor="size" /> Choose a Pizza Size <p className="required">Required</p>
                    <select id="size" onChange={handleChanges} name="size" value={order.size} data-cy="size">
                        <option value="init">--Please select a size--</option>
                        <option value="small">Small: 8" personal pie</option>
                        <option value="medium">Medium: 10" pie for two</option>
                        <option value="large">Large: 12" to share. Or 1 hungry teen.</option>
                    </select>
                <br />
                <p>Choose your toppings</p>
                    <label htmlFor="cheese" /> Extra cheese
                        <input id="cheese" type="checkbox" name="cheese" checked={order.cheese} onChange={handleChanges} data-cy="cheese"/>
                    <label htmlFor="anchovies" /> Anchovies
                        <input id="anchovies" type="checkbox" name="anchovies" checked={order.anchovies} onChange={handleChanges} data-cy="anchovies"/>
                    <label htmlFor="pepperoni" /> Pepperoni
                      <input id="pepperoni" type="checkbox" name="pepperoni" checked={order.pepperoni} onChange={handleChanges} data-cy="pepperoni"/>
                    <label htmlFor="balamic" /> Balamic Dennissimo
                        <input id="balamic" type="checkbox" name="balamic" checked={order.balsamic} onChange={handleChanges} data-cy="balamic"/>
                <br />
                <label htmlFor="instructions" /> Special Instructions
                    <textarea id="instructions" onChange={handleChanges} name="instructions" value={order.instructions} data-cy="instructions" placeholder="Type any special requests here"></textarea>
                <button type="submit">Place Order</button>
            </form>
        </div>
    )
}
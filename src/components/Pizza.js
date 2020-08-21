import React, { useState } from "react"
import { Link, Route, Switch } from "react-router-dom"
import * as yup from "yup"
import axios from "axios"

export default function Pizza () {
    const [order, setOrder] = useState({name: "", size: "", toppings: {cheese: "", anchovies: "", pepperoni: "", balsamic: ""}, instructions: ""})
    const [errors, setErrors] = useState({name: "", size: "", toppings: {cheese: "", anchovies: "", pepperoni: "", balsamic: ""}, instructions: ""})
    const [post, setPost] = useState()

    //mine is erroring out for some reason
    const formSchema = yup.object().shape({
        name: yup.string().min(2, "at least 2 letters please").required("Name is a required field.")
    })
    //Currenlty doing something very strange. sending the order object back in my errors & breaking when I input into any field other than name(which I think has to do with only having name in my schema).
    const validateChange = (e) => {
        yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({...errors, [e.target.name]: ""});
            })
            .catch(err => {
                setErrors({...errors, [e.target.name]: err.errors[0]});
                console.log("errors:", errors)
            });
    }
//copied stright from notes for reference, but still having problems.
    // const formSchema = yup.object().shape({
    //     name: yup.string().required("Name is a required field."),
    //     email: yup
    //       .string()
    //       .email("Must be a valid email address.")
    //       .required("Must include email address."),
    //     terms: yup.boolean().oneOf([true], "please agree to terms of use"),
    //     positions: yup
    //         .string()
    //         .oneOf(["Newsletter", "Yard Work", "Administrative Work", "Tabling"]), // value must be one of the values in the array, otherwise throws error
    //     motivation: yup.string().required("must include why you'd like to join")
    //   });
    // const validateChange = e => {
    //     yup
    //       .reach(formSchema, e.target.name)
    //       .validate(e.target.name === "terms" ? e.target.checked : e.target.value) // value in input
    //       .then(valid => {
    //         setErrors({ // if there was an error, clear it since value is valid
    //           ...errors,
    //           [e.target.name]: ""
    //         });
    //       })
    //       .catch(err => {
    //         setErrors({ // add error by name of input since value breaks validation
    //           ...errors,
    //           [e.target.name]: err.errors[0]
    //         });
    //       });
    //   };

    const handleChanges = (e) => {
        e.persist()
        const newOrderData = {...order, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value}
        console.log(newOrderData)
        // validateChange(e)
        setOrder(newOrderData)
    }
    const submitOrder = (e) => {
        e.preventDefault();
        //reset moved to before axios.post() to prevent double click submission errors.
        setOrder({name: "", size: "", toppings: {cheese: "", anchovies: "", pepperoni: "", balsamic: ""}, instructions: ""});
        axios.post("https://reqres.in/api/users", order)
            .then(res => {
                setPost(res.data);
                console.log("success", res.data);
            })
            .catch(err => console.log(err.response));
    }

    return (
        <div>
            <h1>Build Your Own Pizza</h1>
            <form onSubmit={submitOrder}>
                <label htmlFor="name" /> Name <p className="required">Required</p>
                    <input type="text" id="name" name="name" onChange={handleChanges} value={order.name} placeholder="Enter name" data-cy="name"></input>
                    {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
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
                <button type="submit" data-cy="submit" >Place Order</button>
            </form>
        </div>
    )
}
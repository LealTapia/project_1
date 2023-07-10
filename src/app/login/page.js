"use client"
import React from "react"
import "./login.css"
import { login } from "../../services/firebase/auth";

export default function Login() {

  const [state, setState] = React.useState({
    email: "",
    password: ""
  })

  const [name, lastName] = ["Pedro", "Carrera"]

  function onChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setState({
      ...state,
      [name]: value
    })
  }

  function onLogin() {
    // const email = state.email;
    // const password = state.password;

    const{email, password} = state;

    login(email, password);
  }

    return (
      <div className="container">

        <input name="email" onChange={onChange} value={state.email} placeholder="email" type="text"></input>

        <input name="password" onChange={onChange} value={state.password} placeholder="12345" type="password"></input>
        
        <button onClick={onLogin}>Login</button>
      </div>
    )
  }
  
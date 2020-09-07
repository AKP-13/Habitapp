import React, { Component } from "react";
import "../styles/Register.css";

class Register extends Component {
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.username)
        console.log(this.state.userPassword)
    }
    submitUser = (e) => {
        e.preventDefault()
        const NewUser = {
            username: this.state.username,
            userPassword: this.state.userPassword,
            userEmail: this.state.userEmail
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(NewUser),
            headers: { 'Content-Type': 'application/json'}
        }
        fetch('http://localhost:3000/users/new', options)
        .then(console.log(NewUser))
        .catch(console.warn)
    }
    
    render() {
        return (
            <>
                <h1>Register</h1>
                <form onSubmit={this.submitUser}>
                    <label htmlFor="username">Username</label>
                    <input id='username' name='username' type='input' placeholder='something@email.com' required onChange={this.handleChange}></input>
                    <label htmlFor="userEmail">Email</label>
                    <input id='userEmail' name='userEmail' type='text' required onChange={this.handleChange}></input>
                    <label htmlFor="userPassword">Password</label>
                    <input id='password' name='userPassword' type='password' required onChange={this.handleChange}></input>
                    <button onClick={this.submitUser}>Create User</button>
                    <button onClick={this.props.handleClose}>Exit</button>
                </form>
            </>
        )
    }
}

export default Register;
import React from 'react'
import Modal from 'react-modal'
import { Link, withRouter } from 'react-router-dom';
import { Register } from '../Components/Exports/index'
Modal.setAppElement('#root')

class Login extends React.Component {
    state = { 
        openModal: false,
        username: '',
        userPssword: '',
        userEmail: ''
    }

    openModal = () => {
        this.setState({ openModal: true })
    }

    closeModal = () => {
        this.setState({ openModal: false })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.username)
        console.log(this.state.userPassword)
    }
    submitLogin = (e) => {
        e.preventDefault()
        this.props.history.push('/home');
    }
    
    render() {
        return (
            <main>
                <h1>Login:</h1>
                <form onSubmit={this.submitLogin.bind(this)}>
                    
                    <label htmlFor="userEmail">Email</label>
                    <input id='userEmail' name='userEmail' type='text' placeholder='something@email.com' required onChange={this.handleChange}></input>
                    <label htmlFor="password">Password</label>
                    <input id='password' name='userPassword' type='password' required onChange={this.handleChange}></input>
                    
                    <Link to='/home' username={this.state.username} password={this.state.userPassword}>
                        <button>Login</button>
                    </Link>
                </form>

                <div>                
                    <button onClick={ this.openModal }>Not registered?</button>
                    <Modal isOpen={ this.state.openModal } >
                        <Register handleClose={ this.closeModal.bind(this) }/>
                    </Modal>
                </div>
            </main>
        )
    }
}

export default withRouter(Login);
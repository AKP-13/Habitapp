import React from 'react'
import { Habit } from '../Components/Habits'
class Dashboard extends React.Component {
    state = {
        username: this.props.username,
        userID: ""
    }
    // componentDidMount = () => {
    //     fetch(`http://localhost:3000/users/1`)
    //     .then(r => r.json())
    //     // .then(p => console.log(p[0].username))
    //     .then(data => this.setState({ username: data[0].username, userID: data[0].userid}))
    //     console.log(this.state.userID)
    //     console.log(this.state.username)
    // }

    showstate = () => {
        console.log(this.state.userID)
        console.log(this.state.username)
    }

    render() {
        return (
            <>
            <div>
            <h2>{this.state.username}'s Dashboard</h2>
            <Habit />
            </div>
            </>
        )
    }
   
}

export default Dashboard;
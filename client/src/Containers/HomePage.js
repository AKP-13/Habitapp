import React from 'react'

class WelcomePage extends React.Component {

    componentDidMount = () => {
        fetch('http://localhost:3000/users')
        .then(data => console.log(data.length))
    }

    render() {
        return (
            <>
                <h1>welcome to our habitapp</h1>
                <p>How to use our app</p>

            </>
        )
    }
}
export default WelcomePage
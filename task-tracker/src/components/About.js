import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h3 style={{textAlign:'center'}}>This is the About Page</h3>
            <Link to='/'>GO BACK</Link>
        </div>
    )
}

export default About

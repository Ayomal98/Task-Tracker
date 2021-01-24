import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>All Copyright &copy; 2021</p>
            <Link to="/about">about</Link>
        </footer>
    )
}

export default Footer

import React, { useState } from 'react'
import Button from './Button'

const Header = ({title,formShower}) => {

    
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button text='Add' color='greenyellow' formShower={formShower} />
        </header>
    )
}

export default Header

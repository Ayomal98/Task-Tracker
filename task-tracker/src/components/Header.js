import React, { useState } from 'react'
import Button from './Button'

const Header = ({title,formShower,toggleButton}) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            {toggleButton  ? (
                    <Button text='Close' color='red' formShower={formShower} />
                ):(                    
                    <Button text='Add' color='greenyellow' formShower={formShower} />
            )}
        </header>
    )
}

export default Header

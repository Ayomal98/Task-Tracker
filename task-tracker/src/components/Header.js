import React from 'react'
import Button from './Button'

const Header = ({title}) => {
    const onClickHandler=()=>{
        console.log('Button is clicked')
    }

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button text='Add' color='greenyellow' onClick={onClickHandler} />
        </header>
    )
}

export default Header

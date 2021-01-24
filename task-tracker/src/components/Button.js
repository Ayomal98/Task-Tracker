import React from 'react'

const Button = ({color,text,formShower}) => {
    return (
        <div>
            <button onClick={formShower} className='btn' style={{backgroundColor:color}}>{text}</button>
        </div>
    )
}

export default Button

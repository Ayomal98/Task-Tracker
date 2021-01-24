import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [text,setText]=useState('')
    const [date,setDate]=useState('')
    const [reminder,setReminder]=useState(false)

    const textHandler=(text)=>{
        setText(text)
    }
    
    const dateHandler=(date)=>{
        setDate(date)
    }
    
    const reminderHandler=()=>{
        setReminder(!reminder)
    }
    
    const submitHandler=(e,text,date,reminder)=>{
        e.preventDefault()
        addTask(text,date,reminder)
        setText('')
        setDate('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={(e)=>submitHandler(e,text,date,reminder)}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=>textHandler(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type='text' placeholder='Add Date' value={date} onChange={(e)=>dateHandler(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' onClick={reminderHandler} />
            </div>
            <input type="submit" value="Add" className="btn btn-block" />
        </form>
    )
}

export default AddTask

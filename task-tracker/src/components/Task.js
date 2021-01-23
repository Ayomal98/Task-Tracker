import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task,day,id,reminder,deleteTask,toggleReminder}) => {
    return (
        <div className="task">
            <h3  onDoubleClick={()=>toggleReminder(id)}>{task} <FaTimes onClick={()=>deleteTask(id)} /></h3>
            <p>{day}</p>
            {reminder ? (
                <span style={{color:'green',fontWeight:'bolder'}}>Reminder Active</span>
            ):('')}
        </div>
    )
}

export default Task

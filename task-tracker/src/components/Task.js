import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task,day,id,deleteTask}) => {
    return (
        <div className="task">
            <h3>{task} <FaTimes onClick={()=>deleteTask(id)} /></h3>
            <p>{day}</p>
        </div>
    )
}

export default Task

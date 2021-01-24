import React from 'react'

const AddTask = () => {
    
    return (
        <form className='add-form'>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add Task' />
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type='text' placeholder='Add Date' />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' />
            </div>
            <input type="submit" value="Add" className="btn btn-block"/>
        </form>
    )
}

export default AddTask

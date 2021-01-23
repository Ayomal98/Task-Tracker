import Task from "./Task"

const Tasks=({myTasks,deleteTask,toggleReminder})=>{
    return(
        <> 
            {myTasks.map(({text,id,day,reminder})=>(
                <Task key={id} id={id} task={text} day={day} deleteTask={deleteTask} toggleReminder={toggleReminder} reminder={reminder}/>
            ))}
        </>
    )
}

export default Tasks  
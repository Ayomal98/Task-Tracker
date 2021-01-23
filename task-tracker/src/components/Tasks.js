import Task from "./Task"

const Tasks=({myTasks,deleteTask})=>{
    return(
        <> 
            {myTasks.map(({text,id,day})=>(
                <Task key={id} id={id} task={text} day={day} deleteTask={deleteTask}/>
            ))}
        </>
    )
}

export default Tasks  
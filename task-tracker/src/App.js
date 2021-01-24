import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react"
import AddTask from "./components/AddTask";

function App() {


const [myTasks,setMyTasks]=useState([])

const [toggleButton,setToggleButton]=useState(false)

useEffect(()=>{
  const fetchTasks=async ()=>{
    const res=await fetch('http://localhost:5000/tasks')
    const data=await res.json() 
    setMyTasks(
      data
    )
  }
  fetchTasks()
},[])
const deleteTask=async(id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE'
  })
 const newDeleteArr=myTasks.filter(task=>task.id !== id)
 setMyTasks(
   newDeleteArr
 )
}

const toggleReminder=(id)=>{
    const newToggleArr=myTasks.map(task=>
      task.id === id ? {
        ...task,
        reminder:!task.reminder
      }:task
    )
    setMyTasks(
      newToggleArr
    )
}

const addTask=async(text,date,reminder)=>{
  const task={
    text,
    day:date,
    reminder
  }
  const res=await fetch(`http://localhost:5000/tasks?`,{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task)
  })

  const data=await res.json()
  setMyTasks(
    [
      ...myTasks,
      data
    ]
  )
}

const handleFormDisplay=()=>{
  setToggleButton(
    !toggleButton
  )
}
  return (
    <div className="App">
      <Header title='Task Tracker' toggleButton={toggleButton} formShower={handleFormDisplay}/>
      {toggleButton ? (
        <AddTask addTask={addTask} />
      ):(
        ''
      )}
      {myTasks.length > 0 ? (
        <Tasks myTasks={myTasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>)
      :(
        <h1 style={{color:'red',textAlign:'center'}}>No Tasks Left</h1>)}
    </div>
  );
}
 
export default App;

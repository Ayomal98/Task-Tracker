import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {

const tasks=[
    {
        id:1,
        text:'Lectures at UCSC',
        day:'Jan 22nd at 8.00 a.m.',
        reminder:true
    },
    {
        id:2,
        text:'Lectures at UCSC',
        day:'Jan 22nd at 10.00 a.m.',
         reminder:true
    },
    {
        id:3,
        text:'Going to sleep',
        day:'Jan 22nd at 10.00 p.m.',
        reminder:false
    }
]

const [myTasks,setMyTasks]=useState(tasks)

const deleteTask=(id)=>{
 const arr =myTasks.filter(task=>task.id != id)
 setMyTasks(
   arr
 )
}
  return (
    <div className="App">
      <Header title='Hello'/>
      <Tasks myTasks={myTasks} deleteTask={deleteTask}/>
    </div>
  );
}
 
export default App;

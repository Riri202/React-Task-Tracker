import React from 'react';
import Header from './components/header';
import Tasks from './components/tasks';
import './App.css';
import { useState } from "react";

function App() {
 const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'Doctor appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id:2,
            text: 'Doctor appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id:3,
            text: 'Doctor appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
    ]
)

const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>{
    return task.id !== id;
  //  console.log(task.id)
  }))
  
}
  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask}/> : 'No tasks to show'}
    </div>
  );
}

export default App;

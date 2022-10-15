import { useState } from 'react'
import Task from './components/Task'
import Form from './components/Form'
import './App.css';

function App() {

  const [task, setTask] = useState([])

  return (
    <div className="App" >
      <h1 className='text-center mt-2'>To-do List</h1>
      <Form task={task} setTask={setTask}/>
      {task.map((item,index) => (
        <Task task={task} key={item.id} setTask={setTask} text={item.text} checked={item.checked} id={item.id}/>
      ))}
    </div>
  );
}

export default App;

import { useState } from 'react'
import Task from './components/Task'
import Form from './components/Form'
import './App.css';

function App() {

  const [task, setTask] = useState([])
  const [text, setText] = useState("")
  const [checked, setChecked] = useState("")

  return (
    <div className="App" >
      <Form task={task} setTask={setTask} text={text} setText={setText} checked={checked} setChecked={setChecked}/>
      {task.map((Item) => (
        <Task task={task} setTask={setTask} text={text} setText={setText} checked={checked} setChecked={setChecked}/>
      ))}
    </div>
  );
}

export default App;

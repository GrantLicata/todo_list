import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css';

function App() {

  const [task, setTask] = useState([])
  const [text, setText] = useState("")
  const [checked, setChecked] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    const taskObject = {
      id: nanoid(),
      text: text, 
      checked: false
    }
    setTask([...task, taskObject])
    console.log(task)

    // setText("");
    // setChecked(false);
  }

  const deleteHandler = (e) => {
    // const newArray = task.filter((item) => {

    // })
    console.log(task)
  }

  return (
    <div className="App" >
      <form onSubmit={submitHandler} className='container col-6 d-flex mt-4 '>
        <input type='text' className='form-control me-2' onChange={(e) => setText(e.target.value)} />
        <button className='btn btn-primary'>Add</button>
      </form>
      {task.map((item) => (
        <form onSubmit={deleteHandler} className='container col-6 d-flex justify-content-between rounded p-1 mt-2 border'>
          <p>{item.text}</p>
          <button className='btn btn-dark ms-2'>Delete</button>
        </form>
      ))}
    </div>
  );
}

export default App;

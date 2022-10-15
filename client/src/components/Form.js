import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Form = (props) => {

    const {task, setTask} = props;

    const [text, setText] = useState("")
    const [checked, setChecked] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        if (text) {
            const taskObject = {
              id: nanoid(),
              text: text, 
              checked: checked
            }
            setTask([...task, taskObject])
        }
        setText("");
        setChecked("");
    }

    return (
    <div>
        <form onSubmit={submitHandler} className='container col-6 d-flex mt-4 '>
            <input type='text' className='form-control me-2' onChange={(e) => setText(e.target.value)} value={text} />
            <button className='btn btn-primary'>Add</button>
        </form>
    </div>
    )
}

export default Form
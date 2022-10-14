import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Form = (props) => {

    const {task, setTask, text, setText, checked, setChecked} = props;

    const submitHandler = (e) => {
        e.preventDefault()
        const taskObject = {
          id: nanoid(),
          text: text, 
          checked: false
        }
        setTask([...task, taskObject])
        console.log(task)
    
        setText("");
        setChecked(false);
    }

    return (
    <div>
        <form onSubmit={submitHandler} className='container col-6 d-flex mt-4 '>
            <input type='text' className='form-control me-2' onChange={(e) => setText(e.target.value)} />
            <button className='btn btn-primary'>Add</button>
        </form>
    </div>
    )
}

export default Form
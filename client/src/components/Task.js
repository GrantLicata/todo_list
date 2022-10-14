import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'


const Task = (props) => {

    const {task, setTask} = props

    const deleteHandler = (taskItem) => {
        // const newArray = task.filter((i) => i.id !== taskItem.id)
        // setTask(newArray)
    }

  return (
    <div>
        {task.map((taskItem) => (
            <form key={nanoid()} onSubmit={deleteHandler(taskItem)} className='container col-6 d-flex justify-content-between rounded p-1 mt-2 border'>
                <div className='d-flex align-items-center'>
                    <input class="form-check-input mt-0 mx-3" type="checkbox" value=""/>
                    {taskItem.text}
                </div>
                <button className='btn btn-dark ms-2'>Delete</button>
            </form>
        ))}
    </div>
  )
}

export default Task
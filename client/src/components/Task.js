import React from 'react'

const Task = (props) => {

    const {task, setTask, id, text, checked} = props

    const deleteHandler = () => {
        const filteredArray = task.filter((item) => item.id !== id)
        setTask(filteredArray)
    }

  return (
    <div>
        <div className='container col-6 d-flex justify-content-between rounded p-1 mt-2 border'>
            <div className='d-flex align-items-center'>
                <input className="form-check-input mt-0 mx-3" type="checkbox" value={checked}/>
                {text}
            </div>
            <button className='btn btn-dark ms-2' onClick={deleteHandler}>Delete</button>
        </div>
    </div>
  )
}

export default Task
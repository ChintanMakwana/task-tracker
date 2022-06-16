import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title){
            alert('Please enter a title')
            return
        }
        if(!day){
            alert('Please enter day')
            return
        }

        if(title.trim() && day.trim()) {
            onAdd({title, day, reminder})
            setTitle('')
            setDay('')
            setReminder(false)
        }
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value) } />
        </div>
        <div className='form-control'>
            <label htmlFor='day'>Day & Time</label>
            <input type='text' id='day' name='day' value={day} onChange={(e) => setDay(e.target.value) } />
        </div>
        <div className='form-control form-control-check'>
            <label htmlFor='reminder'>Set Reminder</label>
            <input type='checkbox' id='reminder' name='reminder' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) } />
        </div>
        <input type='submit' value='Add Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
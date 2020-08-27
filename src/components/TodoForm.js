/*
 * @Description: TodoForm
 * @Author: Ping Gan
 * @Date: 2020-08-09 17:27:06
 * @LastEditors: Ping Gan
 * @LastEditTime: 2020-08-09 19:17:44
 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TodoForm = ({ addItem }) => {

    const [title, setText] = useState('')

    const onChange = e => {
        setText(e.target.value)
    }


    const submit = e => {
        e.preventDefault()
        addItem(title)
        setText('')
    }

    return (
        <form onSubmit={submit} style={formStyle}>
            <input
                value={title}
                onChange={onChange}
                style={titleStyle}
                required
                placeholder='新的待办事项'
                type='text'>
            </input>
            <input style={submitStyle} type='submit' value='添加'/>
        </form>
    )
}

const formStyle = {
    display: 'flex'
}

const titleStyle = {
    flex: 10,
    padding: '5px'
}

const submitStyle = {
    flex: 1
}

PropTypes.propTypes = {
    addItem: PropTypes.func.isRequired
}


export default TodoForm

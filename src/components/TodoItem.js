/*
 * @Description: TodoItem
 * @Author: Ping Gan
 * @Date: 2020-08-09 15:30:56
 * @LastEditors: Ping Gan
 * @LastEditTime: 2020-08-09 18:17:35
 */
import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ todo, markCompleted, deleteItem }) => {
    const todoItemStyle = {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none'
    }
    return (
        <div style={todoItemStyle}>
            <p>
                <input
                    onChange={() => markCompleted(todo.id)}
                    checked={todo.completed}
                    value={todo.completed}
                    type='checkbox'>
                </input>
               &nbsp; {todo.title}
                <button onClick={() => deleteItem(todo.id)} style={btnStyle}>X</button>
            </p>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
}


const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    padding: '5px 9px',
    cursor: 'pointer',
    borderRadius: '50%',
    float: 'right'
}




export default TodoItem

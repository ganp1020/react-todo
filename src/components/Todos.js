/*
 * @Description: Todos
 * @Author: Ping Gan
 * @Date: 2020-08-09 15:13:39
 * @LastEditors: Ping Gan
 * @LastEditTime: 2020-08-09 18:17:44
 */
import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'//检查传入参数是否符合要求


const Todos = ({ todos, markCompleted, deleteItem }) => {
    return (
        <div>
            {todos
                .sort((a, b) => a.completed - b.completed)
                .map(todo => {
                    return <TodoItem
                        key={todo.id}
                        markCompleted={markCompleted}
                        deleteItem={deleteItem}
                        todo={todo}>
                    </TodoItem>
                })}
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

export default Todos

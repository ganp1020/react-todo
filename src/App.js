/*
 * @Description: App
 * @Author: Ping Gan
 * @Date: 2020-08-08 17:28:54
 * @LastEditors: Ping Gan
 * @LastEditTime: 2020-08-09 18:18:27
 */
import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './layout/Header'
import About from './pages/About'
import Todos from './components/Todos'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: '买面包', completed: true },
    { id: 2, title: '买饮料', completed: false },
    { id: 3, title: '买方便面', completed: false }
  ])




  const addItem = (title) => {
    setTodos(prevItems => {
      return [{ title, id: uuidv4(), completed: false }, ...prevItems]
    })
  }

  /**
   * 标记当前点击的item
   * @param {当前id} id 
   */
  const markCompleted = id => {
    setTodos(prevItems => {
      return prevItems.map(item => {
        return item.id === id
          ? { ...item, completed: !item.completed }
          : { ...item }
      })
    })
  }


  /**
   * 删除当前点击的item
   * @param {当前id} id 
   */
  const deleteItem = id => {
    setTodos(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <TodoForm addItem={addItem}></TodoForm>
        <Route exact path='/about' component={About} />
        <Route exact path='/' render={props => (
          <Fragment>
            <Todos todos={todos}
              markCompleted={markCompleted}
              deleteItem={deleteItem}
            ></Todos>
          </Fragment>
        )} />
      </div>
    </Router>
  );
}

export default App;

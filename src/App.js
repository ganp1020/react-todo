/*
 * @Description: filename
 * @Author: Ping Gan
 * @Date: 2020-08-08 17:28:54
 * @LastEditors: Ping Gan
 * @LastEditTime: 2020-08-08 18:02:16
 */
import React from 'react';
import './App.css';
import Header from './layout/Header'
import About from './pages/About'
import { BrowserRouter as Router,Route } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header> 
      <Route exact path='/about' component={About}/>
    </div>
    </Router>
  );
} 

export default App;

/*
 * @Description: filename
 * @Author: Ping Gan
 * @Date: 2020-08-08 17:47:58
 * @LastEditors: Ping Gan
 * @LastEditTime: 2020-08-09 14:05:22
 */
import React from 'react'
import {Link} from 'react-router-dom'

const header = props => {
    return (
        <header style={headerStyle}>
            <h2>待办事项</h2> 
            <Link style={linkStyle} to="/">主页&nbsp;</Link>|
            <Link style={linkStyle} to="/about">&nbsp;关于</Link>
        </header>
    )
}

const headerStyle = {
    textAlign:'center',
    padding:'10px',
    background:'#333',
    color:'#fff'
}

const linkStyle = {
    cursor:'pointer',
    color:'#fff',
    textDecoration:'none'
}


export default header

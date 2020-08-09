/*
 * @Description: About
 * @Author: Ping Gan
 * @Date: 2020-08-08 17:50:41
 * @LastEditors: Ping Gan
 * @LastEditTime: 2020-08-09 18:29:02
 */
import React, { Fragment } from 'react'

const header = props => {
    return (
        <h3 style={h3Style}>
            todoist由react开发
            <Fragment></Fragment>
        </h3>
    )
}

const h3Style = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}



export default header
import React from 'react'

import './Person.css'

const person=(props)=>{
            return (
                <div className='Person'>
                <p onClick={props.clicked}>My name is not {props.name}, I am {props.age} years old</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.changed} value={props.name}/>
                </div>        
            )
}

export default person 
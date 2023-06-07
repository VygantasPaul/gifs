import React from 'react'

const Button = ({color, text}) => {
    return (
        <button  className="btn btn-default" style={{backgroundColor:color}}>{text}</button>
    )
}

export default Button
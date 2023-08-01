import React from 'react'
import "./styles/Button.css"

const Button = ({CreateNewQuote}) => {
    return (
        <button className='button' onClick={CreateNewQuote}>Try again</button>
    )
}

export default Button

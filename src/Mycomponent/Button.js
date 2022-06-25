import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = () => {
    return (
    <button type = "button" class="btn btn-info btn-lg">
        <Link to = 'ml1'>ML PROJECT 1</Link>
    </button>
    
    )
}

Button.defaultrops = {
    color: 'secondary'
}

Button.propTypes = {
    text: PropTypes.string,
    color:PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
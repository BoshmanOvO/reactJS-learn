import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button2 = () => {
    return (
    <button type = "button" class="btn btn-info btn-lg">
        <Link to = 'ml1'>ML PROJECT 2</Link>
    </button>
    
    )
}

Button2.defaultrops = {
    color: 'secondary'
}

Button2.propTypes = {
    text: PropTypes.string,
    color:PropTypes.string,
    onClick: PropTypes.func,
}

export default Button2
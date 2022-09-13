import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
const headerStyles =  {
    backgroundColor : bgColor,
    color: textColor,
}

  return (
    <header style={ headerStyles}>
        <div className='container'>
            <h2> {text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI", 
}

Header.propTypes = {
    text: PropTypes.string, 
    bgColor: PropTypes.string
}

export default Header
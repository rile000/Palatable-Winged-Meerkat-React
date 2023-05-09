import React from 'react'

import PropTypes from 'prop-types'

import './component11.css'

const Component11 = (props) => {
  return (
    <div className="component11-container">
      <button className="button component11-button">{props.button}</button>
    </div>
  )
}

Component11.defaultProps = {
  button: 'G',
}

Component11.propTypes = {
  button: PropTypes.string,
}

export default Component11

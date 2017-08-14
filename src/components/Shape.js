import React from 'react'
import PropTypes from 'prop-types'

const Shape = ({shape, onSetShape}) => {
  let _shape
  return (
    <div>
      <input defaultValue={shape} ref={(input) => _shape = input} />
      <button onClick={() => onSetShape(_shape.value)}>Set Shape</button>
    </div>
  )
}

// Shape.propTypes = {
//   shape: PropTypes.number,
//   onSetShape: PropTypes.func
// }

export default Shape

import React from 'react'
import SaveButton from '../components/controls/SaveButton'

const SaveButtonContainer = () => {
  const save = () => (
    alert('e')
  )
  return (
    <SaveButton save={save} />
  )
}

export default SaveButtonContainer

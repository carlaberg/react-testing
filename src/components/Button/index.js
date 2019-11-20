import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const Button = ({ text }) => <StyledButton type="button">{text}</StyledButton>

export default Button

Button.propTypes = {
  text: PropTypes.string
}

Button.defaultProps = {
  text: 'I am a button'
}

import React from 'react'
import { Container } from './style'

const Input = ({
   type, 
   onChange, 
   placeholder,
   width, 
   height,
   value,
   defaultValue,
   name
  }) => {
  return (
    <Container 
    onChange={onChange} 
    type={type}
    name={name}
    value={value}
    defaultValue={defaultValue}
    placeholder={placeholder}
    width={width}
    height={height}
    
    />
  )
}

export default Input;

// import React, { forwardRef } from 'react'
// import { Container, Wrapper, Icon } from './styleInput'



// export const Input = forwardRef = (({
//   type, 
//    onChange, 
//    placeholder,
//    width, 
//    height,
//    value,
//    defaultValue,
//    name,
//    icon
// }, ref)=>{
//   return  (<Wrapper>
//     <Icon>{icon}</Icon>
//       <Container
//         ref={ref}
//         icon={icon}
//         onChange={onChange} 
//         type={type}
//         name={name}
//         value={value}
//         defaultValue={defaultValue}
//         placeholder={placeholder}
//         width={width}
//         height={height}
//       /> 
// </Wrapper>)
// })

// export default Input;

import React, { forwardRef } from 'react';
import { Container, Wrapper, Icon } from './styleInput';

export const Input = forwardRef(({
  type, 
  onChange, 
  placeholder,
  width, 
  height,
  value,
  defaultValue,
  name,
  icon
}, ref) => {
  return (
    <Wrapper>
      {icon && <Icon>{icon}</Icon>}
      <Container
        ref={ref}
        icon={icon}
        onChange={onChange} 
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </Wrapper>
  );
});

export default Input;

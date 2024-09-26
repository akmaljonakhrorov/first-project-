import React from 'react'
import PropertiesProvider from './properties/index.jsx'




const RootContext = ({children}) => {
  return (
    <>
        <PropertiesProvider>
            {children}
        </PropertiesProvider>
    </>
  )
}

export default RootContext;

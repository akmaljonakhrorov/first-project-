import { createContext } from "react";

const Root = createContext()

import React from 'react'

const RootContext = ({children}) => {
  return (
    <Root.Provider>
        <PropertiesProvider>
            {children}
        </PropertiesProvider>
    </Root.Provider>
  )
}

export default RootContext;

import React from 'react'

const Layout = ({children}) => {
    return (
      <>
      
      <div style={{ minHeight: "80vh" }} className="--pad">
          {children}
      </div>
      
      </>
    )
  }

export default Layout
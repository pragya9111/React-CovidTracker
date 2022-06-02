import React, {createContext} from 'react'
export const data = createContext()

function Context(props) {

  return (
    <div className='container'>{props.children}</div>
  )
}

export default Context
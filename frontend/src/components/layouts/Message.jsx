import React from 'react'

//we will render this component when there is an error while dispatching or rendering data
export default function Message({variant, children}) {
  return (
    <div className={`alert alert-${variant}`}>{children}</div>
  )
}

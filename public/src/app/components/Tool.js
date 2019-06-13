import React from 'react'

const Tool = ({ text, link }) => {
   return (
      <div
         className="border rounded bg-white px-2 d-flex align-items-center justify-content-center m-1"
         style={{ height: 30 }}
         onClick={() => window.open(link, '_blank')}
      >
         {text}
      </div>
   )
}

export default Tool

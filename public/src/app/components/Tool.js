import React from 'react'
import { Button } from 'react-bootstrap'

const Tool = ({ text, link }) => {
   return (
      <Button
         variant="dark"
         size="sm"
         className="d-flex align-items-center justify-content-center m-1"
         onClick={() => window.open(link, '_blank')}
      >
         {text}
      </Button>
   )
}

export default Tool

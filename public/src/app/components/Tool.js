import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Tool extends Component {
  state = {
    show: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    }, this.props.time * 125)
  }

  render() {
    const { text, link } = this.props
    const { show } = this.state
    return (
      <Button
        variant="dark"
        size="sm"
        className={`d-flex align-items-center justify-content-center m-1 animated ${
          show ? 'bounceInRight' : 'opacity-0'
        }`}
        onClick={() => window.open(link, '_blank')}
      >
        {text}
      </Button>
    )
  }
}

export default Tool

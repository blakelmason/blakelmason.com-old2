import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Media from 'react-media'

class Tool extends Component {
  state = {
    show: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    }, this.props.time * 60)
  }

  render() {
    const { text, link } = this.props
    const { show } = this.state
    return (
      <Media query="(min-width: 576px)">
        {matches =>
          matches ? (
            <Button
              variant="dark"
              size="sm"
              className={`d-flex align-items-center justify-content-center m-1 animated ${
                show ? 'flipInY' : 'opacity-0'
              }`}
              onClick={() => window.open(link, '_blank')}
            >
              {text}
            </Button>
          ) : (
            <Button
              variant="outline-light"
              size="sm"
              className={`d-flex align-items-center justify-content-center m-1 animated ${
                show ? 'fadeIn' : 'opacity-0'
              }`}
              onClick={() => window.open(link, '_blank')}
            >
              {text}
            </Button>
          )
        }
      </Media>
    )
  }
}

export default Tool

import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'
import Tool from './components/Tool'
import toolList from './toolList'
import { Card } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <div
          className="my-5"
          style={{
            background: 'rgb(0,0,0,.5)',
            paddingTop: 22,
            paddingBottom: 37,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className="text-white display-4 animated fadeInDown"
                  style={{ marginBottom: 25 }}
                >
                  Blake Mason - Web Portfolio
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: 1,
                    overflowY: 'auto',
                  }}
                >
                  <div
                    className="text-white display-4 px=r-2 my-1 position-relative"
                    style={{
                      height: 31,
                      fontSize: '1.6rem',
                      bottom: 2,
                    }}
                  >
                    Tools :
                  </div>
                  {toolList.map(tool => (
                    <Tool text={tool[0]} link={tool[1]} key={tool[0]} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Card
                style={{
                  width: '18rem',
                  boxShadow: '0 .5rem 1rem rgba(0,0,0,.6)',
                }}
                className="bg-dark text-light"
              >
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(App)

const root = document.getElementById('root')
ReactDOM.render(<App />, root)

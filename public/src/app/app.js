import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'
import Tool from './components/Tool'
import toolList from './toolList'
import projects from './projects'
import Project from './components/Project'

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
                  className="text-white display-4"
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
                  {toolList.map((tool, index) => (
                    <Tool
                      text={tool[0]}
                      link={tool[1]}
                      key={tool[0]}
                      time={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                style={{
                  gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
                }}
              />
              {projects.map(project => (
                <Project key={project.name} {...project} />
              ))}
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

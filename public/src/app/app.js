import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'
import Tool from './components/Tool'

const toolList = [
  ['HTML', 'https://www.w3schools.com/html/html_intro.asp'],
  ['CSS', 'https://www.w3schools.com/html/html_css.asp'],
  ['Bootstrap', 'https://getbootstrap.com/'],
  ['jQuery'],
  ['Handlebars.js'],
  ['Node.js'],
  ['Express.js'],
  ['MongoDB'],
  ['Mongoose'],
  ['SQL'],
  ['MySQL'],
  ['PostgreSQL'],
  ['Sequelize'],
  ['React'],
  ['React-Router'],
  ['Redux'],
  ['Moment.js'],
  ['Cheerio'],
  ['JWT'],
  ['Webpack'],
  ['Babel'],
  ['Heroku'],
]

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="my-5 text-white pt-2 pb-2 display-4 animated fadeInDown">
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
                  className="text-white display-4 px-2 my-1 position-relative"
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
    )
  }
}

export default hot(App)

const root = document.getElementById('root')
ReactDOM.render(<App />, root)

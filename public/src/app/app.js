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
   'jQuery',
   'Handlebars.js',
   'Node.js',
   'Express.js',
   'MongoDB',
   'Mongoose',
   'SQL',
   'MySQL',
   'PostgreSQL',
   'Sequelize',
   'React',
   'React-Router',
   'Redux',
   'JWT',
   'Webpack',
   'Babel',
   'Heroku',
]

class App extends Component {
   render() {
      return (
         <div>
            <div className="container">
               <div className="row">
                  <div className="col">
                     <h1
                        style={{
                           fontSize: '3.5rem',
                           fontWeight: 'bold',
                           WebkitTextStroke: '2px black',
                        }}
                        className="text-white my-5"
                     >
                        Blake Mason - Web Portfolio
                     </h1>
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
                        }}
                     >
                        <div
                           className="text-white d-flex justify-content-center align-items-center mr-2"
                           style={{
                              WebkitTextStroke: '2px black',
                              fontSize: '2rem',
                              fontWeight: '750',
                              height: 30,
                           }}
                        >
                           Tools:
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

import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'

class App extends Component {
   render() {
      return (
         <div className="h-100">
            <div className="container p-0 h-100">
               <div className="row no-gutters h-100">
                  <div className="col h-100 px-3">
                     <div
                        className="p-3 h-100 text-light"
                        style={{ WebkitTextStroke: '2px black' }}
                     >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
                           Blake Mason - Web Portfolio
                        </h1>
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

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

class App extends Component {
   constructor() {
      super()
      this.state = {
         title: 'Heyo77777!',
      }
   }
   render() {
      return (
         <div>
            {this.state.title}
            <div>Test2</div>
         </div>
      )
   }
}

export default App

const root = document.getElementById('root')
ReactDOM.render(<App />, root)

import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <Test />
      <Test />
      <Test />
    </div>
  )
}

const Test = () => {
  return <div>Test</div>
}

export default hot(App)

ReactDOM.render(<App />, document.getElementById('root'))

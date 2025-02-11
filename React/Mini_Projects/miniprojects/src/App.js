import React from 'react'
import Card from './Components/Card/Card'

const App = () => {
  return (
    <div className='App'>
      {/* <Card componentType="stopwatch"/> */}
      {/* <Card componentType={"pagination"}/> */}
      {/* <Card componentType={"counter"}/> */}
      <Card componentType={"login"}/> 
    </div>
  )
}

export default App;
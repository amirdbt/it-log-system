import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        {/* <Route path="/" exact component={TasksList} />
      <Route path="/edit:id" exact component={EditTask} />
      <Route path="/create" exact component={CreateTask} />
      <Route path="/user" exact component={CreateUser} /> */}
      </Router>
    </div>
  )
}

export default App

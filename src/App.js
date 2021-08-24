import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './scenes/Home'
import Login from './scenes/Login'
import Signup from './scenes/Signup'

function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/signup"><Signup setUser={setUser} /></Route>
        <Route path="/login"><Login setUser={setUser} /></Route>
        <Route exact path="/"><Home user={user} /></Route>
      </Switch>
    </Router>
  )
}

export default App;

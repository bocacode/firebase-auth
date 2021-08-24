import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from "firebase"
import 'firebase/auth'
import { firebaseConfig } from '../firebase'

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default function Signup({ setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()
  const handleSignup = (event) => {
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response.user)
        setUser(response.user)
        history.push('/')
      })
      .catch(error => alert(error.message))
  }
  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="email"
        value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="password"
        value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  )
}
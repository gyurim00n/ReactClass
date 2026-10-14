import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 
  const userArr = [
    {id:1, name:'John',age:20}
    ,{id:2, name:'Jane',age:25}
    ,{id:3, name:'Bob',age:30}
  ];

  return (
    <ul>
    {userArr.map(user => <li key={user.id}>{user.name} / {user.age}</li>)}
		</ul>

  )
}

export default App

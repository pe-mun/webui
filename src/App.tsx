import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './global.css'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <div>
     
      </div>
      <Footer></Footer>
    </div>
  )
}



import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import {Team} from './components/Team'
import { Committes } from "./components/Committes"
import './global.css'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div><Header></Header></div>
      <div>
        <About></About>
      </div>
      <div>
        <Team></Team>
      </div>
      <div>
      <Committes></Committes>
      </div>
      <Footer></Footer>
    </div>
  )
}



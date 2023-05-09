import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import {Team} from './components/Team'
import { Committes } from "./components/Committes"
import { File } from './components/File'
import { Partners } from './components/Partners'
import './global.css'
import { FotoEntrada } from './components/FotoEntrada';





export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <FotoEntrada></FotoEntrada>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Team></Team>
      </div>
      <div>
      <Committes></Committes>
      </div>
      <div>
        <File></File>
      </div>
      <div>
        <Partners></Partners>
      </div>
      <Footer></Footer>
    </div>
  )
}



import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navbar/>
    <div className="black">
      <p>
        Hey!Do come everyday to watch and read something exciting..
       </p>
      Click and Search using search button :)
    </div>
    <Footer/>
     </div>
    </>
  )
}

export default App

import Add from "./Components/add"
import Home from "./Components/Home"
import { Route,Routes } from "react-router-dom"
import ViewMore from "./Components/viewmore"

function App() {
  return (
    <>
   <Routes>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/viewmore/:id' element={<ViewMore/>}></Route>
   </Routes>
      
    </>
  )
}

export default App
import {GlobalStyle} from "../global/global.style"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRouter from "./utils/privateRoute"

function App() {

  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="home" element={ <PrivateRouter> <Home /> </PrivateRouter>}/>
        </Routes>
      </Router> 
    </>
  )
}

export default App

import {Register} from './pages/Register'
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
      {console.log('app re render')}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>        
        </Routes>
      </BrowserRouter>
  
    </div>                                                    

  )
}

export default App

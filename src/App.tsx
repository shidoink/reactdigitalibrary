import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
//import routes from './config/routes'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import { Provider } from 'react-redux'
import {store} from './redux/store'

import './App.css'
import Navbar from './components/Navbar'
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';



const ProtectedDashboard= withAuthenticationRequired(Dashboard)




function App() {
  

  return (
   <BrowserRouter>
   <Navbar/>
   <Provider store = {store}>
    
  
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/Dashboard' element={<ProtectedDashboard/>}/>
      <Route path='/About' element={<About/>}/>
      
    </Routes>
    </Provider>

    </BrowserRouter>
  )
}

export default App

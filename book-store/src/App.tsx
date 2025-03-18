
import { Outlet } from 'react-router-dom'
import './App.css'
import RoutingModule from './Routing/RoutingModule'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
function App() {
 

  return (
    <>
    <RoutingModule />
    </>
  )
}

export default App

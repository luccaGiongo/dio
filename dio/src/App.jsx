//Imports Components Pages
import { Home } from './pages/home/home'
import { Login } from './pages/login/login'

//Imports Components
import { Header } from './components/Header/Header'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/login/login.jsx' element={<Login></Login>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

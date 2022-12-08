//Imports Components Pages
import { Home } from './pages/home/home'
import { Login } from './pages/login/login'
import { Feed } from './pages/feed/feed'
import { Cadastro } from './pages/cadastro/cadastro'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/login/login.tsx' element={<Login></Login>} ></Route>
          <Route path='/feed/feed.tsx' element={<Feed></Feed>} ></Route>
          <Route path='/cadastro/cadastro.tsx' element={<Cadastro></Cadastro>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/users/add' element={<AddUser/>}/>
        <Route exact path='/users/edit/:id' element={<EditUser/>}/>
        <Route exact path='/users/:id' element={<User/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

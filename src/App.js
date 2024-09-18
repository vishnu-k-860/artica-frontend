import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Admindashboard from './page/admin/Admindashboard';
import Homepage from './page/Homepage';
import Login from './page/Login';
import Register from './page/Register';
import About from './page/About';
import Contact from './page/Contact';
import Cart from './page/user/Cart';
import Products from './page/Products';
import Adminform from './page/admin/Adminform';
import Productdetails from './page/admin/Productdetails';
import Editproduct from './components/Editproduct';



function App() {
  


  return (
    <div className="App">
      <Header/>
    <Routes>
     <Route path='/' element={<Homepage/>}/> 
     <Route path='/About' element={<About/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Products' element={<Products/>}/>
     <Route path='/Cart' element={<Cart/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Register' element={<Register/>} />
     <Route path='/Admindashboard' element={<Admindashboard/>} /> 
     <Route path='/Adminform' element={<Adminform/>} /> 
     <Route path='/Productdetails' element={<Productdetails/>} />
     <Route path='/Editproduct' element={<Editproduct/>} />
    </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default App;

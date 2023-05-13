import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Fooeter';
import Header from './components/layouts/Header';
import{Route, BrowserRouter as  Router,Routes} from 'react-router-dom'
import{ HelmetProvider}  from 'react-helmet-async'
import{ToastContainer}from 'react-toastify';
import'react-toastify/ReactToastify.css'
import ProductDetail from './components/products/ProductDetail';
import Login from './components/user/login';
import Register from './components/user/register';
import { useEffect } from 'react';
import store from './store'
import { loadUser } from './actions/userActions';
import ProductSearch from './components/products/productSearch';
function App() {

  useEffect(()=>{
       store.dispatch(loadUser)
  })
  return (
    <Router>
    <div className="App">
      <HelmetProvider>
           <Header/>
           <ToastContainer theme='dark' />
           <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/product/:id' element={<ProductDetail />}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}  /> 
                  <Route path='/search/:keyword' element={<ProductSearch/>}/>   
            </Routes>
           <Footer/>
          
            
      </HelmetProvider>
    </div>
    </Router>
  );
}

export default App;

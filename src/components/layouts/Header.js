import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dropdown,Image } from 'react-bootstrap';
import Search from './Search';

export  default function Header(){

  const {isAuthenticated,user}=useSelector(state=>state.authState);
    return(
        <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
           <Link to='/'>
              <img width='150px' alt='NVcart' src="" />  
           </Link>
              
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search/>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        {isAuthenticated ? 
        (
          <Dropdown className='d-inline'>
            <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
              <figure className='avatar avatar-nav'>
                <Image width='50px'  src={user.avatar ??'./image/default_avatar.png'} />
              </figure>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className='text-danger'>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ):
        <Link  to={`/login`}className="btn" id="login_btn"  >Login</Link>
    }
        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">2</span>
      </div>
    </nav>

    )

    
}
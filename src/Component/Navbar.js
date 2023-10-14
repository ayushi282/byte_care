import React from "react";
import '../Style/Navbar.css';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact'

const Navbar=()=>{

 return (
   <header className="header" >
         <nav className="nav">
         <img className="img" src="/images/bytescarelogo.svg"></img>
            <Link className="text" to={'Home'}>Home</Link>
                <Link className="text" to={'About'}>About</Link>
                <Link className="text" to={'Resources'}>Product & Services</Link>
                <Link className="text" to={'Blogs'}>Blogs</Link>
                <Link className="text" to={'FAQs'}>FAQs</Link>
                <Link className="text"to={'Contact'}>Contact</Link>
                <div>
           <a className="login" href='Login'>login</a> 
           <Link to={'Demo'}><button className="request">Request Demo</button> </Link> 
        </div>
            </nav> 
</header>

 );
}

 export default Navbar;
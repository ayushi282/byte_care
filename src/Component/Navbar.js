import React from "react";
import '../Style/Navbar.css';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';
import Home from './Home';

const Navbar=()=>{

 return (
<div>
<header >
    <div >
       
        <div >
            <nav>
            <Link to={'Home'}>Home</Link>
                <Link  to={'Product'}>Product</Link>
                <Link to={'Resources'}>Resources</Link>
                <Link  to={'Pricing'}>Pricing</Link>
                <div>
           <a  href='Login'>login</a> 
            <button >Sign up</button> 
        </div>
            </nav>
        </div>
       
    </div>
    </header>
</div>
 );
}

 export default Navbar;
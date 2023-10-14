import Pricing from './Component/Pricing';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/About';
import Resources from './Component/Resources';
import Navbar from './Component/Navbar';
import Blogs from './Component/Blogs';
import FAQs from './Component/FAQs';
import Contact from './Component/Contact';

function App() {
  return (
   
     <BrowserRouter>
 <Navbar/>
    <Routes>
           <Route path='Home'  element={<Home/>}/>
      <Route path='About'  element={<Product/>}/>
      <Route path='Resources'  element={<Resources/>}/>
      <Route path='Pricing' Component={Pricing} element={<Pricing/>}/>
    <Route path ='Blogs' element={<Blogs/>}/>
    <Route path='FAQs' element={<FAQs/>}/>
    <Route path='Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

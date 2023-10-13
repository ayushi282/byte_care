import Pricing from './Component/Pricing';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/Product';
import Resources from './Component/Resources';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div>
     <BrowserRouter>
 <Navbar/>
    <Routes>
           <Route path='Home'  element={<Home/>}/>
      <Route path='Product'  element={<Product/>}/>
      <Route path='Resources'  element={<Resources/>}/>
      <Route path='Pricing' Component={Pricing} element={<Pricing/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

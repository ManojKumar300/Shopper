import './App.css';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kids_banner from './Assets/banner_kids.png';
import LoginSignUp from './Pages/LoginSignUp';
import Products from './Pages/Products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>} />
        <Route path='products' element={<Products />}>
          {/* <Route path='productId' element={<Products />}/> */}
        </Route>
        <Route path='/product/:productId' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignUp/>}/>

      </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

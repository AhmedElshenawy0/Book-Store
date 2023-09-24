import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/pages/Home';
import Author from './component/pages/author/Author';
import Contact from './component/pages/contact/Contact';
import About from './component/pages/about/About';
import Register from './component/pages/register/Register';
import Cart from './component/pages/cart/Cart';
import Book from './component/pages/book/Book';


function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/authors' element={<Author/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/book/:id' element={<Book/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
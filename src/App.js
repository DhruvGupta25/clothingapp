import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-uppage/sign-in-and-sign-up-component';
import Header from './components/header/header.component';
import './App.css';

function App() {
  return (
    <div>
     <Header />
     <Routes>
     <Route path='/' element={<Homepage />} />
     <Route path='/shop' element={<ShopPage />} />
     <Route path='/signin' element={<SignInAndSignUpPage />} />
     </Routes>
    </div>
  );
}

export default App;

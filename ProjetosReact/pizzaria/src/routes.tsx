import React from 'react';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Admin from 'components/Admin';

export default function AppRouter(){
  return (
    <main  className='container'>
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio/>}/>
            <Route path='cardapio' element={<Cardapio/>}/>
            <Route path='sobre' element={<Sobre/>}/>
          </Route>
          <Route path='prato/:id' element={<Prato/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='admin/:user' element={<Admin/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}
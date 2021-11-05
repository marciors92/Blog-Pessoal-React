import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/login';
import ListaTema from './components/temas/listatema/listaTema';
import ListaPostagem from './components/postagens/listapostagem/listaPostagem';


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>
          
          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <CadastroUsuario />
          </Route>
          <Route path='/posts'>
            <ListaPostagem />
          </Route>
        </div>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

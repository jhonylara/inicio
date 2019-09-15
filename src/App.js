import React from 'react';
import './App.css';
import MenuApp from './main/menu'
import Corpo from './main/conteiner'
import Footer from './main/footer'
import 'typeface-roboto';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <div className="App" style={{ background: 'linear-gradient(0deg, rgba(97,238,153,1) 3%, rgba(118,186,255,1) 100%)'}} >
      <MenuApp />
      <CssBaseline />
      <Container maxWidth={false}>
        <Corpo  />
      </Container>
      <Footer />
    </div>
  );
}
export default App;

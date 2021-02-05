import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
const HomePage: React.FC = () => {
  return(
    <Container>
      <div>
        <h1>
          CancelaFlix <br/>
          <h6>O lugar das suas séries canceladas</h6>
        </h1>
        <Link to="/register">Cadastrar uma nova série</Link>
        <Link to="/find-series">Procurar séries cadastradas</Link>
      </div>
    </Container>
  );
};

export default HomePage;

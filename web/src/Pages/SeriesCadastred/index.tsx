import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';

import {
  Container
} from './styles';

const SeriesC: React.FC = () => {
  const [ time, setTime ] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    },1000)

    if(time === 0){
      history.push('/');
    }
  },[time]);

  const history = useHistory();
  return(
    <Container>
      <div>
          <section>
            <h1>Cadastro completo</h1>
            <BsCheckCircle size={60} color="#86C226"/>
          </section>
          <span> Você será redirecionado em {time}</span>
      </div>

    </Container>
  )
};

export default SeriesC;

import React, { useEffect, useState, FormEvent, ChangeEvent} from 'react';
import { AiFillAccountBook } from 'react-icons/ai';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import Logo from '../../assets/abc.png';

import {
  PageCreateSeries,
  Form
} from './styles';

const HomeRegister: React.FC = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    series: '',
    season: '',
  });

  const [ voidInput, setVoidInput ] = useState(true);

  async function handleSbumit(event: FormEvent){
    event.preventDefault();

    if(formData.name === '' || formData.email === '' || formData.season  === '' || formData.series === ''){
      setVoidInput(false);
      return;
    }
    const { name, email, series, season } = formData;

    const data = {
      name,
      email,
      series,
      season
    };

    await api.post('/points', data);
    history.push('/cadastred');
  };

  function handleInputEvent(event: ChangeEvent<HTMLInputElement>){
    console.log(event.target.name, event.target.value);

    const { name, value } = event.target;
    setFormData(
      {...formData, [name]: value}
    );
  }
  const history = useHistory();

  return (
    <PageCreateSeries>
      <header>
        <img src={Logo} alt=""/>
        <Link to="/">
          <BsArrowLeftShort size={35}/> Voltar a home
        </Link>
      </header>
      <Form onSubmit={handleSbumit}>
        <h1>Cadastre suas <br/> séries canceladas</h1>

        <fieldset>
          <h2>Dados</h2>
        </fieldset>
        <section>
          <div>
              <label htmlFor="name">Seu nome</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleInputEvent}
              />
            </div>
            <div>
              <label htmlFor="email">Seu email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleInputEvent}
              />
            </div>
            <section>
            <div>
              <label htmlFor="series">Nome da série</label>
              <input
                type="text"
                name="series"
                id="series"
                onChange={handleInputEvent}
              />
            </div>
            <div>
              <label htmlFor="season">Quantas temporadas durou </label>
              <input
                type="number"
                name="season"
                id="season"
                onChange={handleInputEvent}
              />
            </div>
            </section>
        </section>

          {
            voidInput ? (
              ''
            ) : (
              <h5>
                Erro ao adicionar os dados, adicione os dados corretamente.
              </h5>
            )
          }
        <button type="submit">Adicionar série</button>
      </Form>
    </PageCreateSeries>

  );
}

export default HomeRegister;

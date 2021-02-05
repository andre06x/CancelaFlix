import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

import api from '../../services/api';

import {
  Container,
  ContainerMap
} from './styles';

import Logo from '../../assets/abc.png';

interface Data {
  email: string,
  id: number,
  name: string,
  season: string,
  series: string,
  image: string
}

const FindSeries: React.FC = () => {
  const [data, setData ] = useState<Data[]>([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<Data[]>([]);

  useEffect(() => {
    async function getData(){
      const response = await api.get('/points');
      console.log(response.data);
      setData(response.data);
      setSearchResult(response.data);
    };

    getData();

  },[]);

  function searchSeries(event: ChangeEvent<HTMLInputElement>){
    setSearch(event.target.value.toLowerCase());
    console.log(search)
  };

  useEffect(() => {

  },[]);
  useEffect(() => {
    const results = data.filter(data => {
      return data.series
                 .toLowerCase()
                 .includes(search);
    })
    setSearchResult(results);
    console.log(searchResult);
  }, [search])
  return (
    <Container>
      <header>
        <img src={Logo} alt=""/>
        <Link to="/">
          <BsArrowLeftShort size={35}/> Voltar a home
        </Link>
      </header>
      <ContainerMap>
        <h1>Séries canceladas encontradas</h1>
        <input
          type="text"
          placeholder="procurar serie"
          onChange={e => searchSeries(e)}
          value={search}
        />
        <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Nome da serie</th>
                  <th>Temporadas</th>
                  <th>Colaborador</th>
                </tr>
              </thead>

        { searchResult.map(data => (
          <tbody>
            <tr>
              <td>
                <img src={data.image} alt=""/>
              </td>
              <td>
                <span>{data.series}</span>
              </td>
              <td>
                <span>{data.season}</span>
              </td>
              <td>
                <span>{data.name}</span>
              </td>
            </tr>
          </tbody>


        ))}
        </table>
      </ContainerMap>
    </Container>
  )
};

export default FindSeries;

import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  color: #fff;

  div {
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    margin: 100px auto;
    /* background: #fff; */
    flex-direction: column;
    border-radius: 5px;
    border: solid 3px #fff;
    margin-bottom: 50px;

    h1 {
      font-size: 40px;
      margin-bottom: 30px;
    }

    a {
      text-decoration: none;
      font-size: 28px;
      padding: 15px 50px;
      border-radius: 20px;
      border: solid 3px #ddd;
      color: #fff;
      font-weight: bold;
      margin: 20px;

        :hover{
          background: ${lighten(0.112,'#E27A7A')};
          font-size: 33px;
          transition: 0.5s;
        }
    }
  }
`;

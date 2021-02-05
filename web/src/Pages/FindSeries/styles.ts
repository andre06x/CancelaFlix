import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

    header {
      margin-top: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
          width: 130px;
        }

        a {
          display: flex;
          align-items: center;
          font-weight: bold;
          text-decoration: none;
          color: #ddd;
          font-size: 23px;
        }
    }
`;

export const ContainerMap = styled.div`
  margin: 50px auto;
  padding: 74px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;
  display: table;
  flex-direction: column;

    h1 {
      margin-bottom: 29px;
    }

    input {
      padding:10px;
      border-radius: 5px;
      border-color: #eee;
      margin-bottom: 5px;

    }
    div {
        padding-bottom: 25px;
        display: flex;
        align-items: center;
      img {
        width: 100px;
        /* border-radius: 20px; */
        margin-right: 15px;
      }

      span{
        font-size: 18px;
        margin-right: 10px;
      }
    }

    table {
      border: 10px black solid;
      border-collapse: collapse;
      border-radius: 1px;

        td,th {
          text-align: center;
          padding:20px;

          img {
            width: 70px;
          }
        }
      }
      img{
        width: 70px;
      }

      table,th,td{
        border: solid 2px #ddd;
        border-radius: 1px;

      }
`;

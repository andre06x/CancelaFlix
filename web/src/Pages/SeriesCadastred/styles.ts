import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

    div {
      margin: 100px auto;
      display: flex;
      justify-content: center;
      background: #fff;
      padding: 50px;
      border-radius: 5px;
      align-items: center;
      flex-direction: column;

      section {
        display: flex;
        align-items: center;

          h1 {
          color: #86C226;
          font-size: 30px;
          margin-right: 20px;
          font-weight:bold;
        }

      }

      span {
        color: #86C226;
        margin-bottom: 30px;
      }
    }
`;

import styled from 'styled-components';
import { darken, desaturate, lighten } from 'polished';

export const PageCreateSeries = styled.div`
   width: 100%;
   max-width: 1100px;
   margin: 0 auto;

    header {
      margin-top: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      display: flex;
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

export const Form = styled.form`

  margin: 50px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

    fieldset {
      margin-top: 64px;
      min-inline-size: auto;
      border: 0;
    }

    section {
      margin-top: 30px;
      display:flex;
      flex-direction: column;

        div {
          flex: 1;
          display:flex;
          flex-direction: column;
          margin-bottom: 24px;

            input {
              flex: 1;
              padding: 16px 24px;
              border-radius: 4px;
              border: none;
              background: #eef;
              font-size: 18px;
            }
          }
    }

    h5 {
      color: red;
      margin-bottom: 4px;
    }
    button {
      padding: 10px 5px;
      background: rgba(214,66,66, 0.7);
      border: none;
      /* font-weight: bol
      boldd; */
      color: #fff;
      font-size: 17px;
      font-weight: bold;
      border-radius: 10px;

      &:hover {
        background: ${darken(0.112,'#E27A7A')};
        transition: 0.2s ease;
        cursor: pointer;
      }
    }
`;


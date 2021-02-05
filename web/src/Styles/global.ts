import { createGlobalStyle,  } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgba(214,66,66, 0.7);
    font-family: Ubuntu;
  }
`;

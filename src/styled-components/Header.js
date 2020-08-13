import styled from 'vue-styled-components';

export const CustomHeader = styled.header`
  font-family: 'Source Sans Pro', sans-serif;
  color: #EEE;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(to right, #907BE7, #F471AA);
  box-shadow: 0px 10px 15px #4D4164;
  height: 100px;

  @media(max-width: 800px) {
    display: none;
  }
`;
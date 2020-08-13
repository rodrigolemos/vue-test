import styled, { keyframes } from 'vue-styled-components';

const showFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const showFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const CustomDisclaimer = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  color: #EEE;
  font-size: 1.2rem;
  display: none;
  
  @media(max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  span {
    animation: .5s ${showFromLeft} ease-in-out;
  }
`;

export const CustomDiv = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: 100px;
  color: #EEE;
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: none;
  border-radius: 25px;
  width: 70vw;
  min-height: 400px;
  background-image: linear-gradient(to right, #4F5A7C, #485373);
  box-shadow: 5px 10px 20px #363E58;
  color: #EEE;

  label {
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    animation: .5s ${showFromRight} ease-in-out;
  }

  button {
    margin: 30px;
  }

  @media(max-width: 800px) {
    display: none;
  }
`;

export const CustomGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const CustomInput = styled.input`
  border: none;
  outline: none;
  background: #6A7595;
  color: #EEE;
  font-size: 1.4rem;
  margin: 0 20px;
  width: 80px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
`;

export const CustomButton = styled.button`
  border: none;
  outline: none;
  color: #EEE;
  background-image: linear-gradient(to right, #46A2B4, #4879A3);
  font-size: 1.5rem;
  margin: 0 20px;
  padding: 0 30px;
  height: 60px;
  border-radius: 10px;
  text-align: center;
`;

export const CustomList = styled.ul`
  padding: 0 !important;
  display: flex;
  justify-content: center;
  width: 70%;
  list-style: none;
  animation: .5s ${showFromLeft} ease-in-out;
  
  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #6A7595;
    color: #EEE;
    font-size: 2.1rem;
    margin: 0 20px;
    width: 100px;
    height: 60px;
    border-radius: 10px;
    text-align: center;
  }
`;
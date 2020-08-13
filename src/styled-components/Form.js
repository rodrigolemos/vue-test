import styled, { keyframes } from 'vue-styled-components';

const showFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const CustomFormGroup = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  color: #EEE;
  font-size: 2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: none;
  border-radius: 25px;
  width: 75vw;
  height: 125px;
  background-image: linear-gradient(to right, #4F5A7C, #485373);
  box-shadow: 5px 10px 10px #252D47;
  color: #EEE;

  label {
    display: flex;
    align-items: center;
    width: 70%;
  }
`;

export const CustomInput = styled.input`
  border: none;
  outline: none;
  background: #6A7595;
  color: #EEE;
  font-size: 2rem;
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
  display: flex;
  justify-content: space-around;
  width: 70%;
  list-style: none;
  animation: .5s ${showFromLeft} ease-in-out;
  
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 50px;
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
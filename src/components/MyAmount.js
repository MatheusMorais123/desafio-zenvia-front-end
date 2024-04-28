
import React, { useState } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

const StyledInputMask = styled(InputMask)`
  margin-left: 8px;
  outline: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2);
    border-radius: 2px;
    background-color: #fff;
    height: 10px;
    width: 25%;
    padding: 10px 60px 10px 15px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0, 0);
    border-width: 1.5px;
`;

const Container = styled.div`
  font-family: Roboto, sans-serif;
  color: #021B51;
  font-weight: bold;
`;

export default function MyAmount({ onTotalAvailableChange }) {
  const [totalAvailable, setTotalAvailable] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (/^\d{0,6}(\,\d{0,2})?$/.test(newValue)) {
      setTotalAvailable(newValue);
      onTotalAvailableChange(newValue);
    }
  };
  
  return (
    <Container id='my-amount'>
      <span>Total disponível: R$</span>
      <StyledInputMask
        type="text"
        mask="99,99"
        maskChar=""
        value={totalAvailable}
        onChange={handleInputChange}
        placeholder='Saldo'
        StyledInput
      />
    </Container>
  )
}

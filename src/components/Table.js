
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFoodItems } from '../services/FoodService';
import TableItem from './TableItem';
import TotalAmount from './TotalAmount';
import MyAmount from './MyAmount';

const MainContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Heading = styled.h1`
  color: #021B51;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10%;
`;

const TableHead = styled.thead`
  text-transform: uppercase;
  color: #A1A8B8;
  font-weight: 700;
`;

const TableBody = styled.tbody`
  font-size: 14px;
  font-family: Roboto, sans-serif;
`;

export default function Table() {
  const [foodItems, setFoodItems] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [totalAvailable, setTotalAvailable] = useState('');

  useEffect(() => {
    getFoodItems().then((response) => {
      setFoodItems(response.data);
    });
  }, []);

 
  useEffect(() => {
    if (foodItems.length > 0) {
      let total = 0;
      foodItems.forEach((item) => {
        total += item.quantity * item.price;
      });
      
      setTotalSpent(total);
    }
  }, [foodItems]);
  
  const handleTotalAvailableChange = (newValue) => {
    setTotalAvailable(newValue);
  };
  
  return (
    <MainContainer id='main'>
      <TotalAmount totalSpent={totalSpent} totalAvailable={totalAvailable} />
      <MyAmount onTotalAvailableChange={handleTotalAvailableChange} />
      <Heading>Meu Carrinho de Compras</Heading>
      <StyledTable>
        <TableHead>
          <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>Preço</td>
            <td>Quantidade</td>
            <td>Preço total</td>
          </tr>
        </TableHead>
        <TableBody>
          {foodItems.map((item, index) => (
            <TableItem
              key={index}
              item={item}
              updateTotalAmount={setTotalSpent}
            />
          ))}
        </TableBody>
      </StyledTable>
    </MainContainer>
  );
} 



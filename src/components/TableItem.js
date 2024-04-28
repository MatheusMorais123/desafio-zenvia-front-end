import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TableCell = styled.td`
  padding: 10px;
  background: #DFE2EB;
  border-top: 1px solid #ccc;
  border-left: ${props => props.isFirst ? '1px solid #ccc' : 'none'};
  border-bottom: ${props => props.isLast ? '1px solid #ccc' : 'none'};
  border-right: ${props => props.isLast ? '1px solid #ccc' : 'none'};
  border-radius: ${props => props.isFirst ? '5px 0 0 5px' : props.isLast ? '0 5px 5px 0' : 'none'};
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 30%;
  background: #00AD8C;
  color: #fff;
`;

const Count = styled.p`
  display: inline-block;
  margin: 0 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function TableItem({ item, updateTotalAmount }) {
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    updateTotalAmount(itemQuantity * item.price);
  }, [itemQuantity, item.price, updateTotalAmount]);

  const handleDecrease = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setItemQuantity(itemQuantity + 1);
  };

  return (
    <tr>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>R$ {item.price}</TableCell>
      <TableCell>
        <ButtonContainer>
          <Button onClick={handleDecrease}>-</Button>
          <Count>{itemQuantity}</Count>
          <Button onClick={handleIncrease}>+</Button>
        </ButtonContainer>
      </TableCell>
      <TableCell>R$ {itemQuantity * item.price}</TableCell>
    </tr>
  );
}
 


 


 

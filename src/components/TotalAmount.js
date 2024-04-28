import React from 'react';
import styled from 'styled-components';

const TotalAmountContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const TotalAmountText = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  color: ${({ totalSpent, totalAvailable }) => (parseFloat(totalSpent) >= parseFloat(totalAvailable.replace(',', '.')) ? 'red' : 'green')};
`;

const AvailableAmountText = styled.div`
  font-size: 16px;
`;

export default function TotalAmount({ totalSpent, totalAvailable }) {
  return (
    <TotalAmountContainer>
      <TotalAmountText totalSpent={totalSpent} totalAvailable={totalAvailable}>
        {totalSpent === undefined || totalSpent === 0
          ? "Você já gastou R$ 0,00!"
          : `Você já gastou R$ ${totalSpent.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', '').replace('.', ',')}!`}
      </TotalAmountText>
      <AvailableAmountText>Você ainda possui R$ {totalAvailable ? parseFloat(totalAvailable.replace(',', '.')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', '').replace('.', ',') : '0,00'} disponível!</AvailableAmountText>
    </TotalAmountContainer>
  );
}

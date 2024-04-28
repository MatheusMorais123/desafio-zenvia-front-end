import React from 'react';
import styled from 'styled-components';
import Table from './components/Table';

const AppContainer = styled.div`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 40px 20px;
`;

function App() {
  return (
    <AppContainer>
      <Table />
    </AppContainer>
  );
}

export default App;

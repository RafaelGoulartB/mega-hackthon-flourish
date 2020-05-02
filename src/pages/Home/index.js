import React from 'react';
import LinearBackground from '../../components/LinearBackground';
import {
  PageTitle,
  SaldoPontosContainer,
  SaldoBox,
  SaldoText,
  PontosBox,
} from '../../styles';

export default function Home() {
  return (
    <LinearBackground>
      <SaldoPontosContainer>
        <SaldoBox>
          <SaldoText>R$ 1750,00</SaldoText>
        </SaldoBox>
        <PontosBox>
          <SaldoText>5.000</SaldoText>
        </PontosBox>
      </SaldoPontosContainer>

      <PageTitle>Home</PageTitle>
    </LinearBackground>
  );
}
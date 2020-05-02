import React from 'react';
import LinearBackground from '../../components/LinearBackground';
import {
  PageTitle,
  SaldoPontosContainer,
  SaldoBox,
  SaldoText,
  PontosBox,
} from '../../styles';

export default function Timeline() {
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

      <PageTitle>Linha do Tempo</PageTitle>
    </LinearBackground>
  );
}
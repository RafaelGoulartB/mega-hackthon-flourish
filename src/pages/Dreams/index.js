import React from 'react';
import LinearBackground from '../../components/LinearBackground';
import {
  PageTitle,
  SaldoPontosContainer,
  SaldoBox,
  SaldoText,
  PontosBox,
  DreamPathContainer,
  DreamLevelBox,
  DreamLevelImage,
  DreamLevelText,
  DreamLastLevelBox,
  DreamLastLevelImage,
  DreamLastLevelText,
  DreamLastLevelTextResult,
  DreamLastLevelTextContainer,
} from '../../styles';

import MoneyBagIcon from '../../assets/money-bag.png';
import CloudIcon from '../../assets/cloud.png';

export default function Dreams() {
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

      <PageTitle>Sonhos</PageTitle>

      <DreamPathContainer>

        <DreamLevelBox>
          <DreamLevelText>Guardar R$100,00 na poupança</DreamLevelText>
          <DreamLevelImage source={MoneyBagIcon}/>
        </DreamLevelBox>

        <DreamLevelBox>
          <DreamLevelText>Guardar R$150,00 na poupança</DreamLevelText>
          <DreamLevelImage source={MoneyBagIcon}/>
        </DreamLevelBox>

        <DreamLevelBox>
          <DreamLevelText>Guardar R$200,00 na poupança</DreamLevelText>
          <DreamLevelImage source={MoneyBagIcon}/>
        </DreamLevelBox>

        <DreamLastLevelBox>
          <DreamLastLevelTextContainer>
            <DreamLastLevelText>Viajar para o Rio</DreamLastLevelText>
            <DreamLastLevelTextResult>R$1.250,00 economizados</DreamLastLevelTextResult>
          </DreamLastLevelTextContainer>
          <DreamLastLevelImage source={CloudIcon}/>
        </DreamLastLevelBox>
      </DreamPathContainer>
    </LinearBackground>
  );
}
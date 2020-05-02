import React from 'react';
import LinearBackground from '../../components/LinearBackground';
import {
  PageTitle,
  SaldoPontosContainer,
  SaldoBox,
  SaldoText,
  PontosBox,
  MonthsContainer,
  CurrentMonth,
  OtherMonth,
  OtherMonthButton,
  TransfersList,
  TransferBox,
  TransferIcon,
  TransferTextInfos,
  TransferTitle,
  TransferValue,
} from '../../styles';

import AntIcons from 'react-native-vector-icons/AntDesign';
import InsertMoneyIcon from '../../assets/money-insert.png'
import RemoveMoneyIcon from '../../assets/money-remove.png'

export default function Page() {
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

      <PageTitle>Histórico</PageTitle>

      <MonthsContainer>
        <OtherMonthButton>
          <AntIcons name="left" size={15} color={'#f5f5f5'}/>
        </OtherMonthButton>

        <OtherMonth>abril/2020</OtherMonth>
        <CurrentMonth>maio/2020</CurrentMonth>
        <OtherMonth>junho/2020</OtherMonth>

        <OtherMonthButton>
          <AntIcons name="right" size={15} color={'#f5f5f5'}/>
        </OtherMonthButton>
      </MonthsContainer>

      <TransfersList>
        <TransferBox>
          <TransferIcon source={InsertMoneyIcon}></TransferIcon>
          <TransferTextInfos>
            <TransferTitle>Recebi de um amigo</TransferTitle>
            <TransferValue color="#C6D936">R$ 250,00</TransferValue>
          </TransferTextInfos>
        </TransferBox>

        <TransferBox>
          <TransferIcon source={InsertMoneyIcon}></TransferIcon>
          <TransferTextInfos>
            <TransferTitle>Salário do mês</TransferTitle>
            <TransferValue color="#C6D936">R$ 2.000,00</TransferValue>
          </TransferTextInfos>
        </TransferBox>

        <TransferBox>
          <TransferIcon source={RemoveMoneyIcon}></TransferIcon>
          <TransferTextInfos>
            <TransferTitle>Aluguel</TransferTitle>
            <TransferValue color="#F25C69">R$ 500,00</TransferValue>
          </TransferTextInfos>
        </TransferBox>
      </TransfersList>
    </LinearBackground>
  );
}
import React from 'react';
import LinearBackground from '../../components/LinearBackground';
import {
  PageTitle,
  SaldoPontosContainer,
  SaldoBox,
  SaldoText,
  PontosBox,
  UserStatusContainer,
  UserStatusImage,
  UserStatusText,
  UserNotificationsBox,
  UserNotificationsTitle,
  UserNotificationsDescription,
} from '../../styles';

import MoneyIcon from '../../assets/money-with-wings.png'

export default function Home({ navigation }) {
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

      <UserStatusContainer>
        <UserStatusImage source={MoneyIcon}/>
        <UserStatusText>Você é muito consumista! Fique de olho nos gastos!</UserStatusText>
      </UserStatusContainer>

      <UserNotificationsBox background='#F19020'>
        <UserNotificationsTitle color='#f5f5f5'>Dica do dia: para controlar seus gastos, faça 3 perguntas básicas!</UserNotificationsTitle>
      </UserNotificationsBox>

      <UserNotificationsBox background='#f5f5f5'>
        <UserNotificationsTitle color='#000'>Novos conteúdos na Universidade!</UserNotificationsTitle>
        <UserNotificationsDescription color='#32D9D9'>Blog da Economia, Portal do Investidor, entre outros.</UserNotificationsDescription>
      </UserNotificationsBox>

      <UserNotificationsBox background='#F25C69'>
        <UserNotificationsTitle color='#f5f5f5'>Já preencheu seus gastos de hoje?</UserNotificationsTitle>
      </UserNotificationsBox>

      <UserNotificationsBox background='#f5f5f5'>
        <UserNotificationsTitle color='#C6D936'>Faltam R$1.000,00 para alcançar seu sonho!</UserNotificationsTitle>
      </UserNotificationsBox>

    </LinearBackground>
  );
}
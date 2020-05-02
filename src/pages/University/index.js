import React from 'react';
import LinearBackground from '../../components/LinearBackground';
import { Text } from 'react-native';
import {
  PageTitle,
  SaldoPontosContainer,
  SaldoBox,
  SaldoText,
  PontosBox,
  LessonList,
  LessonBox,
  LessonTitle,
  LessonAuthorBox,
  LessonAuthorName,
  LessonFotter,
  LessonTagContainer,
  LessonTagBox,
  LessonTagName,
  LessonPointValue
} from '../../styles';

import LessonImg1 from '../../assets/lesson/1.png';

export default function University() {
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

      <PageTitle>Universidade</PageTitle>

      <LessonList>

        <LessonBox image={LessonImg1}>
          <LessonTitle>10 dicas imperdíveis para economizar!</LessonTitle>
          <LessonAuthorBox>
            <Text>Por </Text>
            <LessonAuthorName>Blog da Economia</LessonAuthorName>
          </LessonAuthorBox>

          <LessonFotter>
            <LessonTagContainer>
              <LessonTagBox color="#F29D35">
                <LessonTagName>Artigo</LessonTagName>
              </LessonTagBox>
              <LessonTagBox color="#C6D936">
                <LessonTagName>Economia</LessonTagName>
              </LessonTagBox>
            </LessonTagContainer>
            <LessonPointValue>+ 50</LessonPointValue>
          </LessonFotter>
        </LessonBox>

        <LessonBox image={LessonImg1}>
          <LessonTitle>Como posso começar a investir meu dinheiro?</LessonTitle>
          <LessonAuthorBox>
            <Text>Por </Text>
            <LessonAuthorName>Portal do Investidor</LessonAuthorName>
          </LessonAuthorBox>

          <LessonFotter>
            <LessonTagContainer>
              <LessonTagBox color="#F25C69">
                <LessonTagName>Vídeo</LessonTagName>
              </LessonTagBox>
              <LessonTagBox color="#C6D936">
                <LessonTagName>Economia</LessonTagName>
              </LessonTagBox>
            </LessonTagContainer>
            <LessonPointValue>+ 50</LessonPointValue>
          </LessonFotter>
        </LessonBox>

      </LessonList>
    </LinearBackground>
  );
}
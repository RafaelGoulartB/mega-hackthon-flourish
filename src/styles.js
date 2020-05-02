import styled from "styled-components/native";

// Global
export const PageTitle = styled.Text`
  font-size: 20px;
  color: #f5f5f5;
  text-align: center;
`;
export const SaldoPontosContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const SaldoBox = styled.View`
  background: #C6D936;
  height: 24px;
  width: 92px;
  border-radius: 8px;
  margin-left: 10px;
`;
export const SaldoText = styled.Text`
  text-align: center;
  color: #f5f5f5;
  font-size: 16px;
`;
export const PontosBox = styled(SaldoBox)`
  margin-right: 10px;
  margin-left: 0px;
  background: #244BBF;
`; 

// Operation Page
export const MonthsContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
`;
export const CurrentMonth = styled.Text`
  color: #f5f5f5;
  margin-right: 25px;
  margin-left: 25px;
  font-size: 16px;
`;
export const OtherMonth = styled.Text`
  color: #f5f5f5;
  opacity: .44;
  font-size: 16px;
`;
export const OtherMonthButton = styled.Text`
  align-self: center;
  margin-right: 10px;
  margin-left: 10px;
`;
export const TransfersList = styled.View`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 42px;
`;
export const TransferBox = styled.View`
  height: 74px; 
  flex-direction: row;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 12px;
`;
export const TransferIcon = styled.Image`
  margin-left: 12px;
  margin-right: 22px;
`;
export const TransferTextInfos = styled.View`
  flex-direction: column;
`;
export const TransferTitle = styled.Text`
  color: #000;
  font-size: 18px;
`;
export const TransferValue = styled.Text`
  color: ${props => props.color};
  font-size: 20px;
`;
export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  background: #C6D936;
  width: 59px;
  height: 59px;
  border-radius: 59px;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const AddButtonText = styled.Text`
  font-size: 38px;
  color: #fff;
  text-align: center;
`;

// University
export const LessonList = styled.View`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 75px;
`;
export const LessonBox = styled.View`
  height: 170px;
  background: #f5f5f5;
  border-radius: 8px;
  padding-left:  12px;
  padding-right: 12px;
  padding-bottom: 14px;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
export const LessonTitle = styled.Text`
  font-size: 16px;
`;
export const LessonAuthorBox = styled.Text`
  flex-direction: row;
  margin-left: 4px;
`;
export const LessonAuthorName = styled.Text`
  text-decoration: underline;
  color: #244BBF;
`;
export const LessonFotter = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const LessonTagContainer = styled.View`
  flex-direction: row;
`;
export const LessonTagBox = styled.View`
  background: ${props => props.color};
  height: 20px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 5px;
  margin-right: 5px;
`;
export const LessonTagName = styled.Text`
  color: #fff;
  text-align: center;
`;
export const LessonPointValue = styled.Text`
  color: #32D9D9;
  font-size: 18px;
`;
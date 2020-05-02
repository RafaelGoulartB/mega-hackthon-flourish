import styled from "styled-components/native";

// Global
export const PageTitle = styled.Text`
  font-size: 20px;
  color: #f5f5f5;
  text-align: center;
`;
export const SaldoPontosContainer = styled.View`
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
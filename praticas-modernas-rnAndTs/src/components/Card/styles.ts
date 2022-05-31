import styled from "styled-components/native";

export const Container = styled.View`
  width: 180px;
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  align-items: center;
  margin: 0 10px;
  border-radius: 10px;
`;

export const Image = styled.Image`
  margin-top: -50px;
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.MEDIUM};
    font-size: 18px;
    margin-top: 24px;
`
export const Local = styled.Text `
    color: ${({theme}) => theme.COLORS.TEXT};
    margin-top: 12px;
`
export const Strong = styled.Text `
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.BOLD};
    margin-top: 12px;
`
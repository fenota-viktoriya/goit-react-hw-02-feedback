import styled from '@emotion/styled';
import { theme } from 'styles';

export const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const BtnFeedback = styled.button` display: flex;	
  justify-content: center;  
  font-size: 32px;
  margin-right: 15px;
  border-radius: 50%;
box - shadow: ${theme.shadow};
    transition: all 0.3s ease;


   
  &:hover {
    color: ${({ name }) => {
      switch (name) {
        case 'good':
          return `${theme.colors.green}`;
        case 'neutral':
          return `${theme.colors.orange}`;
        case 'bad':
          return `${theme.colors.red}`;
        default:
          return `${theme.colors.dark}`;
      }
    }};`;

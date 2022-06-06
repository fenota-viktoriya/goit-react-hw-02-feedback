import styled from '@emotion/styled';
import { theme } from 'styles';

export const Section = styled.section`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  background-color: ${theme.colors.titleBC};
  border-radius: 5px;
  color: ${theme.colors.title};
  padding: 8px;
  box-shadow: ${theme.shadow};
  text-transform: uppercase;
`;

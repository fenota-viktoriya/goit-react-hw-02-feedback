import styled from '@emotion/styled';
import { theme } from 'styles';

export const StatWrapper = styled.div`
  width: 290px;
  height: 265px;

  border-radius: 5px;
  padding: 8px;
  box-shadow: ${theme.shadow};
  background-color: ${theme.colors.titleBC};
`;

export const StatTitle = styled.h2`
  font-size: 20px;
  color: ${theme.colors.title};
  text-transform: uppercase;
  border-bottom: 1px solid ${theme.colors.title};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatReactionText = styled.p`
  background-color: ${theme.colors.valueBC};
  padding: 5px;
  color: ${theme.colors.title};
`;
export const StatValue = styled.span`
  display: inline-block;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
`;

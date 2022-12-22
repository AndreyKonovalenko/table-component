import styled from 'styled-components';

export const Select = styled.select`
  background: ${({ theme }) => theme.colors.backbround};
  border-radius: 3px;
  border: none;
  color: ${({ theme }) => theme.colors.text.onHeader};
  cursor: pointer;
  margin-right: 3px;
  width: 1rem;
`;

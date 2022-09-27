import styled from 'styled-components';

export const Select = styled.select`
  width: 1rem;
  background: ${({ theme }) => theme.colors.backbround};
  color: ${({ theme }) => theme.colors.text.onHeader};
  margin-right: 3px;
  border-radius: 3px;
  border: none;
`;

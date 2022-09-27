import styled from 'styled-components';

export const Select = styled.select`
  width: 3rem;
  background: ${({ theme }) => theme.colors.selectionFieldBackground};
  color: ${({ theme }) => theme.colors.text.onSelect};
  margin-right: 3px;
  border-radius: 3px;
  border: none;
`;

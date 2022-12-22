import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 5px;
  table-layout: auto;
  width: 100%;
`;

export const TH = styled.th`
  font-weight: bold;
  padding: 8px 0px 8px 20px;
  text-align: left;
`;

export const THContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const THEAD = styled.thead`
  color: ${({ theme }) => theme.colors.text.onHeader};
`;

export const Span = styled.span`
  background: ${({ theme }) => theme.colors.selectionFieldBackground};
  border-radius: 3px;
  border: none;
  color: ${({ theme }) => theme.colors.text.onSelect};
  margin-right: 3px;
  padding: 2px 5px;
`;

export const TR = styled.tr`
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export const TD = styled.td`
  padding: 20px 0px 20px 20px;
  text-align: left;
`;

export const TBoby = styled.tbody`
  background: #fff;
  font-weight: bold;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  height: 14px;
  margin-right: 10px;
  width: 14px;
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: row;
`;

export const Button = styled.button`
  background-color: ${({ bg }) => bg || (({ theme }) => theme.colors.button)};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.button};
  color: ${({ color }) => color || (({ theme }) => theme.colors.button)};
  cursor: pointer;
  font-weight: bold;
  margin-right: 20px;
  padding: 8px 15px;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

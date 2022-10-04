import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
`;

export const TH = styled.th`
  font-weight: bold;
  padding: 8px 20px;
  text-align: left;
`;

export const THContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const THEAD = styled.thead`
  color: ${({ theme }) => theme.colors.text.onHeader};
`;

export const Span = styled.span`
  background: ${({ theme }) => theme.colors.selectionFieldBackground};
  color: ${({ theme }) => theme.colors.text.onSelect};
  padding: 2px 5px;
  margin-right: 3px;
  border-radius: 3px;
  border: none;
`;

export const TR = styled.tr`
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export const TD = styled.td`
  padding: 25px 20px;
`;

export const TBoby = styled.tbody`
  font-weight: bold;
  background: #fff;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 10px;
  height: 14px;
  width: 14px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
`;

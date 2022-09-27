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

export const THEAD = styled.thead`
  color: ${({ theme }) => theme.colors.text.onHeader};
`;

export const TR = styled.tr`
  background-color: ${(props) => props.color};
`;

export const TD = styled.td`
  padding: 25px 20px;
`;

export const TBoby = styled.tbody`
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

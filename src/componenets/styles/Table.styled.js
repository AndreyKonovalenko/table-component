import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const TH = styled.th`
  background: #fff;
  padding: 8px 20px;
  border-bottom: 1px solid #1a1a1a;
  font-weight: bold;
  text-align: left;
`;

export const TR = styled.tr`
  background-color: ${(props) => props.color};
`;

export const TD = styled.td`
  border-top: 1px solid #ddd;
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

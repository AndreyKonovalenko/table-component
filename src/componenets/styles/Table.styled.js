import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const TH = styled.th`
  background: #fff;
  padding: 8px 10px;
  border-bottom: 1px solid #1a1a1a;
  font-weight: bold;
  text-align: left;
`;

export const TR = styled.tr`
  background-color: ${(props) => props.color};
`;

export const TD = styled.td`
  border-top: 1px solid #ddd;
  padding: 8px 20px;
`;

export const TBoby = styled.tbody`
  background: #fff;
`;

export const Dot = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  height: 1rem;
  margin-right: 5px;
  width: 1rem;
  vertical-align: middle;
  display: inline-block;
`;

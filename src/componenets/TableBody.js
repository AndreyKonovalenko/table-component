import * as S from './styles/Table.styled';

const TableBody = ({ tableData, columns }) => {
  const tableBody = tableData.map((data) => {
    const cellData = columns.map(({ accessor }) => {
      const tData = data[accessor];
      return <S.TD key={accessor}>{tData}</S.TD>;
    });

    return <tr key={data.id}>{cellData}</tr>;
  });

  return <S.TBoby>{tableBody}</S.TBoby>;
};

export default TableBody;

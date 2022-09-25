import * as S from './styles/Table.styled';
import { colorSelector } from '../utils/utils';
const TableBody = ({ tableData, columns }) => {
  const tableBody = tableData.map((data) => {
    const cellData = columns.map(({ accessor }) => {
      const tData = data[accessor];
      return <S.TD key={accessor}>{tData}</S.TD>;
    });

    return (
      <S.TR color={colorSelector(data.status)} key={data.id}>
        {cellData}
      </S.TR>
    );
  });

  return <S.TBoby>{tableBody}</S.TBoby>;
};

export default TableBody;

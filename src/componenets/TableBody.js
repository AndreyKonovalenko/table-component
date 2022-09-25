import * as S from './styles/Table.styled';
import { colorSelector } from '../utils/utils';
const TableBody = ({ tableData, columns }) => {
  const tableBody = tableData.map((data) => {
    const cellData = columns.map(({ accessor }) => {
      const dot = <S.Dot color={data.status} />;
      const tData =
        accessor === 'roi' || accessor === 'hedge'
          ? `${data[accessor]} %`
          : data[accessor];

      return (
        <S.TD key={accessor}>
          {dot}
          {tData}
        </S.TD>
      );
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

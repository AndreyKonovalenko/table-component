import { useTheme } from 'styled-components';
import * as S from './styles/Table.styled';

import { numberFormatter } from '../utils/utils';

const TableBody = ({ tableData, columns }) => {
  const theme = useTheme();

  const tableBody = tableData.map((data) => {
    const dot = <S.Dot color={theme.colors.table[data.status].main} />;
    const rowsData = columns.map(({ accessor }) => {
      let tData;
      switch (accessor) {
        case 'roi' || 'hedge':
          tData = `${data[accessor]} %`;
          break;
        case 'hedge':
          tData = `${data[accessor]} %`;
          break;
        case 'volume':
          tData = `$ ${numberFormatter(data[accessor])}`;
          break;
        default:
          tData = data[accessor];
      }

      return (
        <S.TD key={accessor}>
          <S.FlexContainer>
            {accessor === 'name' && dot}
            {tData}
          </S.FlexContainer>
        </S.TD>
      );
    });

    return (
      <S.TR color={theme.colors.table[data.status].light} key={data.id}>
        {rowsData}
      </S.TR>
    );
  });

  return <S.TBoby>{tableBody}</S.TBoby>;
};

export default TableBody;

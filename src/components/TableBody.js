import { useTheme } from 'styled-components';
import * as S from './styles/Table.styled';
import { numberFormatter } from '../utils/utils';

const TableBody = ({ tableData, columns, bought, onBuy }) => {
  const theme = useTheme();

  const onRowHandler = (name, id) => {
    window.location.href = `https://${name}/${id}`;
  };

  const tableBody = tableData.map((data) => {
    const dot = <S.Dot color={theme.colors.table[data.status].main} />;
    const rowsData = columns.map(({ accessor }) => {
      let tData;
      switch (accessor) {
        case 'roi':
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
            {accessor === 'button' && (
              <S.Button
                bg={
                  !bought.includes(data.id)
                    ? theme.colors.table[data.status].light
                    : null
                }
                color={
                  bought.includes(data.id) ? theme.colors.text.onButton : null
                }
                onClick={(event) => onBuy(data.id, event)}>
                Buy
              </S.Button>
            )}
          </S.FlexContainer>
        </S.TD>
      );
    });

    return (
      <S.TR
        color={theme.colors.table[data.status].light}
        key={data.id}
        onClick={() => onRowHandler(data.name, data.id)}>
        {rowsData}
      </S.TR>
    );
  });

  return <S.TBoby>{tableBody}</S.TBoby>;
};

export default TableBody;

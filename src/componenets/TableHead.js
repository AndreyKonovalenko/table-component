import { nanoid } from 'nanoid';
import * as S from './styles/Table.styled';
import Select from './Select';
import { selectorArray } from '../utils/utils';

const TableHead = ({ columns, tableData, handleFiltering, filters }) => {
  const tableHead = columns.map(({ label, accessor }) => {
    return (
      <S.TH key={nanoid()}>
        {accessor === 'name' || accessor === 'type' ? (
          <Select
            accessor={accessor === 'name' ? 'status' : accessor}
            data={selectorArray(
              tableData,
              accessor === 'name' ? 'status' : accessor
            )}
            handleFiltering={handleFiltering}
            filter={filters[accessor === 'name' ? 'status' : accessor]}
          />
        ) : null}
        {accessor === 'name' || accessor === 'type' ? (
          <S.Span>{filters[accessor === 'name' ? 'status' : accessor]}</S.Span>
        ) : null}
        {label}
      </S.TH>
    );
  });
  return (
    <S.THEAD>
      <tr>{tableHead}</tr>
    </S.THEAD>
  );
};

export default TableHead;

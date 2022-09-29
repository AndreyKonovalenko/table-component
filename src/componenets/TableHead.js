import { nanoid } from 'nanoid';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import * as S from './styles/Table.styled';
import Select from './Select';
import { selectorArray } from '../utils/utils';

const TableHead = ({ columns, tableData, handleFiltering, filters }) => {
  const tableHead = columns.map(({ label, accessor, sortable }) => {
    return (
      <S.TH key={nanoid()}>
        <S.THContainer>
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
            <S.Span>
              {filters[accessor === 'name' ? 'status' : accessor]}
            </S.Span>
          ) : null}
          <span>{label}</span>
          {sortable && <FaSort style={{ marginLeft: '3px' }} size={'1em'} />}
          {sortable && <FaSortUp style={{ marginLeft: '3px' }} size={'1em'} />}
          {sortable && (
            <FaSortDown style={{ marginLeft: '3px' }} size={'1em'} />
          )}
        </S.THContainer>
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

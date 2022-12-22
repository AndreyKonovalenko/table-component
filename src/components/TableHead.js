import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import * as S from './styles/Table.styled';
import Select from './Select';
import { selectorArray } from '../utils/utils';

const TableHead = ({
  columns,
  tableData,
  handleFiltering,
  filters,
  handleSorting,
}) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const onSortHandle = (accessor) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  const iconStyle = {
    marginLeft: '3px',
    cursor: 'pointer',
  };
  const up = <FaSortUp style={iconStyle} size={'1em'} />;
  const down = <FaSortDown style={iconStyle} size={'1em'} />;
  const initial = <FaSort style={iconStyle} size={'1em'} />;

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
          {sortable && (
            <div onClick={() => onSortHandle(accessor)}>
              {sortField === accessor && order === 'asc'
                ? up
                : sortField === accessor && order === 'desc'
                ? down
                : initial}
            </div>
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

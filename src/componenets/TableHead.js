import { nanoid } from 'nanoid';
import * as S from './styles/Table.styled';
import Select from './Select';
import { selectorArray } from '../utils/utils';

const TableHead = ({ columns, tableData, handleFiltering }) => {
  const tableHead = columns.map(({ label, accessor }) => {
    return (
      <S.TH key={nanoid()}>
        {accessor === 'name' ? (
          <Select
            accessor={'status'}
            data={selectorArray(tableData, 'status')}
          />
        ) : null}
        {accessor === 'type' ? (
          <Select
            accessor={accessor}
            data={selectorArray(tableData, accessor)}
          />
        ) : null}
        {label}
      </S.TH>
    );
  });
  console.log(tableHead);
  return (
    <thead>
      <tr>{tableHead}</tr>
    </thead>
  );
};

export default TableHead;

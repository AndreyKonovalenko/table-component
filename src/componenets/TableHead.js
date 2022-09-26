import { nanoid } from 'nanoid';
import * as S from './styles/Table.styled';
import Select from './Select';
import { selectorArray } from '../utils/utils';

const TableHead = ({ columns, tableData }) => {
  const tableHead = columns.map(({ label, accessor }) => {
    return (
      <S.TH key={nanoid()}>
        {accessor === 'name' ? (
          <Select data={selectorArray(tableData, 'status')} />
        ) : null}
        {accessor === 'type' ? (
          <Select data={selectorArray(tableData, accessor)} />
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

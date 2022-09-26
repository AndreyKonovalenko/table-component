import { nanoid } from 'nanoid';
import * as S from './styles/Table.styled';
import Select from './Select';
import { selectorArray } from '../utils/utils';

const TableHead = ({ columns, tableData, handleFiltering }) => {
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
          />
        ) : null}

        {label}
      </S.TH>
    );
  });
  return (
    <thead>
      <tr>{tableHead}</tr>
    </thead>
  );
};

export default TableHead;

import * as S from './styles/Table.styled';

const TableHead = ({ columns }) => {
  const tableHead = columns.map(({ label, accessor }) => {
    return <S.TH key={accessor}>{label}</S.TH>;
  });
  console.log(tableHead);
  return (
    <thead>
      <tr>{tableHead}</tr>
    </thead>
  );
};

export default TableHead;

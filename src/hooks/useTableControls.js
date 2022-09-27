import { useState } from 'react';

function getDefaultSorting(defaultTableData, columns) {
  const sorted = [...defaultTableData].sort((a, b) => {
    const filterColumn = columns.filter((column) => column.sortbyOrder);

    // Merge all array objects into single object and extract accessor and sortbyOrder keys
    let { accessor = 'id', sortbyOrder = 'asc' } = Object.assign(
      {},
      ...filterColumn
    );

    if (a[accessor] === null) return 1;
    if (b[accessor] === null) return -1;
    if (a[accessor] === null && b[accessor] === null) return 0;

    const ascending = a[accessor]
      .toString()
      .localeCompare(b[accessor].toString(), 'en', {
        numeric: true,
      });

    return sortbyOrder === 'asc' ? ascending : -ascending;
  });
  return sorted;
}

export const useTableContorls = (data) => {
  const [tableData, setTableData] = useState(data);
  const [filters, setFilters] = useState({ status: 'All', type: 'All' });

  const handleFiltering = (accessor, value) => {
    if (value === 'All') {
      setTableData(data);
      setFilters({ status: 'All', type: 'All' });
    }
    if (value !== 'All') {
      const filtered = data.filter((element) => element[accessor] === value);
      setTableData(filtered);
      setFilters({ ...filters, [accessor]: value });
    }
  };
  console.log(filters);

  return [tableData, filters, handleFiltering];
};

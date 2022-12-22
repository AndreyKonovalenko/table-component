import { useState } from "react";

export const useTableContorls = (data) => {
  const [tableData, setTableData] = useState(data);
  const [filters, setFilters] = useState({ status: "All", type: "All" });

  const handleFiltering = (accessor, value) => {
    if (value === "All") {
      setTableData(data);
      setFilters({ status: "All", type: "All" });
    }
    if (value !== "All") {
      const filtered = data.filter((element) => element[accessor] === value);
      setTableData(filtered);
      setFilters({ ...filters, [accessor]: value });
    }
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  return [tableData, filters, handleFiltering, handleSorting];
};

import { useState, useEffect } from "react";

export default function usePagination(data, itemsPerPage, filteredProducts) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCurrentPage, setFilteredCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const pageCount = Math.ceil(data.length / itemsPerPage);
    setTotalPages(pageCount);
  }, [data, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilteredPageChange = (pageNumber) => {
    setFilteredCurrentPage(pageNumber);
  };

  const getVisibleItems = () => {
    const startIndex = (filteredCurrentPage - 1) * itemsPerPage;
    const filteredData = filteredProducts !== 'All' ? data.filter(product => product.category_name === filteredProducts) : data
    const endIndex = Math.min(
      startIndex + itemsPerPage,
      filteredData.length
    );

    return filteredData.slice(startIndex, endIndex);
  };

  return {
    currentPage,
    totalPages,
    filteredCurrentPage,
    visibleItems: getVisibleItems(),
    handlePageChange,
    handleFilteredPageChange,
  };
}

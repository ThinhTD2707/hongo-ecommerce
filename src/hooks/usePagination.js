import { useState } from 'react';

const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(itemsPerPage);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const lastPostIndex = currentPage * itemsPerPage;
    const firstPostIndex = lastPostIndex - itemsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);

    const changeCurrentPage = (page) => {
        setCurrentPage(page);
    };

    const changeProductsPerPage = (page) => {
        setProductsPerPage(page);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return {
        currentPage,
        productsPerPage,
        changeCurrentPage,
        changeProductsPerPage,
        totalPages,
        currentPosts,
        goToNextPage,
        goToPreviousPage,
        goToPage,
    };
};

export default usePagination;

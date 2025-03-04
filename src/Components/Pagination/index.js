import classNames from 'classnames/bind';
import styles from './pagination.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);
function Pagination({ totalsProducts, productsPerPage, setCurrentPage, currentPage }) {
    // let currentPage = 5;
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const totalPages = Math.ceil(totalsProducts / productsPerPage);
        const newPages = [];

        for (let i = 1; i <= totalPages; i++) {
            // Assuming page numbers start at 1
            newPages.push(i);
        }
        setPages(newPages);
    }, [totalsProducts, productsPerPage]);

    return (
        <div className={cx('pagination-wrap')}>
            <span className={cx('pagination-first')}>{'<'}</span>
            <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(1)}>
                1
            </a>

            {currentPage <= 4 ? (
                <>
                    {pages[pages.length - 1] >= 2 && (
                        <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(2)}>
                            2
                        </a>
                    )}
                    {pages[pages.length - 1] >= 3 && (
                        <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(3)}>
                            3
                        </a>
                    )}
                </>
            ) : (
                <>...</>
            )}
            {currentPage == 2 && pages[pages.length - 1] > 2 ? (
                <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(4)}>
                    4
                </a>
            ) : (
                <></>
            )}

            {currentPage >= 5 ? (
                <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(currentPage - 2)}>
                    {currentPage - 2}
                </a>
            ) : (
                <></>
            )}

            {currentPage >= 5 ? (
                <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(currentPage - 1)}>
                    {currentPage - 1}
                </a>
            ) : (
                <></>
            )}
            {/* 1 + (visible page) */}
            {currentPage >= 5 || currentPage == 4 ? (
                <a styles className={cx('pagination-item')}>
                    {currentPage} *
                </a>
            ) : (
                <></>
            )}
            {currentPage == 4 || currentPage == 3 ? (
                <>
                    <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(currentPage + 1)}>
                        {currentPage + 1}
                    </a>
                    <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(currentPage + 2)}>
                        {currentPage + 2}
                    </a>
                </>
            ) : (
                <></>
            )}
            {currentPage >= 5 && currentPage + 1 < pages[pages.length - 1] ? (
                <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(currentPage + 1)}>
                    {currentPage + 1}
                </a>
            ) : (
                <></>
            )}
            {currentPage >= 5 && currentPage + 3 <= pages[pages.length - 1] ? (
                <a styles className={cx('pagination-item')} onClick={() => setCurrentPage(currentPage + 2)}>
                    {currentPage + 2}
                </a>
            ) : (
                <></>
            )}
            {currentPage + 3 >= pages[pages.length - 1] ? <></> : <>...</>}
            {currentPage >= pages[pages.length - 1] || pages[pages.length - 1] == 2 ? (
                <></>
            ) : (
                <a className={cx('pagination-item')} onClick={() => setCurrentPage(pages[pages.length - 1])}>
                    {pages[pages.length - 1]}
                </a>
            )}
            <span className={cx('pagination-last')}>{'>'}</span>
        </div>
    );
}

export default Pagination;

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './shop.module.scss';
import shopBanner from '../../asset/shop/shop-title-bg.jpg';
import ShopCard from '../../Components/ShopCard';
import Filter from '../../Components/Filter';
import Pagination from '../../Components/Pagination';
import products from '../../data/Product';
import usePagination from '../../hooks/usePagination';
import { useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);
function Shop() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchValue = queryParams.get('search');
    const postType = queryParams.get('post_type');
    const [data, setData] = useState([]);
    const itemsPerPage = 4;

    useEffect(() => {
        let productQuery = products || '';
        let searchQuery = searchValue || '';
        setData(findProductByName(productQuery, searchQuery));
    }, [searchValue, postType]);

    function findProductByName(products, name) {
        return products?.filter((product) => product?.name?.toLowerCase().includes(name.toLowerCase()));
    }

    const {
        currentPage,
        productsPerPage,
        currentPosts,
        totalPages,
        changeCurrentPage,
        changeProductsPerPage,
        goToNextPage,
        goToPreviousPage,
        goToPage,
    } = usePagination(data, itemsPerPage);

    const onChangeCurrentPage = (page) => {
        changeCurrentPage(page);
    };

    return (
        <div className={cx('')}>
            <section className={cx('shop-banner')} style={{ backgroundImage: `url(${shopBanner})` }}>
                <div className={cx('shop-overlay')}></div>
                <div className={cx('shop-banner_content')}>
                    <p>WE PROVIDE LATEST FASHION TRENDS</p>
                    <h3>Shop classic</h3>
                </div>
            </section>
            <section className={cx('shop-main')}>
                <div className={cx('filter')}>
                    <Filter />
                </div>
                <div className={cx('shop-content')}>
                    <div className={cx('shop-title')}>
                        <div className={cx('switch-wrap')}>
                            <p>Showing 1–12 of 112 results</p>
                            <div className={cx('switch-options')}>
                                <a onClick={() => changeProductsPerPage(2)}>
                                    <span></span>
                                    <span></span>
                                </a>
                                <a onClick={() => changeProductsPerPage(3)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                                <a onClick={() => changeProductsPerPage(4)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                        <form className={cx('custom-select-container')}>
                            <select className={cx('dropdown')}>
                                <option value="">Default sorting</option>
                                <option value="">Sort by popularity</option>
                                <option value="">Sort by average rating</option>
                                <option value="">Sort by latest</option>
                                <option value="">Sort by price: low to high</option>
                                <option value="">Sort by price: high to low</option>
                            </select>
                        </form>
                    </div>
                    <ul className={cx('shop-products')} style={{ '--productsPerPage': productsPerPage }}>
                        {currentPosts.map((product, index) => (
                            <li>
                                <ShopCard product={product} />
                            </li>
                        ))}
                    </ul>
                    <div>
                        <Pagination
                            totalsProducts={data.length}
                            productsPerPage={productsPerPage}
                            setCurrentPage={onChangeCurrentPage}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Shop;

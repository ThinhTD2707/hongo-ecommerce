import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Search({ onClose }) {
    const navigate = useNavigate();

    const onSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value.trim(); // Lấy giá trị từ input
        if (searchValue) {
            onClose();
            navigate(`/shop/?search=${searchValue}&post_type=product`); // Chuyển trang
        }
    };

    return (
        <div className={cx('search-container')}>
            <div className={cx('search-content')}>
                <button onClick={onClose} className={cx('close-btn')}>
                    <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/material-outlined/50/delete-sign.png"
                        alt="delete-sign"
                    />
                </button>
                <form onSubmit={onSearch} className={cx('search-form')}>
                    <p className={cx('search-title')}>What are you looking for?</p>
                    <input
                        className={cx('search-input')}
                        type="text"
                        name="search"
                        placeholder="Enter your keywords..."
                    />
                    <button className={cx('search-btn')} type="submit">
                        <img src="https://img.icons8.com/material-outlined/50/search--v1.png" alt="search--v1" />
                    </button>
                </form>
            </div>
            <div className={cx('search-bg')}></div>
        </div>
    );
}

export default Search;

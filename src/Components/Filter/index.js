import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import filterSlice from '../../features/filter/filterSlice';
import { productRemainingSelector } from '../../redux/selector';

const cx = classNames.bind(styles);
const filterCategories = [
    'Casual shirts',
    'Leather bags',
    "Men's shorts",
    'Polo t-shirts',
    'Short skirts',
    'Winter jackets',
];
const filterColor = [
    { color: 'Black', circleColor: '#363636' },
    { color: 'Blue', circleColor: '#657fa8' },
    { color: 'Brown', circleColor: '#936f5e' },
    { color: 'Green', circleColor: '#97a27f' },
    { color: 'Red', circleColor: '#b95b5b' },
    { color: 'Silver', circleColor: '#b7b5b5' },
    { color: 'Yellow', circleColor: '#d1a14e' },
];
const filterSizes = ['S', 'M', 'L', 'XL', 'XXL'];
const filterTags = ['Coats', 'Cotton', 'Dresses', 'Jackets', 'Polyester', 'Printed', 'Shirts', 'Shorts', 'Tops'];

//practice with redux- co the dung
function Filter() {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [tag, setTag] = useState([]);

    //cach lay state tu redux
    const count = useSelector((state) => state.filter);
    const productList = useSelector(productRemainingSelector);
    console.log(productList);
    //hoac nhu nay`
    const filterSelector = (state) => state.filter;
    const todoList = useSelector(filterSelector);

    const handleCategoriesChange = (categories) => {
        setCategories(categories);
        dispatch(filterSlice.actions.categoriesFilterChange(categories));
    };

    const handleColorsChange = (colors) => {
        setColors(colors);
        dispatch(filterSlice.actions.colorsFilterChange(colors));
    };
    const handleSizesChange = (sizes) => {
        setSizes(sizes);
        dispatch(filterSlice.actions.sizesFilterChange(colors));
    };
    const handleTagChange = (tag) => {
        setTag(tag);
        dispatch(filterSlice.actions.tagFilterChange(tag));
    };

    return (
        <div className={cx('filter')}>
            <div className={cx('filter-container')}>
                <p className={cx('filter-title')}>Filter by category</p>
                <ul>
                    {filterCategories.map((category) => (
                        <li
                            key={category}
                            className={cx('filter-item')}
                            onClick={() => handleCategoriesChange(category)}
                        >
                            <a
                                className={cx(
                                    todoList.categories.includes(category)
                                        ? 'filter-content-checked'
                                        : 'filter-content',
                                )}
                            >
                                <span
                                    className={cx(
                                        todoList.categories.includes(category)
                                            ? 'filter-circle-checked'
                                            : 'filter-circle',
                                    )}
                                ></span>
                                {category}
                            </a>
                            <p className={cx('filter-quantity')}>12</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx('filter-container')}>
                <p className={cx('filter-title')}>Filter by color</p>
                <ul>
                    {filterColor.map((color) => (
                        <li className={cx('filter-item')} onClick={() => handleColorsChange(color.color)}>
                            <a
                                className={cx(
                                    todoList.colors.includes(color.color) ? 'filter-content-checked' : 'filter-content',
                                )}
                            >
                                <span
                                    className={cx('filter-circle')}
                                    style={{ backgroundColor: color.circleColor, borderColor: color.circleColor }}
                                ></span>
                                {color.color}
                            </a>
                            <p className={cx('filter-quantity')}>12</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx('filter-container')}>
                <p className={cx('filter-title')}>Product tags</p>
                <ul>
                    <li className={cx('filter-tag-container')}>
                        {filterTags.map((tag) => (
                            <span
                                className={cx(todoList.tag.includes(tag) ? 'filter-tag-checked' : 'filter-tag')}
                                onClick={() => handleTagChange(tag)}
                            >
                                {tag}
                            </span>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;

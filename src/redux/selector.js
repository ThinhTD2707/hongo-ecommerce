import { createSelector } from '@reduxjs/toolkit';
import productsList from '../data/Product';

export const categoriesTextSelector = (state) => state.filter.categories;
export const colorstatusSelector = (state) => state.filter.colors;
export const sizesSelector = (state) => state.filter.sizes;
export const tagSelector = (state) => state.filter.tag;

export const productRemainingSelector = createSelector(
    categoriesTextSelector,
    colorstatusSelector,
    sizesSelector,
    tagSelector,
    (categories, colors, sizes, tag) => {
        return productsList.filter((product) => {
            return (
                (!categories || product.category.includes(categories)) &&
                (!colors.length || product.colors.some((color) => colors.includes(color))) &&
                (!sizes.length || product.sizes.some((size) => sizes.includes(size))) &&
                (!tag || product.tag?.includes(tag))
            );
        });
    },
);

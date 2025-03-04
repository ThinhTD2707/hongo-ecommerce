import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './card.module.scss';
import cardBefore from '../../asset/card/fashion-recent-products-01-1-1.jpg.webp';
import cardAfter from '../../asset/card/fashion-recent-products-01-a-1-1.jpg.webp';
import { useLocalStorage } from '@uidotdev/usehooks';
const cx = classNames.bind(styles);

function Card() {
    const [value, setValue] = useLocalStorage('check', []);
    return (
        <div className={cx('card')} onClick={() => (window.location.href = '/detail/01')}>
            <div className={cx('card_body')}>
                <>
                    <img className={cx('card_img', 'card_b')} src={cardBefore} />
                    <img className={cx('card_img', 'card_a')} src={cardAfter} />
                </>
                <div className={cx('card-button')}>
                    <a
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default action
                            e.stopPropagation(); // Prevent navigation
                            setValue([...value, '01']); // Update state
                        }}
                    >
                        <img
                            className={cx('card-icon')}
                            src="https://img.icons8.com/material-outlined/50/shopping-cart--v1.png"
                            alt="shopping-cart--v1"
                        />
                    </a>
                    <a>
                        <img
                            className={cx('card-icon')}
                            src="https://img.icons8.com/material-outlined/50/visible--v1.png"
                            alt="visible--v1"
                        />
                    </a>
                </div>
            </div>
            <div className={cx('card_content')}>
                <a className={cx('card_name')}>Textured Sweater</a>
                <span className={cx('card_price')}>$50.00</span>
            </div>
        </div>
    );
}
export default Card;

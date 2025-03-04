import classNames from 'classnames/bind';
import styles from './shopCard.module.scss';
import product_img from '../../asset/shop/fashion-product-style-04.webp';
import product_img2 from '../../asset/shop/fashion-product-style-04-b.webp';
const cx = classNames.bind(styles);
function ShopCard({ product }) {
    const handleAddToCart = (item) => {
        const key = 'cart';
        let items = JSON.parse(localStorage.getItem(key)) || [];

        const exists = items.some((existingItem) => existingItem.id === item.id);

        if (exists) {
            console.log('Item already exists in the cart:', item);
            return;
        }
        // Thêm sản phẩm mới vào mảng
        items = [...items, item];

        // Lưu lại mảng vào localStorage
        localStorage.setItem(key, JSON.stringify(items));
    };

    return (
        <div className={cx('product-shop-wrap')} onClick={() => (window.location.href = `/detail/${product.id}`)}>
            <a className={cx('product-img')}>
                <span className={cx('tag')}>Sale!</span>
                <img className={cx('imgb')} src={product.images?.mainImg} />
                <img className={cx('imga')} src={product.images?.subImg[0]} />
                {/* hover img */}
                {/* <img /> */}
                <div className={cx('action-wrap')}>
                    <div className={cx('action-btn')} onClick={() => handleAddToCart(product)}>
                        <img
                            src="https://img.icons8.com/material-outlined/50/shopping-cart--v1.png"
                            alt="shopping-cart--v1"
                        />
                    </div>
                    <div className={cx('action-btn')}>
                        <img src="https://img.icons8.com/material-outlined/50/visible--v1.png" alt="visible--v1" />
                    </div>
                    <div className={cx('action-btn')}>
                        <img src="https://img.icons8.com/material-outlined/50/like--v1.png" alt="like--v1" />
                    </div>
                </div>
            </a>
            <div className={cx('product-title')}>
                <p className={cx('product-name')}>{product?.name}</p>
                <p className={cx('product-price')}>${product?.price}</p>
            </div>
        </div>
    );
}

export default ShopCard;

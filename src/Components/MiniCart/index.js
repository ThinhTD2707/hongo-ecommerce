import classNames from 'classnames/bind';
import styles from './minicart.module.scss';
import Button from '../../Components/Button';
import { useLocalStorage } from '@uidotdev/usehooks';

const cx = classNames.bind(styles);
function MiniCart({}) {
    const [cart, setCart] = useLocalStorage('cart', []);
    return (
        <div className={cx('minicart-container')}>
            <ul className={cx('minicart-list')}>
                {cart?.map((item) => (
                    <li>
                        <div className={cx('minicart-item')}>
                            <div className={cx('minicart-img')}>
                                <img src={item?.images?.mainImg} />
                            </div>
                            <div className={cx('minicart-content')}>
                                <a className={cx('minicart-name')}>{item?.name}</a>
                                <p className={cx('minicart-quantity')}>1 × ${item?.price}</p>
                            </div>
                            <div className={cx('minicart-remove')}>x</div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={cx('minicart-total')}>
                <strong className={cx('')}>Subtotal:</strong>
                <span className={cx('total-price')}>
                    ${cart?.reduce((total, item) => total + parseFloat(item.price), 0)}
                </span>
            </div>
            <div>
                <div style={{ marginBottom: '7px', height: '32px' }}>
                    <Button moveTo="cart" title="VIEW CART" fontSize={'11px'} />
                </div>
                <div style={{ marginBottom: '7px', height: '32px' }}>
                    <Button title="CHECKOUT" fontSize={'11px'} />
                </div>
            </div>
            <div className={cx('minicart-footer')}>Free shipping on all orders over $75</div>
        </div>
    );
}

export default MiniCart;

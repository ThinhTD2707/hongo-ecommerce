import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import Button from '../../Components/Button/index';
import CheckBox from '../../Components/CheckBox/index';
import SelectBox from '../../Components/SelectBox';
import { useMediaQuery } from '@uidotdev/usehooks';
import Input from '../../Components/Input';
const cx = classNames.bind(styles);

function Cart() {
    const [products, setProducts] = useState([]);
    const options = ['Option 1', 'Option 2', 'Option 3'];
    function getLocalStorage() {
        const cart = localStorage.getItem('cart');
        if (cart) {
            setProducts(JSON.parse(cart));
        }
        return [];
    }

    function removeLocalStorage(product) {
        let items = JSON.parse(localStorage.getItem('cart')) || [];

        items = items.filter((item) => item.id !== product.id);

        localStorage.setItem('cart', JSON.stringify(items));

        getLocalStorage();
    }

    useEffect(() => {
        getLocalStorage();
    }, []);

    const [selectedValue, setSelectedValue] = useState('option1');

    const radioOptions = [
        { label: 'Free shipping', value: 'option1' },
        { label: 'Flat rate: <strong>$12.00</strong>', value: 'option2' },
        { label: 'Local pickup', value: 'option3' },
    ];

    return (
        <div className={cx('cart')}>
            <div className={cx('cart-content')}>
                <form>
                    <table className={cx('cart-table')}>
                        <thead>
                            <tr className={cx('table-title')}>
                                <th></th>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr className={cx('table-content')}>
                                    <td className={cx('product-remove')}>
                                        <a onClick={() => removeLocalStorage(product)}>x</a>
                                    </td>
                                    <td className={cx('product-thumnail')}>
                                        <a>
                                            <img src={product.images.mainImg} />
                                        </a>
                                    </td>
                                    <td className={cx('product-name')}>
                                        <a>{product?.name}</a>
                                    </td>
                                    <td className={cx('product-price')}>
                                        <span>${product?.price}</span>
                                    </td>
                                    <td className={cx('product-quantity')}>
                                        <div className={cx('quantity')}>
                                            <input className={cx('quantity-input')} placeholder="0" />
                                            <div className={cx('quantity-btn')}>
                                                <button>+</button>
                                                <button>-</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx('product-subtotal')}>
                                        <span>${product?.price * 1}</span>
                                    </td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan="6" className={cx('table-footer')}>
                                    <div className={cx('coupon')}>
                                        <input placeholder="Coupon Code" />
                                        <button>Apply Coupon</button>
                                    </div>

                                    <button className={cx('cart-footer-btn')}>Update Cart</button>
                                    <button className={cx('cart-footer-btn')}>Empty Cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <div className={cx('cart-checkout')}>
                <h3 className={cx('checkout-tittle')}>Cart totals</h3>
                <table className={cx('checkout-table')}>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td>${products.reduce((total, product) => total + parseInt(product?.price), 0)}</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>
                                <ul className={cx('checkout-shipping')}>
                                    <CheckBox
                                        name="example"
                                        options={radioOptions}
                                        selectedValue={selectedValue}
                                        onChange={(e) => setSelectedValue(e)}
                                        disabled={false} // Đặt true để vô hiệu hóa
                                    />
                                    {/* <li>
                                        <CheckBox title="Free shipping" />
                                    </li>
                                    <li>
                                        <CheckBox title="Flat rate: $12.00" />
                                    </li> */}
                                    <p>Shipping to Vietnam.</p>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="6">
                                <p> Change address</p>
                                <form>
                                    <div style={{ marginBottom: '7px', marginTop: '7px' }}>
                                        <SelectBox options={options} />
                                    </div>
                                    <div style={{ marginBottom: '7px' }}>
                                        <Input placeholder="State/Country" />
                                    </div>
                                    <div style={{ marginBottom: '7px' }}>
                                        <Input placeholder="Town/City" />
                                    </div>
                                    <div style={{ marginBottom: '7px' }}>
                                        <Input placeholder="Postcode/ Zip" />
                                    </div>
                                    <div style={{ marginBottom: '7px' }}>
                                        <Button title="Update" />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>
                                <strong style={{ fontSize: '26px', color: 'black' }}>$3,250.00</strong>
                                <p>(includes $154.76 Tax)</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={cx('cart-btn')}>
                    <Button />
                </div>
            </div>
        </div>
    );
}

export default Cart;

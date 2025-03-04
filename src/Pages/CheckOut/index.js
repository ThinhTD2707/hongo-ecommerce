import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './checkout.module.scss';
import Input from '../../Components/Input/index';
import CheckBox from '../../Components/CheckBox/index';
import Button from '../../Components/Button/index';
import { useLocalStorage } from '@uidotdev/usehooks';

const cx = classNames.bind(styles);
function CheckOut() {
    const [value, setValue] = useLocalStorage('cart', []);
    const options = [
        { label: 'Free shipping', value: 'option1' },
        { label: 'Flat rate: <strong>$12.00</strong>', value: 'option2' },
        { label: 'Local pickup', value: 'option3' },
    ];
    const paymentOptions = [
        {
            label: 'Direct bank transfer',
            value: 'option1',
            detail: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
        },
        {
            label: 'Check payments',
            value: 'option2',
            detail: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
        },
        { label: 'Cash on delivery', value: 'option3', detail: 'Pay with cash upon delivery.' },
        {
            label: 'PayPal',
            value: 'option4',
            detail: 'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.',
        },
    ];
    const [selectedValue, setSelectedValue] = useState('option1');
    const [selectedPayment, setSelectedPayment] = useState('option1');

    return (
        <div className={cx('checkout-container')}>
            <div className={cx('bill-container')}>
                <form className={cx('bill-form')}>
                    <h3 className={cx('checkout-title')}>Billing details</h3>
                    <div className={cx('bill-firstname', 'first-form')}>
                        <Input inputTitle="First name" placeholder="fisrt name" />
                    </div>
                    <div className={cx('bill-lastname', 'first-form')}>
                        <Input inputTitle="Last name" placeholder="" />
                    </div>
                    <div className={cx('bill-companyname')}>
                        <Input inputTitle="Company name (optional)" placeholder="" />
                    </div>
                    <div>
                        <Input inputTitle="Country / Region *" placeholder="Vn" />
                    </div>
                    <div>
                        <Input inputTitle="Street address *" placeholder="House number or something" />
                    </div>
                    <div>
                        <Input inputTitle="" placeholder="Apartment, home, unit ..." />
                    </div>
                    <div>
                        <Input inputTitle="Postcode / ZIP (optional)" placeholder="" />
                    </div>
                    <div>
                        <Input inputTitle="Town / City *" placeholder="" />
                    </div>
                    <div>
                        <Input inputTitle="Phone *" placeholder="" />
                    </div>
                    <div>
                        <Input inputTitle="Email address *" placeholder="" />
                    </div>
                    <div>
                        <Input
                            inputTitle="Order notes (optional)"
                            placeholder="Notes about your order, e.g. special notes for delivery."
                        />
                    </div>
                </form>
            </div>
            <div className={cx('checkout-sidebar')}>
                <h3 className={cx('checkout-title')}>Your order</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Totals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value?.map((cart) => (
                            <tr className={cx('checkout-product')}>
                                <td className={cx('checkout-name')}>{cart?.name} × 1</td>
                                <td className={cx('checkout-price')}>${cart?.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Subtotal</th>
                            <td>
                                $
                                {value.reduce(() => {
                                    return value.reduce((total, product) => total + parseInt(product?.price), 0);
                                })}
                            </td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>
                                <CheckBox
                                    name="ship-method"
                                    options={options}
                                    selectedValue={selectedValue}
                                    onChange={(e) => setSelectedValue(e)}
                                    disabled={false}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <th>
                                <p className={cx('price')}>$3,262.00</p>
                                <p>
                                    (includes <strong>$156.76</strong> Tax estimated for Vietnam)
                                </p>
                            </th>
                        </tr>
                    </tfoot>
                </table>
                <div className={cx('checkout-payment')}>
                    <CheckBox
                        name="payment-method"
                        options={paymentOptions}
                        selectedValue={selectedPayment}
                        onChange={(e) => setSelectedPayment(e)}
                        disabled={false}
                    />
                </div>
                <div className={cx('checkout-place-order')}>
                    <p className={cx('title')}>
                        Your personal data will be used to process your order, support your experience throughout this
                        website, and for other purposes described in our privacy policy.
                    </p>
                    <CheckBox title="I have read and agree to the website terms and conditions *" />
                    <div className={cx('order-btn')}>
                        <Button title="Place Order" />
                    </div>
                    <div className={cx('checkout-alert')}>
                        <p>
                            <strong>Info!</strong> This is a demo store for hongo theme purposes — no orders shall be
                            fulfilled.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;

import classNames from 'classnames/bind';
import style from './header.module.scss';
import hongo_logo from '../../../asset/hongo/logo.webp';
import MiniCart from '../../../Components/MiniCart';
const cx = classNames.bind(style);
function Header({ onSearch }) {
    return (
        <div className={cx('header')}>
            <div className={cx('left')}>
                <a href="/">
                    <img className={cx('logo')} src={hongo_logo} />
                </a>
            </div>
            <div className={cx('center')}>
                <ul className={cx('center-list')}>
                    <li className={cx('center-item')}>
                        <a href="/home">Home</a>
                        <i></i>
                    </li>
                    <li className={cx('center-item')}>
                        <a href="/home">Shop</a>
                    </li>
                    <li className={cx('center-item')}>
                        <a href="/home">Sale</a>
                    </li>
                    <li className={cx('center-item')}>
                        <a href="/home">Pages</a>
                    </li>
                    <li className={cx('center-item')}>
                        <a href="/home">Blog</a>
                    </li>
                    <li className={cx('center-item')}>
                        <a href="/home">Element</a>
                    </li>
                    <li className={cx('center-item')}>
                        <a href="/home">Feature</a>
                    </li>
                </ul>
            </div>
            <div className={cx('right')}>
                <div className={cx('right-wraper')}>
                    {/* co the viet component o day (maybe) */}
                    <div onClick={onSearch} className={cx('right-item')}>
                        <a>
                            <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" />
                        </a>
                    </div>
                    <div className={cx('right-item')}>
                        <a>
                            <img src="https://img.icons8.com/?size=100&id=12438&format=png&color=000000" alt="user" />
                        </a>
                    </div>
                    <div className={cx('right-item')}>
                        <a>
                            <img
                                src="https://img.icons8.com/?size=100&id=43772&format=png&color=000000"
                                alt="like--v1"
                            />
                        </a>
                    </div>
                    <div className={cx('right-item', 'cart-btn')} style={{ position: 'relative' }}>
                        <a href="/cart">
                            <img
                                src="https://img.icons8.com/?size=100&id=43866&format=png&color=000000"
                                alt="shopping-cart--v1"
                            />
                        </a>
                        <div className={cx('minicart')}>
                            <MiniCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

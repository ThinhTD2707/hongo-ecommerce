import classNames from 'classnames/bind';
import styles from './footer.module.scss';
import insta1 from '../../../asset/home/infa-01.jpg.webp';
import insta2 from '../../../asset/home/infa-02.jpg.webp';
import insta3 from '../../../asset/home/infa-03.jpg.webp';
import insta4 from '../../../asset/home/infa-04.jpg.webp';

const cx = classNames.bind(styles);
const categories = [
    { title: 'Women collection', link: '' },
    { title: 'Men collection', link: '' },
    { title: 'Child collection', link: '' },
    { title: 'Accessories', link: '' },
    { title: 'Leather shoes', link: '' },
];
function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer_top')}>
                <div className={cx('footer_email')}>
                    <div className={cx('footer_title')}>Last Chance To Win Our Discount!</div>
                    <form className={cx('footer_form')}>
                        <input type="text" placeholder="Enter your email " />
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className={cx('footer_social')}>
                    <div className={cx('footer_title')}>On Social Networks</div>
                    <div className={cx('footer_social-icon')}>
                        <ul>
                            <li>
                                <img
                                    src="https://img.icons8.com/material-two-tone/24/facebook-f--v2.png"
                                    alt="facebook-f--v2"
                                    style={{ filter: 'invert(100%)' }}
                                />
                            </li>
                            <li>
                                <img
                                    src="https://img.icons8.com/material-outlined/50/twitterx--v2.png"
                                    alt="twitterx--v2"
                                    style={{ filter: 'invert(100%)' }}
                                />
                            </li>
                            <li>
                                <img
                                    src="https://img.icons8.com/material-outlined/50/instagram-new--v1.png"
                                    alt="instagram-new--v1"
                                    style={{ filter: 'invert(100%)' }}
                                />
                            </li>
                            <li>
                                <img
                                    src="https://img.icons8.com/material-outlined/50/pinterest--v1.png"
                                    alt="pinterest--v1"
                                    style={{ filter: 'invert(100%)' }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('footer_mid')}>
                <div className={cx('footer_mid-content')}>
                    <div className={cx('footer_mid-content-item')}>
                        <h3 className={cx('title')}>HONGO</h3>
                        <p className={cx('body')}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum is
                            simply dummy text of industry lorem ipsum is simply dummy typesetting text.
                        </p>
                    </div>
                    <div className={cx('footer_mid-content-item')}>
                        <h3 className={cx('title')}>HONGO</h3>
                        <ul className={cx('footer_mid-content-list')}>
                            {categories.map((category, index) => (
                                <li className={cx('body')} key={index}>
                                    {category.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('footer_mid-content-item')}>
                        <h3 className={cx('title')}>HONGO</h3>
                        <ul className={cx('footer_mid-content-list')}>
                            {categories.map((category, index) => (
                                <li className={cx('body')} key={index}>
                                    {category.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('footer_mid-content-item')}>
                        <h3 className={cx('title')}>HONGO</h3>
                        <ul className={cx('footer_mid-content-list')}>
                            {categories.map((category, index) => (
                                <li className={cx('body')} key={index}>
                                    {category.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('footer_mid-content-item', 'social')}>
                        <h3 className={cx('title')}>Follow us on Instagram</h3>
                        <ul className={cx('footer_mid-content-follow')}>
                            <li>
                                <img src={insta1} />
                            </li>
                            <li>
                                {' '}
                                <img src={insta2} />
                            </li>
                            <li>
                                <img src={insta3} />
                            </li>
                            <li>
                                <img src={insta4} />
                            </li>
                            <li>
                                <img src={insta4} />
                            </li>
                            <li>
                                <img src={insta4} />
                            </li>
                            <li>
                                <img src={insta4} />
                            </li>
                            <li>
                                <img src={insta4} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('footer_bot')}></div>
        </footer>
    );
}

export default Footer;

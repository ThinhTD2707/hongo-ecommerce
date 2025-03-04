import classNames from 'classnames/bind';
import styles from './home.module.scss';
import HomeSlider from '../../Components/HomeSlider';
import banner1 from '../../asset/home/graphic-banner-1.jpg.webp';
import banner2 from '../../asset/home/graphic-banner-2-450x450.jpg.webp';
import banner3 from '../../asset/home/graphic-banner-3-450x450.jpg.webp';
import banner4 from '../../asset/home/graphic-banner-4.jpg.webp';
import Card from '../../Components/Card';
import BlogCard from '../../Components/BlogCard';
import Toast from '../../Components/Toast';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('home-wrapper')}>
            {/* <Toast /> */}
            <section className={cx('home-slider')}>
                <div className={cx('home-slider_item')}>
                    <HomeSlider />
                </div>
            </section>
            <section className={cx('hongo-banner')}>
                <ul className={cx('hongo-banner_list')}>
                    <li className={cx('hongo-banner_item1')}>
                        <img src={banner1} />
                    </li>
                    <li className={cx('hongo-banner_item2')}>
                        <img src={banner4} />
                    </li>
                    <li className={cx('hongo-banner_item3')}>
                        <img src={banner2} />
                    </li>
                    <li className={cx('hongo-banner_item4')}>
                        <img src={banner3} />
                    </li>
                </ul>
            </section>
            <section>
                <div className={cx('home-featured')}>
                    <div className={cx('home-featured_title')}>
                        <div className={cx('seperator')}></div>
                        <h2>Great Selection</h2>
                        <p>
                            Follow the most popular trends and get <br /> exclusive items from hongo shop
                        </p>
                    </div>
                    <div>
                        <div className={cx('home-featured_item')}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={cx('home-featured_title')}>
                    <div className={cx('seperator')}></div>
                    <h2>Latest Blogs</h2>
                    <p>
                        Way is there to get clothing you’re sure <br /> to love than by making it your know
                    </p>
                </div>
                <div className={cx('home-featured_item')}>
                    <BlogCard
                        blogImg={
                            'https://hongo.themezaa.com/wp-content/uploads/2019/03/blog-listing-img106-578x771.jpg.webp'
                        }
                        title={'Adventure'}
                        content={'I see that the fashion wears out more apparel'}
                        date={'01 March 2019'}
                        author={'By Alexis Richards'}
                    />
                    <BlogCard
                        blogImg={
                            'https://hongo.themezaa.com/wp-content/uploads/2019/03/blog-listing-img96-578x771.jpg.webp'
                        }
                        title={'Adventure'}
                        content={'Gucci has design and contemporary lifestyle'}
                        date={'01 March 2019'}
                        author={'By Alexis Richards'}
                    />
                    <BlogCard
                        blogImg={
                            'https://hongo.themezaa.com/wp-content/uploads/2019/03/blog-listing-img107-578x771.jpg.webp'
                        }
                        title={'Adventure'}
                        content={'A fashion is nothing but an induced epidemic'}
                        date={'01 March 2019'}
                        author={'By Alexis Richards'}
                    />
                    <BlogCard
                        blogImg={
                            'https://hongo.themezaa.com/wp-content/uploads/2019/03/blog-listing-img108-578x771.jpg.webp'
                        }
                        title={'Adventure'}
                        content={'A designer is only as good as the star who wears'}
                        date={'01 March 2019'}
                        author={'By Alexis Richards'}
                    />
                </div>
            </section>
            <section>
                <div className={cx('featured_box-wrapper')}>
                    <div className={cx('featured_box')}>
                        <div className={cx('featured_box-icon')}>
                            <img src="https://img.icons8.com/material-outlined/50/globe--v1.png" alt="globe--v1" />
                        </div>
                        <div className={cx('featured_box-text')}>FREE STANDARD SHIPPING</div>
                    </div>
                    <div className={cx('featured_box')}>
                        <div className={cx('featured_box-icon')}>
                            <img src="https://img.icons8.com/material-outlined/50/globe--v1.png" alt="globe--v1" />
                        </div>
                        <div className={cx('featured_box-text')}>100% MONEY BACK</div>
                    </div>
                    <div className={cx('featured_box')}>
                        <div className={cx('featured_box-icon')}>
                            <img src="https://img.icons8.com/material-outlined/50/globe--v1.png" alt="globe--v1" />
                        </div>
                        <div className={cx('featured_box-text')}>GIFTS FOR MEMBERS</div>
                    </div>
                    <div className={cx('featured_box')}>
                        <div className={cx('featured_box-icon')}>
                            <img src="https://img.icons8.com/material-outlined/50/globe--v1.png" alt="globe--v1" />
                        </div>
                        <div className={cx('featured_box-text')}>BUYER PROTECTION</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

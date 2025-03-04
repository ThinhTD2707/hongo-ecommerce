import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './detail.module.scss';
import Card from '../../Components/Card/index';
import img from '../../asset/card/blog-listing-img106-578x771.jpg.webp';
import { useParams } from 'react-router-dom';
import dataProduct from '../../data/Product';
const cx = classNames.bind(styles);
function Detail() {
    const [tabs, setTabs] = React.useState(0);
    const [item, setItem] = React.useState();
    const { id } = useParams();

    useEffect(() => {
        const findProduct = dataProduct.find((product) => product.id === id);
        setItem(findProduct);
    }, []);

    return (
        <div className={cx('detail')}>
            <div className={cx('detail-content')}>
                <div className={cx('content-image')}>
                    <div className={cx('content-sub')}>
                        {item?.images?.subImg.map((img, index) => (
                            <img src={img} alt="img" />
                        ))}
                    </div>
                    <div className={cx('content-main')}>
                        <img src={item?.images?.mainImg} alt="img" />
                    </div>
                </div>
                <div className={cx('content-desc')}>
                    <div className={cx('breadcumb')}>
                        <div className={cx('breadcumb-item')}>Home</div>
                        <div className={cx('breadcumb-item')}>Home</div>
                        <div className={cx('breadcumb-item')}>Home</div>
                    </div>
                    <div className={cx('item-summary')}>
                        <div className={cx('item-summary_left')}>
                            <div className={cx('item-name')}>{item?.name}</div>
                            <div className={cx('item-price')}>$20.00 – $40.00</div>
                        </div>
                        <div className={cx('item-summary_right')}>
                            <div className={cx('item-code')}>
                                <span>SKU</span>: 492648
                            </div>
                        </div>
                    </div>
                    <div className={cx('short-desc')}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                    <form className={cx('form-cart')}>
                        <div className={cx('form-wrap')}>
                            <label className={cx('form-title')}>Color:</label>
                            <div style={{ backgroundColor: '#363636' }} className={cx('pick-color')}>
                                <img
                                    src={'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'}
                                    alt="img"
                                />
                            </div>
                            <div style={{ backgroundColor: '#657fa8' }} className={cx('pick-color')}>
                                {/* <img
                                    src={'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'}
                                    alt="img"
                                /> */}
                            </div>
                        </div>
                        <div className={cx('form-wrap')}>
                            <label className={cx('form-title')}>item:</label>
                            <div className={cx('pick-size', { active: true })}>S</div>
                            <div className={cx('pick-size')}>M</div>
                            <div className={cx('pick-size')}>L</div>
                            <div className={cx('pick-size')}>XL</div>
                        </div>
                        <div className={cx('form-variation')}>
                            <div className={cx('quantity')}>
                                <input className={cx('quantity-input')} placeholder="0" />
                                <div className={cx('quantity-btn')}>
                                    <button>+</button>
                                    <button>-</button>
                                </div>
                            </div>
                            <div className={cx('button-addtocard')}>Add to cart</div>
                        </div>
                        <div className={cx('wishlist')}>
                            <div className={cx('wishlist-icon')}>
                                <img
                                    src={'https://img.icons8.com/?size=100&id=59805&format=png&color=000000'}
                                    alt="img"
                                />
                            </div>
                            <span>Add to Wishlist</span>
                        </div>
                    </form>
                    <div className={cx('product-meta')}>
                        <div className={cx('category')}>
                            <span>
                                Categories:
                                <ul>
                                    <span className={cx('category-item')} href="#">
                                        Jacket collection,
                                    </span>
                                    <span className={cx('category-item')} href="#">
                                        Modern design,
                                    </span>
                                    <span className={cx('category-item')} href="#">
                                        Recent products,
                                    </span>
                                    <span className={cx('category-item')} href="#">
                                        Recent products,
                                    </span>
                                    <span className={cx('category-item')} href="#">
                                        Recent products,
                                    </span>
                                </ul>
                            </span>
                            <span>
                                Tags:
                                <ul>
                                    <span className={cx('category-item')} href="#">
                                        Jacket collection,
                                    </span>
                                    <span className={cx('category-item')} href="#">
                                        Modern design,
                                    </span>
                                </ul>
                            </span>
                        </div>
                        <div className={cx('social-media')}>
                            <div>
                                <img
                                    src="https://img.icons8.com/material-two-tone/16/facebook-f--v2.png"
                                    alt="facebook-f--v2"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://img.icons8.com/material-outlined/16/twitterx--v2.png"
                                    alt="twitterx--v2"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://img.icons8.com/material-outlined/16/instagram-new--v1.png"
                                    alt="instagram-new--v1"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://img.icons8.com/material-outlined/16/pinterest--v1.png"
                                    alt="pinterest--v1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('detail-desc')}>
                <ul className={cx('detail-tabs')}>
                    <li onClick={() => setTabs(0)}>
                        <a>Description</a>
                    </li>
                    <li onClick={() => setTabs(1)}>
                        <a>Additional information</a>
                    </li>
                    <li onClick={() => setTabs(2)}>
                        <a>Reviews (0)</a>
                    </li>
                </ul>
                <div className={cx('detail-desc_content')}>
                    {tabs == 0 && (
                        <>
                            <div className={cx('content')}>
                                <div className={cx('content-main')}>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s
                                        standard dummy text ever since. Lorem Ipsum is simply dummy text. Lorem Ipsum is
                                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy
                                        text ever since. Lorem Ipsum is simply dummy text.
                                    </p>
                                </div>
                                <ul className={cx('content-list')}>
                                    <li className={cx('content-item')}>
                                        <span>Made from soft yet durable 100% organic cotton twill</span>
                                    </li>
                                    <li className={cx('content-item')}>
                                        <span>Front and back yoke seams allow a full range of shoulder motion</span>
                                    </li>
                                    <li className={cx('content-item')}>
                                        <span>Comfortable nylon-bound elastic cuffs seal in warmth</span>
                                    </li>
                                    <li className={cx('content-item')}>
                                        <span>Hem adjusts by pulling cord in handwarmer pockets and releases</span>
                                    </li>
                                    <li className={cx('content-item')}>
                                        <span>Interior storm flap and zipper garage at chin for comfort</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('img')}>
                                <img
                                    src="https://hongo.themezaa.com/wp-content/uploads/2019/04/classic-product-details-v3.jpg.webp"
                                    alt="img"
                                />
                            </div>
                        </>
                    )}
                    {tabs == 1 && (
                        <table className={cx('table')}>
                            <tr>
                                <th>Color</th>
                                <td>Black, Blue</td>
                            </tr>
                            <tr>
                                <th>Size</th>
                                <td>S, M, L, XL</td>
                            </tr>
                            <tr>
                                <th>Style/Type</th>
                                <td>Sports, Formal</td>
                            </tr>
                            <tr>
                                <th>Lining</th>
                                <td>2.2-oz 100% polyester taffeta with a DWR finish</td>
                            </tr>
                            <tr>
                                <th>Material</th>
                                <td>Lather, Cotton, Silk </td>
                            </tr>
                        </table>
                    )}
                    {tabs == 2 && (
                        <div className={cx('review')}>
                            <div>
                                <p>There are no reviews yet</p>
                                <span
                                    style={{
                                        fontWeight: '600',
                                        color: '#000',
                                        fontSize: '14px',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Be the first to review “Crewneck Sweatshirt”
                                </span>
                            </div>
                            <form className={cx('review-form')}>
                                <p className={cx('note')}>
                                    Your email address will not be published. Required fields are marked *
                                </p>
                                <div className={cx('form-name')}>
                                    <label className={cx('form-label')}>Name *</label>
                                    <input type="text" required />
                                </div>
                                <div className={cx('form-email')}>
                                    <label className={cx('form-label')}>Email *</label>
                                    <input type="text" required />
                                </div>
                                <div className={cx('ratting')}>
                                    <label>Your rating</label>
                                    <div>stars here**</div>
                                </div>
                                <div>
                                    <label className={cx('form-label')}>Your review *</label>
                                    <textarea required />
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('detail-recomend')}>
                <h3 className={cx('detail-recomend-title')}>You may also like</h3>
                <div className={cx('detail-list')}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Detail;

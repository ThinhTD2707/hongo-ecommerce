import classNames from 'classnames/bind';
import styles from './homeSlider.module.scss';
import slider02 from '../../asset/home/home-page-fashion-slider-02.jpg';
const cx = classNames.bind(styles);

function HomeSlider() {
    return (
        <div className={cx('homeSlider-container')}>
            <div className={cx('homeSlider-content')}>
                <div className={cx('sub-font')}>2019 NEW COLLECTION</div>
                <div className={cx('main-font')}>
                    Designer <br /> swimwear
                </div>
                <p className={cx('cap-font')}>Fashion should be a form of escapism and not a form of imprisonment </p>
                <a className={cx('btn-font')}>
                    <span>SHOP COLLECTION</span>
                </a>
            </div>
        </div>
    );
}

export default HomeSlider;

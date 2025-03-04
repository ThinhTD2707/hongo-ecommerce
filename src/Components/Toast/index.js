import classNames from 'classnames/bind';
import styles from './toast.module.scss';
const cx = classNames.bind(styles);

function Toast({ content, type, ...props }) {
    return (
        <div className={cx('toast-wrap')}>
            <div className={cx('toast-content')}>Easy toast nè!!</div>
            <button className={cx('toast-btn')}>x</button>
        </div>
    );
}

export default Toast;

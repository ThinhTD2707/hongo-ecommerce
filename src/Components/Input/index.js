import classNames from 'classnames/bind';
import styles from './input.module.scss';
const cx = classNames.bind(styles);
function Input({ inputTitle = '', placeholder = 'place holder ne`' }) {
    return (
        <div className={cx('input-container')}>
            {inputTitle && <label className={cx('input-title')}>{inputTitle}</label>}
            <input className={cx('input-form')} placeholder={placeholder} />
        </div>
    );
}

export default Input;

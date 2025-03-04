import classNames from 'classnames/bind';
import styles from './selectbox.module.scss';

const cx = classNames.bind(styles);
function SelectBox({ options = [], placeholder, onChange }) {
    console.log(options);
    return (
        <select className={cx('option-wrap')}>
            {options.map((element) => (
                <option className={cx('option')} key={element} value={element}>
                    {element}
                </option>
            ))}
        </select>
    );
}

export default SelectBox;

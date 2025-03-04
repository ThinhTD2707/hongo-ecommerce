import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({ title = 'Button Component', fontSize = '16px', moveTo }) {
    const navigate = useNavigate();
    return (
        <div className={cx('button-container')} onClick={() => moveTo && navigate(`/${moveTo}`)}>
            <p style={{ fontSize: fontSize }} className={cx('button-title')}>
                {title}
            </p>
        </div>
    );
}

export default Button;

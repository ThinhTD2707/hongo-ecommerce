import { useState } from 'react';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import products from '../../data/Product';
import Search from '../../Components/Search';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [togle, setTogle] = useState(false);

    const onTogle = () => {
        setTogle(!togle);
    };

    return (
        <div className="">
            {/* <Header onClick={() => setTogle(!togle)} /> */}
            {togle && <Search onClose={onTogle} />}
            <Header onSearch={onTogle} />
            <main className="asd">
                <div>{children}</div>
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

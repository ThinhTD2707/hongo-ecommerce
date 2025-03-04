import classNames from 'classnames/bind';
import styles from './blogCard.module.scss';
import blogImg from '../../asset/card/blog-listing-img106-578x771.jpg.webp';
const cx = classNames.bind(styles);
function BlogCard({ blogImg, title, content, date, author }) {
    return (
        <div className={cx('blog')}>
            <div className={cx('blog-img')}>
                <img src={blogImg} />
            </div>
            <div className={cx('blog_content')}>
                <div className={cx('top_content')}>
                    <span className={cx('title')}>
                        {title}
                        <br />
                    </span>
                    <span className={cx('content')}>{content}</span>
                </div>
                <div className={cx('bottom_content')}>
                    <span>{date}</span>
                    <span className={cx('space')}>|</span>
                    <span>By {author}</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;

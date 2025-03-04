import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './checkbox.module.scss';
const cx = classNames.bind(styles);

function CheckBox({ name = '', options = [], onChange, selectedValue, disabled }) {
    console.log(options);
    // const options = [
    //     { label: 'Free shipping', value: 'option1' },
    //     { label: 'Flat rate: <strong>$12.00</strong>', value: 'option2' },
    //     { label: 'Local pickup', value: 'option3' },
    // ];

    return (
        <div className={cx('radio-group')}>
            {options?.map((option) => (
                <>
                    <label key={option.value} className={cx(`radio-option${disabled ? 'disabled' : ''}`)}>
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={() => onChange(option.value)}
                            disabled={disabled}
                            className={cx('radio-input')}
                        />
                        <span className={cx('radio-label')} dangerouslySetInnerHTML={{ __html: option.label }}></span>
                    </label>
                    {selectedValue === option.value && option?.detail && (
                        <div className={cx('payment-detail')} dangerouslySetInnerHTML={{ __html: option.detail }}></div>
                    )}
                </>
            ))}
        </div>
    );
}

export default CheckBox;

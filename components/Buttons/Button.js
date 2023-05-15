import React from 'react';
import styles from "./styles.module.css"

const Button = ({className, handleClick, text, data}) => {

    return (
        <button className={`${styles.defaultButton} ${className}`} data-attr={data} onClick={(e)=> handleClick(e)}>
            {text}
        </button>
    );
}
export default Button;

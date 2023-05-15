import React from 'react';
import styles from "./styles.module.css"

const ImageTag = ({src}) => {
    


    return (
        <img className={styles.imgTag} src={src}/>
    );
}

export default ImageTag;

import { Col, Image, Row } from 'react-bootstrap';
import styles from './cv.module.css'
import Link from 'next/link';


const cv = ()=>{
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.content} d-flex justify-content-center`}>
                <Image src='/cv.jpg' className={`${styles.image}`}></Image>
            </div>
        </div>
    );
}

export default cv
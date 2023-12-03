import { Col, Image, Row } from 'react-bootstrap';
import styles from './cv.module.css'
import Link from 'next/link';


const cv = ()=>{
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.content}`}>
                <Image src='/cv.jpg' className={`${styles.image}`}></Image>
            </div>
        </div>
    );
}

export default cv
import { Col, Image, Row } from "react-bootstrap";
import styles from "./money-tracker.module.css";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "react-icons/ri";
import { IoIosBackspace } from "react-icons/io";
import Link from "next/link";
import { useEffect } from "react";

const moneyTracker = () => {
    useEffect(()=>{
        scroll()
    },[])
    const scroll = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.header}`}>
                    <h1><u>Money Tracker</u></h1>
                    <Link href="/portfolio" className={`${styles.underline}`}>
                    <button className={`${styles.backButton}`}>Back<IoIosBackspace /></button>
                    </Link>
                </div>
                <h4>This website is created so that you can record every expense and income that occurs on a daily basis</h4>
                <p><i>"It's still mid-month, but my money is already gone"</i> Money Tracker is the perfect app for you.</p>
                <Row>
                    <Col md={"6"} className={`${styles.container1}`}>
                        <ol>
                            <li className={`${styles.li}`}>CRUD (Create, Read, Update, Delete).</li>
                            <p>You can easily edit transactions that you have recorded.</p>
                            <li className={`${styles.li}`}>Transaction visualization with graphs</li>
                            <p>There is a monthly filter feature to make it easier if you want to view transactions that occurred during a specific month.</p>
                            <li className={`${styles.li}`}>Manage your finances with multiple wallets</li>
                            <p>If you want to allocate your transactions across more than one wallet, Transaction Monitor can handle it.</p>
                        </ol>
                    </Col>
                    <Col md={"6"}>
                        <p>Feature :</p>
                        <ul>
                            <li>Log-in Feature using JSON Web Tokens</li>
                            <li>Single Page Application</li>
                            <li>MVCS Design Pattern</li>
                            <li>CI/CD</li>
                            <li>API Documentation</li>
                        </ul>
                        <div className={`${styles.containerLink}`}>
                        <p className={`${styles.link}`}><a href="https://griyadandelion.space" target="_blank"><RiArrowRightDoubleLine />Try it<RiArrowLeftDoubleLine /></a></p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={`${styles.content}`}>
                <h1>
                    Gallery
                </h1>
                <div className={`${styles.galleryContainer}`}>
                    <Image src="/montrack/desktop1.PNG" className={`${styles.galleryImage}`}></Image>
                    <Image src="/montrack/desktop2.PNG" className={`${styles.galleryImage}`}></Image>
                    <Image src="/montrack/desktop3.PNG" className={`${styles.galleryImage}`}></Image>
                    <Image src="/montrack/desktop4.PNG" className={`${styles.galleryImage}`}></Image>
                    <Image src="/montrack/hp1.PNG" className={`${styles.galleryImagePhone}`}></Image>
                    <Image src="/montrack/hp2.PNG" className={`${styles.galleryImagePhone}`}></Image>
                    <Image src="/montrack/hp3.PNG" className={`${styles.galleryImagePhone}`}></Image>
                    <Image src="/montrack/hp4.PNG" className={`${styles.galleryImagePhone}`}></Image>
                </div>
            </div>
        </div>
    );
};

export default moneyTracker;

import { Col, Row } from "react-bootstrap";
import styles from "./portfolio.module.css";
import Image from 'react-bootstrap/Image';
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";


const portfolio = () => {

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.content}`}>
                <h1>Jimboz Inventory Management System</h1>
                <Row>
                    <Col md={"4"} className={`${styles.thumbnailContainer}`}>
                        <Image src="/Jimboz/thumbnail.png" className={`${styles.thumbnail}`}></Image>
                    </Col>
                    <Col md={"8"}>
                        <h4>Jimboz is a web application designed to assist you in efficiently managing and showcasing your inventory.</h4>
                        <p>If you're in the retail business, Jimboz is the perfect solution for you, offering a range of features:</p>
                        <ol>
                            <li>CRUD (Create, Read, Update, Delete).</li>
                            <li>Add Your Promotional Discounts</li>
                            <li>Responsive Design</li>
                        </ol>
                        <Link href={'/portfolio/jimboz'}>
                        <button className={`${styles.myButton}`}>Details <FaArrowRight /></button>
                        </Link>
                        <p><i>Technologies :</i></p>
                        <div className={`${styles.technologies}`}>
                            <p className={`${styles.technologiesList}`}>JavaScript</p>
                            <p className={`${styles.technologiesList}`}>Bootstrap</p>
                            <p className={`${styles.technologiesList}`}>Sequelize</p>
                            <p className={`${styles.technologiesList}`}>EJS</p>
                            <p className={`${styles.technologiesList}`}>JWT</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={`${styles.content}`}>
                <h1>Money Tracker</h1>
                <Row>
                    <Col md={"4"} className={`${styles.thumbnailContainer}`}>
                        <Image src="/montrack/thumbnail.png" className={`${styles.thumbnail}`}></Image>
                    </Col>
                    <Col md={"8"}>
                        <h4>This website is created so that you can record every expense and income that occurs on a daily basis</h4>
                        <p><i>"It's still mid-month, but my money is already gone. What happened?"</i> Money Tracker is the perfect app for you.</p>
                        <ol>
                            <li>Easy to use.</li>
                            <li>Transaction visualization with graphs</li>
                            <li>Manage your finances with multiple wallets</li>
                        </ol>
                        <Link href={'/portfolio/money-tracker'}>
                        <button className={`${styles.myButton}`}>Details <FaArrowRight /></button>
                        </Link>
                        <p><i>Technologies :</i></p>
                        <div className={`${styles.technologies}`}>
                            <p className={`${styles.technologiesList}`}>JavaScript</p>
                            <p className={`${styles.technologiesList}`}>NextJS</p>
                            <p className={`${styles.technologiesList}`}>Bootstrap</p>
                            <p className={`${styles.technologiesList}`}>Jest</p>
                            <p className={`${styles.technologiesList}`}>JWT</p>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default portfolio;

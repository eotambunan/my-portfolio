import { Button, Col, Row } from "react-bootstrap";
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
                    <Col md={"4"}>
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
                        <Button>Details <FaArrowRight /></Button>
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
        </div>
    );
};

export default portfolio;

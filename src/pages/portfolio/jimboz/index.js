import { Col, Image, Row } from "react-bootstrap";
import styles from "./jimboz.module.css";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "react-icons/ri";
import { IoIosBackspace } from "react-icons/io";
import Link from "next/link";

const jimboz = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.content}`}>
            <div className={`${styles.header}`}>
                    <h1><u>Jimboz</u></h1>
                    <Link href="/portfolio" className={`${styles.underline}`}>
                    <button className={`${styles.backButton}`}>Back<IoIosBackspace /></button>
                    </Link>
                </div>
                <h4>Jimboz is a web application designed to assist you in efficiently managing and showcasing your inventory.</h4>
                <p>If you're in the retail business, Jimboz is the perfect solution for you, offering a range of features:</p>
                <Row>
                    <Col md={"6"} className={`${styles.container1}`}>
                        <ol>
                            <li className={`${styles.li}`}>CRUD (Create, Read, Update, Delete).</li>
                            <p>You can easily create, view, update, and delete your inventory items, making it a breeze to keep your stock up-to-date.</p>
                            <li className={`${styles.li}`}>Add Your Promotional Discounts</li>
                            <p>Jimboz allows you to apply discounts and promotions seamlessly. You can enhance your sales strategy by offering special deals to your customers.</p>
                            <li className={`${styles.li}`}>Responsive Design</li>
                            <p>With a responsive design, Jimboz ensures that your customers can view the availability of products, promotions, and prices of the products you sell on various devices, from computers to smartphones.</p>
                        </ol>
                    </Col>
                    <Col md={"6"}>
                        <p>Feature :</p>
                        <ul>
                            <li>Log-in Feature using JSON Web Tokens</li>
                            <li>Relational Database</li>
                            <li>MVC design pattern</li>
                            <li>Multer to upload product image</li>
                        </ul>
                        <div className={`${styles.containerLink}`}>
                        <p className={`${styles.link}`}><a href="https://github.com/boliyana1212/2300985_37_eva_IMS_Gold" target="_blank"><RiArrowRightDoubleLine />Try it<RiArrowLeftDoubleLine /></a></p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={`${styles.content}`}>
                <h1>
                    Gallery
                </h1>
                <div className={`${styles.galleryContainer}`}>
                    <Image src="/jimboz/desktop1.jpg" className={`${styles.galleryImage}`}></Image>
                    <Image src="/jimboz/desktop2.png" className={`${styles.galleryImage}`}></Image>
                    <Image src="/jimboz/desktop3.png" className={`${styles.galleryImage}`}></Image>
                    <Image src="/jimboz/desktop4.png" className={`${styles.galleryImage}`}></Image>
                    <Image src="/jimboz/hp3.png" className={`${styles.galleryImagePhone}`}></Image>
                    <Image src="/jimboz/hp2.png" className={`${styles.galleryImagePhone}`}></Image>
                    <Image src="/jimboz/hp1.png" className={`${styles.galleryImagePhone}`}></Image>
                    <Image src="/jimboz/hp4.png" className={`${styles.galleryImagePhone}`}></Image>
                </div>
            </div>
        </div>
    );
};

export default jimboz;

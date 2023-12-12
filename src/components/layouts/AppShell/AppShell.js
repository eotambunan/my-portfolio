import { Col, Row } from "react-bootstrap";
import styles from "./appshell.module.css";
const { default: Sidebar } = require("../Sidebar/Sidebar");
import Point from '@/components/elements/Point'

const AppShell = ({ children }) => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.background}`}></div>
            <Sidebar />
            <Point styles={`${styles.point}`}/>
            <Row className={styles.row}>
                <Col className={styles.children} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 2 }} sm={{ span: 12, offset: 0 }}  >
                    {children}
                </Col>
            </Row>
            
        </div>
    );
};

export default AppShell;

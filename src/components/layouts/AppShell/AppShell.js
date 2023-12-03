import { Col, Row } from "react-bootstrap";
import styles from "./appshell.module.css";
const { default: Sidebar } = require("../Sidebar/Sidebar");

const AppShell = ({ children }) => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.background}`}></div>
            <Sidebar />
            <Row>
                <Col className={styles.children} md={{ span: 8, offset: 2 }}>
                    {children}
                </Col>
            </Row>
            
        </div>
    );
};

export default AppShell;
import styles from "./hireme.module.css";

const hireme = () => {
    return (
        <div className={`${styles.container} position-relative`}>
            <div className={`${styles.content} position-absolute top-50 start-50 translate-middle`}>
                <h1>Hire Me</h1>
                <p>I am currently available for hire and open to any ideas of cooperation.</p>
                <div className={`${styles.hire}`}>
                    <ul>
                        <li>Email</li>
                        <li>Telegram</li>
                        <li>Linkedin</li>
                        <li>Github</li>
                    </ul>
                    <ul className={`${styles.list}`}>
                        <li>: <a href="mailto:evander@gmail.com">evander@gmail.com</a></li>
                        <li>: @eotambunan</li>
                        <li>: <a href="https://www.linkedin.com/in/eotambunan/" target="_blank">in/eotambunan</a></li>
                        <li>: <a href="https://github.com/eotambunan" target="_blank">eotambunan</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default hireme;

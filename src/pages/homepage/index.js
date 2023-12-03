import styles from "./homepage.module.css";

const homepage = () => {
    return (
        <div className={`${styles.container} position-relative`}>
            <div className={`${styles.content} position-absolute top-50 start-50 translate-middle`}>
                <h1>Hi I'm Evander</h1>
                <p>
                    Welcome to my quirky little corner of the internet – where coding meets creativity! I'm a Fullstack Developer Junior with a passion for making the web a more interesting place, one line of code at a time. So, grab your
                    virtual coffee, take a seat, and let's dive into the world of web development. Just don't ask me how many cups of coffee it takes to write bug-free code; that's a trade secret!😜
                </p>
            </div>
        </div>
    );
};

export default homepage;

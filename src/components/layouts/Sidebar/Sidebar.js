import { useEffect, useState } from "react";
import Link from "next/link";

// styling
import styles from "./sidebar.module.css";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
// icons
import { MdDoubleArrow, MdAddIcCall } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { SiDocsdotrs, SiExpress, SiNextdotjs } from "react-icons/si";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { useRouter } from "next/router";

const Sidebar = () => {
    const [isSideBarPop, setIsSideBarPop] = useState(false);
    const [path,setPath] = useState("")

    const handleSideBarClick = () => {
        setIsSideBarPop(!isSideBarPop);
    };
    const router=useRouter()
    useEffect(()=>{
        setPath(router.pathname)
        console.log(path);

    },[router.pathname])

    return (
        <>
            <div className={`${styles.container} ${!isSideBarPop && styles.containerHide}`}>
                <button className={`${styles.sidebarButton} ${isSideBarPop ? "" : styles.sidebarButtonHide} myButton`} onClick={handleSideBarClick}>
                    <MdDoubleArrow />
                </button>
                <div className={`${styles.container1}`}>
                    <Image src="/profile-pic.jpg" className={`${styles.image}`} roundedCircle />
                    <div className={`${styles.name} ${!isSideBarPop && styles.displayNone}`}>
                        <h3 className={`${!isSideBarPop && styles.displayNone}`}>Evander Oktapian</h3>
                        <h5 className={`${!isSideBarPop && styles.displayNone}`}>Fullstack Web Developer</h5>
                    </div>
                    {!isSideBarPop && (
                        <div className={`${styles.containerSkill}`}>
                            <div className={`${styles.skill}`} title="JavaScript">
                                <RiJavascriptFill />
                            </div>
                            <div className={`${styles.skill}`} title="Node.js">
                                <IoLogoNodejs />
                            </div>
                            <div className={`${styles.skill}`} title="Express.js">
                                <SiExpress />{" "}
                            </div>
                            <div className={`${styles.skill}`} title="Next.js">
                                <SiNextdotjs />
                            </div>
                            <div className={`${styles.skill}`} title="PostgreSQL">
                                <BiLogoPostgresql />
                            </div>
                        </div>
                    )}
                </div>
                <div className={`${styles.container2}`}>
                    <Link href="/" className={`${styles.link} ${path==="/"&&styles.active} ${isSideBarPop&&styles.linkPop}`}>
                        <TiHome title="Home Page" />
                        <span className={`${styles.textLink} ${!isSideBarPop && styles.displayNone}`}>Home Page</span>
                    </Link>
                    <Link href="/portfolio" className={`${styles.link} ${path.includes("/portfolio")&&styles.active} ${isSideBarPop&&styles.linkPop}`}>
                        <SiDocsdotrs title="Portfolio" />
                        <span className={`${styles.textLink} ${!isSideBarPop && styles.displayNone}`}>Portfolio</span>
                    </Link>
                    <Link href="/cv" className={`${styles.link} ${path==="/cv"&&styles.active} ${isSideBarPop&&styles.linkPop}`}>
                        <AiOutlinePaperClip title="CV" />
                        <span className={`${styles.textLink} ${!isSideBarPop && styles.displayNone}`}>CV</span>
                    </Link>
                    <Link href="/hireme" className={`${styles.link} ${path==="/hireme"&&styles.active} ${isSideBarPop&&styles.linkPop}`}>
                        <MdAddIcCall title="Hire Me !" />
                        <span className={`${styles.textLink} ${!isSideBarPop && styles.displayNone}`}>Hire Me !</span>
                    </Link>
                </div>
                <div className={`${styles.container3} ${!isSideBarPop && styles.displayNone}`}>
                    <Link href="mailto:evander@gmail.com" className={`${styles.icon} ${!isSideBarPop && styles.displayNone}`} title="Email">
                        <FiMail />
                    </Link>
                    <Link href="https://github.com/eotambunan" className={`${styles.icon} ${!isSideBarPop && styles.displayNone}`} title="Github">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/eotambunan/" className={`${styles.icon} ${!isSideBarPop && styles.displayNone}`} title="Linkedin">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;

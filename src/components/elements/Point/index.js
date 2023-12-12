import React, { useState } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import styles from "./point.module.css";

import { MdDoubleArrow, MdAddIcCall } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { SiDocsdotrs, SiExpress, SiNextdotjs } from "react-icons/si";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import Image from "next/image";

const Point = () => {
    const [isDrag, setIsDrag] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const handleStart = (e, data) => {
        setX(data.x);
        setY(data.y);
    };
    const handleStop = (e, data) => {
        const xMovement = Math.abs(x - data.x);
        const yMovement = Math.abs(y - data.y);
        if (xMovement > 10 || yMovement > 10) {
            setIsDrag(true);
        } else {
            setIsDrag(false);
        }
    };
    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log("clicked");
    };
    const handleDrag = () => {
        setIsOpen(false);
    };
    // 
    return (
        <Draggable onStart={handleStart} onStop={handleStop} onDrag={handleDrag} bounds={{right:300,left:0,top:0,bottom:350}}>
            <div className={`${styles.container} ${!isOpen&&styles.containerHidden}`}>
                <button className={`${styles.button}`} onClick={!isDrag ? handleClick : null} onTouchEnd={!isDrag ? handleClick : null}>
                </button>
                <div className={`${styles.skill} ${isOpen ? styles.slideDown : styles.slideUp}`}>
                    <div className={`${styles.icon}`} title="JavaScript">
                        <RiJavascriptFill />
                    </div>
                    <div className={`${styles.icon}`} title="Node.js">
                        <IoLogoNodejs />
                    </div>
                    <div className={`${styles.icon}`} title="Express.js">
                        <SiExpress />{" "}
                    </div>
                    <div className={`${styles.icon}`} title="Next.js">
                        <SiNextdotjs />
                    </div>
                    <div className={`${styles.icon}`} title="PostgreSQL">
                        <BiLogoPostgresql />
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default Point;

import { useState, useEffect } from "react"
import "../styles/Contact.css"
import { contact } from "../assets"
import { useAnimation, motion } from "framer-motion"

const Contact = () => {
    const [bounceCount, setBounceCount] = useState(0);
    const textControls = useAnimation();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const bounceAnimation = {
                y: [0, -1, 0],
                scale: [1, 1.1, 1],
                transition: { duration: 0.5, repeat: 1, repeatType: 'reverse' },
            };

            textControls.start(bounceAnimation);

            setBounceCount((prevCount) => prevCount + 1);
        }, 3000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [textControls]);

    return (
        <div className='bottom-section-contact'>
            <svg class="lqd-custom-shape" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 150">
                <path class="elementor-shape-fill" d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z">
                    <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z">
                    </animate>
                </path>
            </svg>
            <div className='bottom-section-contact-head'>Who should <motion.p animate={textControls}>Contact Us</motion.p> ..?</div>
            <div className='bottom-section-contact-content'>
                <img src={contact} alt='' />
                <div className='bottom-section-contact-card'>
                    <div className='bottom-section-contact-input'><input placeholder='Full Name' /></div>
                    <div className='bottom-section-contact-input'><input placeholder='Email' /></div>
                    <div><textarea placeholder='Comment' /></div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
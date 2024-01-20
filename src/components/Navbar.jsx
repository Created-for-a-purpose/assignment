import { useEffect } from "react";
import logo from "../assets/navbarImage.png"
import "../styles/Navbar.css"
import { motion, useAnimation } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ isInView }) {
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const className = isInView ? "navbar" : "navbar navbar-fixed";
    const animateControls = useAnimation();

    useEffect(() => {
        const dropAnimation = {
            y: [isInView ? -20 : 0, isInView ? 0 : 40],
            opacity: 1,
            transition: { duration: 0.5 },
        };

        animateControls.start(dropAnimation);

    }, [animateControls, isInView]);

    const setLinkColor = (id) => {
        const links = document.querySelectorAll(".navbar-mid div");
        links.forEach((link) => {
            if (link.id !== id)
                link.style.color = "rgb(144, 144, 144)";
        });
    }

    const revertColor = () => {
        const links = document.querySelectorAll(".navbar-mid div");
        links.forEach((link) => {
            link.style.color = "rgb(76, 76, 76)";
        });
    }

    const navigateTo = () => {
        if (pathname === "/contact-form")
            return;
        navigate("./contact-form")
    }

    return (
        <motion.div className={className} initial={{ y: -200, opacity: 0 }} animate={animateControls}>
            <img src={logo} alt="logo" className="logo" />
            <div className="navbar-mid">
                <div onMouseOver={(e) => setLinkColor(e.target.id)} onMouseOut={revertColor} id="1" >Home</div>
                <div onMouseOver={(e) => setLinkColor(e.target.id)} onMouseOut={revertColor} id="2">About</div>
                <div onMouseOver={(e) => setLinkColor(e.target.id)} onMouseOut={revertColor} id="3">Our Offerings</div>
                <div onMouseOver={(e) => setLinkColor(e.target.id)} onMouseOut={revertColor} onClick={navigateTo} id="4">Contact Us</div>
            </div>
            <button className="button">Pitch Us</button>
        </motion.div>
    )

}

export default Navbar;
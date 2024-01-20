import "../styles/Footer.css"
import { vlogo, link, insta, gmail, house } from "../assets"
import { footerData } from "../utils/constants.js"

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-left'>
                    <img src={vlogo} alt='' />
                    <p>The Venture Guys provide solutions to all entrepreneurs' problems, from raising funds to valuing their businesses to expanding and managing their businesses.</p>
                    <div className='footer-icons'>
                        <img src={link} alt='' className='footer-icon' />
                        <img src={insta} alt='' className='footer-icon' />
                        <img src={gmail} alt='' className='footer-icon' />
                    </div>
                </div>
                {footerData.map((item, index) => (
                    <div className='footer-right' key={index}>
                        <h3>{item.title}</h3>
                        {item.content.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                ))}
                <div className='footer-right'>
                    <h3>Get In Touch</h3>
                    <div className='footer-rightmost'>
                        <img src={house} alt='' className='footer-icon' />
                        <p>Luxuria Trade Hub, Dumas Rd, Surat, Gujarat 395007</p>
                    </div>
                    <div className='footer-rightmost'>
                        <img src={gmail} alt='' className='footer-icon' />
                        <p>pitch@theventureguys.in</p>
                    </div>
                </div>
            </div>
            <div className='footer-tags'>
                <p>Copyright © 2022 | All Right Reserved The Venture Guys</p>
                <div>
                    <p>Terms of service</p>
                    <p>Privacy Policies</p>
                </div>
            </div>
        </>
    )

}

export default Footer;
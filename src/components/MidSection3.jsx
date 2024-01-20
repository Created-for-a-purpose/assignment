import "../styles/MidSection3.css"
import { dash, drum } from "../assets"
import { midSection3Data, memberData, postData } from "../utils/constants.js"

const MidSection3 = () => {
    return (
        <div className='middle-section-3'>
            <div className='middle-section-3-header'>
                <img src={dash} alt='' />
                <h2>Why Choose Us</h2>
                <img src={drum} alt='' className='middle-section-3-drum' />
            </div>
            <div className='middle-section-3-content'>
                {midSection3Data.map((item, index) => (
                    <div className='middle-section-3-content-card' key={index}>
                        <img src={item.img} alt='' />
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='middle-section-3-bottom'>
                <svg class="lqd-custom-shape-2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 150">
                    <path class="elementor-shape-fill" d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z">
                        <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z">
                        </animate>
                    </path>
                </svg>
                <div className='middle-section-3-about'>
                    <hr />
                    <h2>About Us</h2>
                    <div className='middle-section-3-bottom-cards'>
                        <div className='middle-section-3-bottom-card'>
                            <h4>The Venture guys</h4>
                            <p>The Venture Guys is one of the unique service/solution providers helping Startup & MSME business owners & managers take control of their finances, deliver operational excellence, drive business growth & profitability. We help business owners & managers “Build Business Vision into Reality” through mix of data analytics & technology providing you with strategic business insights and business process optimization.</p>
                        </div>
                        <div className='middle-section-3-bottom-card'>
                            <h4 id='bottom-card-right-head'>Meet Our Team</h4>
                            <div className='middle-section-3-image-cards'>
                                {memberData.map((item, index) => (
                                    <div className='middle-section-3-image-card' key={index}>
                                        <img src={item.img} alt='' />
                                        <div className='middle-section-3-image-card-text'>
                                            <h5>{item.name}</h5>
                                            <p>{item.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='middle-section-3-bottom-head'>Latest Posts</h2>
                <div className='middle-section-posts'>
                    {postData.map((item) => (
                        <>
                            <img className='middle-section-post-image' src={item.img} alt='' />
                            <div className='middle-section-post'>
                                <time>{item.date}</time>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default MidSection3;
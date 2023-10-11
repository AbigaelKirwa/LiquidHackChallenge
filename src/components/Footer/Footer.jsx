import Facebook2 from "../../images/facebook2.png"
import Twitter2 from "../../images/twitter2.png"
import Linkedin2 from "../../images/linkedin2.png"
import "./Footer.css"

function Footer(){
    return(
        <div>
            <div id="footer_overall">
                <div className="footer_name">
                    <h1>APEX CPD</h1>
                </div>
                <div className="footer_middle">
                    <div className="about">
                        <ul>
                            <li><a href="#about">ABOUT US</a></li>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#faqs">FAQs</a></li>
                            <li><a href="#downloads">Downloads</a></li>
                        </ul>
                    </div>
                    <div className="support">
                        <ul>
                            <li><a href="#support">SUPPORT</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#system">System Requirements</a></li>
                            <li><a href="#register">Register Activation Key</a></li>
                            <li><a href="#site">Site feedback</a></li>
                        </ul>
                    </div>
                    <div className="connect">
                        <ul>
                            <li><a href="#connect">CONNECT</a></li>
                            <div className="connect_img">
                                <li><img src={Facebook2} alt="social media" /></li>
                                <li><img src={Twitter2} alt="social media" /></li>
                                <li><img src={Linkedin2} alt="social media" /></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p>© 2020 Apex CPD Privacy policy</p>
            </div>
        </div>
    )
}

export default Footer;
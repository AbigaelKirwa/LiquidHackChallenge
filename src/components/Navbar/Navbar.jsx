import Mail1 from "../../images/mail.png"
import Logo from "../../images/logo.png"
import Cart1 from "../../images/cart.png"
import Search from "../../images/search.png"

import Facebook1 from "../../images/facebook.png"
import Twitter1 from "../../images/twitter.png"
import Linkedin1 from "../../images/linkedin.png"


import "./Navbar.css"
function Navbar(){
    return(
        <div id="overall_nav">
            <div className="top_nav">
                <img src={Mail1} alt="email icon" />
                <p>train@apexcpd.com</p>
            </div>
            <div className="middle_nav">
                <div className="logo">
                    <img src={Logo} alt="apex logo" />
                </div>
                <div className="search">
                    <div className="main_search"></div>
                    <div className="main_search_btn">
                        <img src={Search} alt="find" />
                    </div>
                </div>
                <div className="middle_right">
                    <p>Sign In</p>
                    <button className="register">Register</button>
                    <button className="cart">
                        <div>
                            <img src={Cart1} alt="shopping" />
                        </div>
                        <div>
                            <p>2</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className="lower_nav">
                <div className="lower_nav_left">
                    <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#categories">CATEGORIES</a></li>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#blog">BLOG</a></li>
                    <li><a href="#faqs">FAQS</a></li>
                    <li><a href="#teach">TEACH ON APEX CPD</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
                <div className="lower_nav_right">
                    <img src={Facebook1} alt="social media" />
                    <img src={Twitter1} alt="social media" />
                    <img src={Linkedin1} alt="social media" />
                </div>
            </div>

        </div>
    )
}

export default Navbar;
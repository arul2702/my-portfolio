import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const FooterStyles = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color : "#fff" , marginRight:"2rem"}}/>
                    <div>
                        <p>123 platinum street , spacez combu</p>
                        <p>Koimbatore,Bharat</p>
                    </div>
                </div>
                <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{color : "#fff" , marginRight:"2rem"}}/>
                            6380288138
                        </h4>
                    </div>
                <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{color : "#fff" , marginRight:"2rem"}}/>
                            pk.arulkarthi@gmail.com
                        </h4>
                    </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>Na oru puluthi yen poolu valathi poda keluthi na paniduven aluthi un heart vechuruven niruthi</p>
                <div className="social">
                    
                    <Link to="https://m.facebook.com/profile.php/?id=100037920923267&name=xhp_nt__fb__action__open_user" target='_blank'>
                        <FaFacebook size={30} style={{color : "#fff" , marginRight:"1rem"}}/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/arulkarthi-p-94694b224/" target='_blank'>
                        <FaTwitter size={30} style={{color : "#fff" , marginRight:"1rem"}}/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/arulkarthi-p-94694b224/" target='_blank'>
                        <FaLinkedin size={30} style={{color : "#fff" , marginRight:"1rem"}}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterStyles
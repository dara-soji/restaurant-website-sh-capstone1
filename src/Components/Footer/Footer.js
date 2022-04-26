import React from 'react'
import './Footer.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__socials">
            <div className="footer__socials-social app__flex">

                <FacebookOutlinedIcon />
            </div>
            <div className="footer__socials-social app__flex">

                <InstagramIcon />
            </div>
            <div className="footer__socials-social app__flex">

                <TwitterIcon />
            </div>
        </div>
        <div className="footer__address app__flex">
            <p className="footer__address-addresses p-text">Side Hustle Project +234 (902) 093 4374 something@gmail.com</p>
            <p className="footer__address-copyright p-text">Powered by SH React Group 83</p>
        </div>
        
    </div>
  )
}

export default Footer
import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer'>
        <h3>&copy; 2020 darelbvcr.com</h3>
        <div className="footer-container">
            
            <GitHubIcon />
            <FacebookIcon/>
        </div>
    </div>
  )
}

export default Footer
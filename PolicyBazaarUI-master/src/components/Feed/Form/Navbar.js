import React from 'react';
import { ReactComponent as Logo } from '../../Resources/logopb.svg';
import './Navbar.css';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  const img1 = <Logo />;
  return (
    <div style={{ borderBottom: '1px solid #ccc' }}>
      <div
        className='navbar-wrapper'
        style={{ marginBottom: '5px' }}>
        <ul className='navbar-list muilogo'>
          <li className='li-logo loggo'>
            <a
              href='/#'
              className='logo'>
              {img1}
            </a>
          </li>
          <li className='callback'>
            <SupportAgentIcon />
            <div>Contact us</div>
          </li>
          <li className='callback'>
            <EmailIcon />
            <div>Mail us</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

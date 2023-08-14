import React from 'react';
import './Footer.css';
import { FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = (props) => {
  const { show } = props;

  return (
    <footer className={show ? 'footrr' : ''}>
      <div style={styles.footer}>
        <div style={styles.followBlog}>
          <p>Follow our blog</p>
          <div style={styles.socialIcons}>
            <FaYoutube style={styles.icon} />
            <FaFacebook style={styles.icon} />
            <FaTwitter style={styles.icon} />
          </div>
        </div>
        <div style={styles.languageSelect}>
          <label htmlFor='language'>Select Language:</label>
          <select
            id='language'
            style={styles.select}>
            <option value='en'>English</option>
            <option value='fr'>Français</option>
            <option value='es'>Español</option>
          </select>
        </div>
      </div>
      <div className='footer'>
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 1rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  followBlog: {
    display: 'flex',
    alignItems: 'center',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1rem', // Adjust the spacing as needed
  },
  icon: {
    fontSize: '24px',
    margin: '0.5rem',
    color: '#fff',
    cursor: 'pointer',
  },
  languageSelect: {
    display: 'flex',
    alignItems: 'center',
  },
  select: {
    marginLeft: '0.5rem',
    padding: '0.25rem',
  },
};

export default Footer;

import React from 'react';
import { BsWhatsapp } from 'react-icons/bs'; // Correct import for WhatsApp icon from react-icons/bs

const WhatsAppIcon = () => {
  return (
    <div className='icon_formobile' style={{
        position: 'fixed',
        bottom: '80px',
        right: '40px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        padding: '15px', // Adjust padding to make it look better
        cursor: 'pointer',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.4)',
        zIndex: 99999999999, // Ensured z-index is high to stay on top
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px', // Adjust width and height for better appearance
        height: '60px',
        transition: 'all 0.3s ease',
        mixBlendMode: 'normal',
        isolation: 'isolate'
      }}>
        <a 
          href="https://wa.me/+393338000177"  // Use the actual WhatsApp number you want to link
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp_icon_link"
        >
          <BsWhatsapp size={40} color="white" /> {/* Adjust size here for proper fitting */}
        </a>
    </div>
  );
};

export default WhatsAppIcon;

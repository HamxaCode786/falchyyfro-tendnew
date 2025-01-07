import React, { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'; // Correct import for named export
import { BsWhatsapp } from 'react-icons/bs'; // WhatsApp icon
import Falchyy from '../../assets/images/whatsapplogo1.png'

const WhatsAppIcon = () => {
  const [notificationCount, setNotificationCount] = useState(1); // Set initial notification count to 1
  const [chatMessage, setChatMessage] = useState("Hi, how can I assist you today?"); // Default message

  // Example of how to update notification count
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationCount(0); // Reset notification count after some time (e.g., 5 seconds)
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timeout when the component is unmounted
  }, []);

  // Example of how to dynamically change the chat message
  useEffect(() => {
    const dynamicMessage = "Hello! I noticed you are browsing our Services. How can I assist you?";
    setChatMessage(dynamicMessage);
  }, []);

  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+393338000177" // Replace with your phone number
        accountName="Falchyy"  // Customize the display name
        allowClickAway={true} // Closes the chat when clicking outside
        notificationCount={notificationCount} // Dynamically set notification count
        statusMessage="Hello, how can I help you?" // Optional status message
        chatMessage={chatMessage} // Dynamically populated chat message
        darkMode={false}
        avatar={Falchyy}
        buttonStyle={{
          backgroundColor: '#25D366',
          borderRadius: '50%',
          width: '70px',
          height: '70px',
          boxShadow: '2px 2px 6px rgba(0,0,0,0.4)',
        }}
        icon={<BsWhatsapp size={73} color="white" />} // Using the icon as you originally did
        className="floating-whatsapp-icon"
      />
    </div>
  );
};

export default WhatsAppIcon;

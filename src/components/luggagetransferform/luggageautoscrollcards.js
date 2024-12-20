import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap'; // Import Card from react-bootstrap
import Customimage from '../../assets/images/customscrollcards/2.png'; // Import your image

const Marquee = () => {
  // Data array containing information for each card
  const cardData = [
    { title: 'GitHub' },
    { title: 'CodePen' },
    { title: 'FreeCodeCamp' },
    { title: 'Dev' },
    { title: 'React' },
    { title: 'Vue' },
    { title: 'Angular' },
    { title: 'Node.js' },
    { title: 'WordPress' },
    { title: 'AWS' },
    { title: 'Docker' },
    { title: 'Android' },
  ];

  useEffect(() => {
    // This is run once when the component mounts
    const root = document.documentElement;
    const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"), 10);
    const marqueeContent = document.querySelector("ul.marquee-content");

    // Set the number of marquee elements
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    // Clone the marquee elements
    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  const scrollToBottom = () => {
    window.scrollBy({
      top: 650, // Scroll down by 200px
      behavior: 'smooth', // Smooth scroll
    });
  };




  return (
    <div className="marquee">
      <ul className="marquee-content" style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {cardData.map((card, index) => (
          <li key={index} style={{ marginRight: '20px' }}>
            <Card
             
            onClick={scrollToBottom} 
               style={{
                width: '15rem',
                backgroundImage: `url(${Customimage})`, // Apply Customimage as the background
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100px', // Adjust height as necessary
                cursor: 'pointer',
                borderRadius:"30px",
                
                // Add cursor pointer for hover effect
              }} 
              className="small-card">
              <Card.Body>
                <Card.Title className='cards_text_locations'>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;

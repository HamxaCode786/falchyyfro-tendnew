import React from 'react'
import Car from '../../assets/images/homepageimage/mercedes-black-landing.png'
import { TranslationContext } from '../../contextapi/translationContext';
import { useContext } from "react";


// const landing = () => {
//   return (
  
//     //   <div className="diagonal-image-container">
//     //   <svg className='diagonal-image_sg' width="1350" height="880" viewBox="0 0 1436 868" fill="none" xmlns="http://www.w3.org/2000/svg">
//     //     <path d="M1436 0C1436 0 1224.76 315.802 730.095 438C235.427 560.198 0.500977 725.051 0.500977 868L1436 861V0Z" fill="url(#paint0_linear_360_1526)"/>
//     //     <defs>
//     //       <linearGradient id="paint0_linear_360_1526" x1="701.5" y1="92.7319" x2="701.5" y2="929.099" gradientUnits="userSpaceOnUse">
//     //         <stop offset="0.425" stopColor="#05021F"/>
//     //         <stop offset="1" stopColor="white" stopOpacity="0"/>
//     //       </linearGradient>
//     //     </defs>
//     //   </svg>




//     // </div>


//     <>
//     {/* <svg className='diagonal-image_sg' width="1500" height="850" viewBox="0 0 1400 815" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M1436 0C1436 0 1220.76 290.802 650.095 445C370.427 525.198 0.500977 365.051 0.600977 905L1436 845V0Z" fill="url(#paint0_linear_360_1526)" />

//     <defs>
//       <linearGradient id="paint0_linear_360_1526" x1="701.5" y1="92.7319" x2="720.5" y2="640.099" gradientUnits="userSpaceOnUse">
//         <stop offset="0.415" stopColor="#05021F"/>
//         <stop offset="1" stopColor="white" stopOpacity="0"/>
//       </linearGradient>
//     </defs>
//   </svg> */}
//   <div className="diagonal-image-container">
//   
// </div>

//   </>
//   )
// }



// export default landing




const Landing2 = () => {
  const { language } = useContext(TranslationContext);



  return (
  <>
  <div className='landing-container'>

    <div className='landing-text-content'>
     <h1 className='landing-heading'>{language === 'en' ? (
  <>Unmatched Elegance with Our Luxury Renting Services</>
) : language === 'it' ? (
  <>Eleganza incomparabile con I nostri servizi di noleggio di lusso</>
) : language === 'du' ? (
  <>Ongeëvenaarde elegantie met Onze luxe verhuurdiensten</>
) : language === 'fr' ? (
  <>Une élégance inégalée avec nos services de location de luxe</>
) : (
  <>Unmatched Elegance with Our Luxury Renting Services</>
)}
</h1>
     <p className='landing-paragraph'>{language === 'en' ? (
  'Experience superior service and unmatched quality, tailored to your highest standards. Whether for business or leisure, we provide exclusive solutions prioritizing comfort, style, and convenience for an elevated lifestyle.'
) : language === 'it' ? (
  'Vivi un servizio superiore e una qualità senza pari, progettato per i tuoi più alti standard. Che sia per affari o svago, offriamo soluzioni esclusive che priorizzano comfort, stile e convenienza per uno stile di vita elevato.'
) : language === 'du' ? (
  'Ervaar superieure service en ongeëvenaarde kwaliteit, op maat gemaakt naar uw hoogste normen. Of het nu voor zaken of recreatie is, wij bieden exclusieve oplossingen die comfort, stijl en gemak prioriteren voor een verhoogde levensstijl.'
) : language === 'fr' ? (
  'Découvrez un service supérieur et une qualité inégalée, adaptés à vos normes les plus élevées. Que ce soit pour les affaires ou les loisirs, nous proposons des solutions exclusives qui privilégient le confort, le style et la commodité pour un mode de vie élevé.'
) : (
  'Experience superior service and unmatched quality, tailored to your highest standards. Whether for business or leisure, we provide exclusive solutions prioritizing comfort, style, and convenience for an elevated lifestyle.'
)}</p>
     {/* <button className='landing-button'>{language === 'en' ? (
  'Services'
) : language === 'it' ? (
  'Servizi'
) : language === 'du' ? (
  'Diensten'
) : language === 'fr' ? (
  'Services'
) : (
  'Services'
)}</button> */}
     </div>

     <div className='landing-image '>
        <div className='reflection-container' >
     <img src={Car} alt="Service" className='car-image'/>
     </div>
     </div>

  </div>   
   
  </>

  )
}



export default Landing2
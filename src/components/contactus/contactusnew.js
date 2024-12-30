import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBTextArea } from "mdb-react-ui-kit";
import Aboutusheading from "../aboutus/contactpicture";
import Testimonial from "../homepage/testimonail";
import Carroussel from "./slider";
import Card from "./card";
import CardNews from "./CardNews";
import { v4 as uuidv4 } from "uuid";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";


const Contactusnew = () => {
  const { language } = useContext(TranslationContext);
  

  let cards = [
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    }
  ];


  return (
    <div>
<Aboutusheading />
      <div className="componantourt_di1">
      <div className="new_component_contact1">

        <h3 className="new_contact_heading">
        {language === "en" 
  ? "Any Question or Remarks? Just Write Us A Message!" 
  : language === "it" 
  ? "Qualche domanda o osservazione? Scrivici un messaggio!" 
  : language === "du"  // Using 'du' for Dutch as you requested
  ? "Heb je vragen of opmerkingen? Stuur ons een bericht!" 
  : language === "fr" 
  ? "Des questions ou des remarques ? Écrivez-nous un message !" 
  : "Any Question or Remarks? Just Write Us A Message!"}

        </h3>
        <div className="first_feilds_new">
          <div className="form-outline">
          <MDBInput
   label={language === "en" 
    ? "Email" 
    : language === "it" 
    ? "Email" // In Italian, "Email" is often used, but you can use "Posta elettronica" if you prefer
    : language === "du"  // Dutch translation
    ? "E-mail"
    : language === "fr" 
    ? "E-mail" 
    : "Email"}
  id="formControlDefault1"
  type="text"
  className="form-control new1122"
  style={{
    opacity: 0.6, // Set the opacity to 0.6 for the entire element
     // Correct the border definition
    backgroundColor: "#dae4e8 !important", // Ensure backgroundColor is applied with !important
  }}
/>

          </div>

          <div className="form-outline">
            <MDBInput
               label={language === "en" 
                ? "Name" 
                : language === "it" 
                ? "Nome" 
                : language === "du"  // Dutch translation (using 'du')
                ? "Naam" 
                : language === "fr" 
                ? "Nom" 
                : "Name"}
              id="formControlDefault2"
              type="text"
              className="form-control new1122"
              style={{ opacity: 0.6 }}
            />
          </div>
        </div>
        <MDBTextArea
          label={language === "en" 
            ? "Message" 
            : language === "it" 
            ? "Messaggio" 
            : language === "du"  // Dutch translation (using 'du')
            ? "Bericht" 
            : language === "fr" 
            ? "Message" 
            : "Message"}
          id="formControlDefault2"
          rows={4} // You can adjust the number of rows for the height of the textarea
          className="form-control new1122"
          style={{ opacity: 0.6 }}
        />

        <button className="button_send_us_new">{language === "en" 
  ? "Send" 
  : language === "it" 
  ? "Invia" 
  : language === "du"  // Dutch translation (using 'du')
  ? "Verzenden" 
  : language === "fr" 
  ? "Envoyer" 
  : "Send"}
</button>

        <div></div>
      </div>
      </div>
      <div className="below_form_component">
        <div className="first_logo_details">
          <div class="icon-container">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <h4 className="font_heading_new">{language === "en" 
  ? "Find Us" 
  : language === "it" 
  ? "Trova noi" 
  : language === "du"  // Dutch translation (using 'du')
  ? "Vind ons" 
  : language === "fr" 
  ? "Trouvez-nous" 
  : "Find Us"}
</h4>
          <h5>Plazza Gino Valle, 20149 MI, Italy</h5>
          <h5>Plazza Gino Valle, 20149 MI, Italy</h5>
        </div>

        <div className="first_logo_details">
          <div class="icon-container">
          <i class="fas fa-phone-alt"></i>
          </div>
          <h4 className="font_heading_new" >{language === "en" 
  ? "Call Us" 
  : language === "it" 
  ? "Chiamaci" 
  : language === "du"  // Dutch translation (using 'du')
  ? "Bel ons" 
  : language === "fr" 
  ? "Appelez-nous" 
  : "Call Us"}
</h4>
          <h5>+1 123-456-7890</h5>
          <h5>+1 123-456-7890</h5>
        </div>
        <div className="first_logo_details">
          <div class="icon-container">
          <i class="fas fa-envelope"></i>
          </div>
          <h4 className="font_heading_new" >{language === "en" 
  ? "Mail Us" 
  : language === "it" 
  ? "Inviaci una mail" 
  : language === "du"  // Dutch translation (using 'du')
  ? "Stuur ons een e-mail" 
  : language === "fr" 
  ? "Envoyez-nous un e-mail" 
  : "Mail Us"}
</h4>
          <h5>contact@falchy.com</h5>
          <h5>+1 123-456-7890</h5>
        </div>
      </div>
      <Testimonial/>
      <Carroussel
        cards={cards}
        height="600px"
        width="100%"
        margin="0 auto"
        backgroundColor="#081736"
        offset={2}
        showArrows={false}
      />
    </div>
  );
};

export default Contactusnew;

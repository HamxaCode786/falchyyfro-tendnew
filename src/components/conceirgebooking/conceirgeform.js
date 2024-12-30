import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2';
import { useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import axios from 'axios'; // Import axios
import { MDBInput } from 'mdb-react-ui-kit'; // Import MDBInput
import { MDBTextArea } from 'mdb-react-ui-kit';
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";


const Conceirgeform = () => {
  const { language } = useContext(TranslationContext);
  const location = useLocation();
  const cardData = location.state;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    description: "",
    eventSelected: cardData.title, // Added eventSelected to formData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields are filled
    const requiredFields = ['fullName', 'email', 'contact'];
    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Required Fields Missing',
        text: `Please fill in all required fields: ${emptyFields.join(', ')}`,
        iconColor: '#05021f',
        confirmButtonColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
        iconColor: '#05021f',
        confirmButtonColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
      return;
    }

    try {
      // Simulate an API call using axios
      const response = await axios.post('http://localhost:5000/api/usercontact', formData);
    
      // Correct the reference to 'success' field
      if (response.data.data.success) {
        console.log('Form data submitted:', formData);
        
        Swal.fire({
          icon: 'success',
          title: 'Success!', 
          text: 'Your Event Booking Has Been Noted. Our Team Will Contact Within 10 Minutes!',
          iconColor: '#05021f',
          confirmButtonColor: '#05021f',
          customClass: {
            popup: 'swal-popup-custom',
            confirmButton: 'swal-button-custom',
          }
        }).then(() => {
          setFormData({
            fullName: "",
            email: "",
            contact: "",
            description: "",
            eventSelected: cardData.title, // Reset eventSelected to cardData.title
          });
        });
      }
    
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
        iconColor: '#05021f',
        confirmButtonColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
    }
  };    

  // Check if the event is "Dining & Entertainment" in any language
  const isDiningEvent = cardData.title[language] === 'Dining and Entertainment' ||
                        cardData.title[language] === 'Comida y entretenimiento' || 
                        cardData.title[language] === 'Restauration et divertissement' ||
                        cardData.title[language] === 'Essen und Unterhaltung';

  return (
    <div className="dinner_form">
      <h3 className="conceirge_form_heading2">{cardData.title2[language]}</h3>
      <div className="payment_form2">
        {isDiningEvent ? (
          <p></p>
        ) : (
          <Form className="hamza" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="form-outline mb-3">
              <MDBInput
                id="formFullName"
                label={language === 'en' ? "Full Name" :
                      language === 'it' ? "Nome Completo" :
                      language === 'fr' ? "Nom Complet" :
                      "Full Name"}
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  fontWeight: 400,
                  fontSize: '16px',
                  padding: '10px',
                  border: 'none',
                }}
              />
            </div>

            {/* Email Field */}
            <div className="form-outline mb-3">
              <MDBInput
                id="formEmail"
                label={language === 'en' ? "Email Address" :
                      language === 'it' ? "Indirizzo Email" :
                      language === 'fr' ? "Adresse E-mail" :
                      "Email Address"}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  fontWeight: 400,
                  fontSize: '16px',
                  padding: '10px',
                  border: 'none',
                }}
              />
            </div>

            {/* Contact Field */}
            <div className="form-outline mb-3">
              <MDBInput
                id="formContact"
                label={language === 'en' ? "Contact Information" :
                      language === 'it' ? "Informazioni di Contatto" :
                      language === 'fr' ? "Informations de Contact" :
                      "Contact Information"}
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  fontWeight: 400,
                  fontSize: '16px',
                  padding: '10px',
                  border: 'none',
                }}
              />
            </div>

            {/* Description Field */}
            <div className="form-outline mb-3">
              <MDBTextArea
                id="formDescription"
                label={language === 'en' ? "Description" :
                      language === 'it' ? "Descrizione" :
                      language === 'fr' ? "Description" :
                      "Description"}
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  fontWeight: 400,
                  fontSize: '16px',
                  padding: '10px',
                  height: '100px',
                  border: 'none',
                }}
              />
            </div>

            {/* Submit Button */}
            
          </Form>
        )}
        <button type="submit" className="payment_button">
              {language === 'en' ? "Get a quote" :
               language === 'it' ? "Ottieni un preventivo" :
               language === 'fr' ? "Obtenir un devis" :
               "Get a quote"}
            </button>
      </div>
    </div>
  );
};

export default Conceirgeform;

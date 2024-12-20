import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2';
import { MDBInput } from 'mdb-react-ui-kit'; // Import MDBInput
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import { SelectedCardContext } from '../../contextapi/rentluxurycontext';
import axios from "axios";



const Paymentcontact = () => {
  const { language } = useContext(TranslationContext);
  const { selectedCard } = useContext(SelectedCardContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: ""
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Validation rules
  const validateForm = () => {
    let tempErrors = {};

    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 2) {
      tempErrors.fullName = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.fullName)) {
      tempErrors.fullName = "Name can only contain letters";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      tempErrors.email = "Invalid email address";
    }

    if (!formData.contact) {
      tempErrors.contact = "Contact information is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.contact)) {
      tempErrors.contact = "Please enter a valid phone number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Submit the form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        // Prepare the payload including the selected card's title
        const payload = {
          customer_name: formData.fullName,  // Map fullName to customer_name
        customer_email: formData.email,  // Map email to customer_email
        phone_number: formData.contact,
          car: selectedCard ? selectedCard.title[language] : "",  // Add the car title from selectedCard
        };

        // Actual API request
        const response = await axios.post('https://4ac6-2400-adc5-463-9d00-9c13-5215-5a37-b36e.ngrok-free.app/rent-luxury/bookings', payload, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const responseData = await response.json();

        if (response.ok) {
          console.log('Form data submitted:', responseData);
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Contact Information Has Been Noted. Our Team Will Contact Within 10 Minutes!',
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
              contact: ""
            });
          });
        } else {
          // Handle server-side validation errors or failure
          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: responseData.message || 'Unable to share contact information. Please try again later.',
            confirmButtonColor: '#05021f',
            iconColor: '#05021f',
            customClass: {
              popup: 'swal-popup-custom',
              confirmButton: 'swal-button-custom',
            }
          });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Unable to share contact information. Please try again later.',
          confirmButtonColor: '#05021f',
          iconColor: '#05021f',
          customClass: {
            popup: 'swal-popup-custom',
            confirmButton: 'swal-button-custom',
          }
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please fill in all required fields correctly to contact us.',
        confirmButtonColor: '#05021f',
        iconColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
    }
  };

  

  return (
    <div className="payment_form">
  <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'rgba(27, 27, 27, 0.95)' }}>
  {language === "en" ? "Experience the Thrill of Luxury on the Road With Us!" :
     language === "it" ? "Vivi il brivido del lusso sulla strada con noi!" :
     language === "du" ? "Ervaar de spanning van luxe op de weg met ons!" :
     language === "fr" ? "Vivez l'excitation du luxe sur la route avec nous !" :
     "Experience the Thrill of Luxury on the Road With Us!"}

  </h2>
  
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicFullName">
      <MDBInput
        id="formFullName"
        label={language === "en" ? "Full Name" :
               language === "it" ? "Nome Completo" :
               language === "du" ? "Volledige Naam" :
               language === "fr" ? "Nom Complet" : "Full Name"}
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        style={{ backgroundColor: "#f9f9f9", fontWeight: 600, fontSize: '16px', padding: '10px', border: 'none' }}
        isInvalid={!!errors.fullName}
        disabled={isLoading}
      />
      <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <MDBInput
        id="formEmail"
        label={language === "en" ? "Email Address" :
               language === "it" ? "Indirizzo Email" :
               language === "du" ? "E-mail Adres" :
               language === "fr" ? "Adresse Email" : "Email Address"}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        style={{ backgroundColor: "#f9f9f9", fontWeight: 600, fontSize: '16px', padding: '10px', border: 'none' }}
        isInvalid={!!errors.email}
        disabled={isLoading}
      />
      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicContact">
      <MDBInput
        id="formContact"
        label={language === "en" ? "Contact Information" :
               language === "it" ? "Informazioni di Contatto" :
               language === "du" ? "Contact Informatie" :
               language === "fr" ? "Informations de Contact" : "Contact Information"}
        type="text"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        style={{ backgroundColor: "#f9f9f9", fontWeight: 600, fontSize: '16px', padding: '10px', border: 'none' }}
        isInvalid={!!errors.contact}
        disabled={isLoading}
      />
      <Form.Control.Feedback type="invalid">{errors.contact}</Form.Control.Feedback>
    </Form.Group>

    <button 
      type="submit" 
      className="payment_button"
      disabled={isLoading}
    >
      {language === "en" ? (isLoading ? 'Submitting...' : 'Get a quote') :
       language === "it" ? (isLoading ? 'Invio...' : 'Ottieni un preventivo') :
       language === "du" ? (isLoading ? 'Verzenden...' : 'Krijg een offerte') :
       language === "fr" ? (isLoading ? 'Soumission...' : 'Obtenez un devis') :
       (isLoading ? 'Submitting...' : 'Get a quote')}
    </button>
  </Form>
</div>

  );
};

export default Paymentcontact;

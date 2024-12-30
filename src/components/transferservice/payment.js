import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import Autosuggest from "react-autosuggest";
import { MDBInput } from "mdb-react-ui-kit";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const Payment = ({ selectedCard, initialState }) => {
  const { language } = useContext(TranslationContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    paymentMethod: "",
    accountNumber: "",
    expirationDate: null,
    cvc: "",
    pickupDate: null,
    numberOfPersons: "",
    pickupLocation: initialState.pickup || "",
    dropOffLocation: initialState.dropoff || "",
    luggageQuantity: "",
  });

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulating API call
      const response = await fetch("https://api.example.com/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Payment information submitted successfully!");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          contact: "",
          paymentMethod: "",
          accountNumber: "",
          expirationDate: null,
          cvc: "",
          pickupDate: null,
          numberOfPersons: "",
          pickupLocation: "",
          dropOffLocation: "",
          luggageQuantity: "",
        });
      } else {
        alert("Failed to submit payment information");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting payment information");
    }
  };

  const fetchSuggestions = async (value) => {
    if (!value) return [];

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${value}&limit=5`
    );
    const data = await response.json();
    return data.map((place) => ({
      description: place.display_name,
      latitude: place.lat,
      longitude: place.lon,
    }));
  };

  const handleSuggestionsFetchRequested = async ({ value }, field) => {
    const suggestions = await fetchSuggestions(value);
    if (field === "pickupLocation") {
      setPickupSuggestions(suggestions);
    } else if (field === "dropOffLocation") {
      setDropOffSuggestions(suggestions);
    }
  };

  // Handle selection of suggestion
  const handleSuggestionSelected = (
    event,
    { suggestion, suggestionValue, sectionIndex, method },
    field
  ) => {
    const { description } = suggestion;
    setFormData({
      ...formData,
      [field]: description,
    });
  };

  return (
    <div className="payment_form">
      <h3 className="transfer_service_heading_form">
        {language === "en"
          ? "Arrive with grace, leave an impression, luxury transfer redefined"
          : language === "it"
          ? "Arriva con grazia, lascia un'impressione, trasferimento di lusso ridefinito"
          : language === "du"
          ? "Arrive with grace, leave an impression, luxury transfer redefined" // Dutch (same as English)
          : language === "fr"
          ? "Arrivez avec grâce, laissez une impression, transfert de luxe redéfini"
          : "Arrive with grace, leave an impression, luxury transfer redefined"}
      </h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label={
              language === "en"
                ? "Full Name"
                : language === "it"
                ? "Nome completo"
                : language === "du"
                ? "Volledige naam"
                : language === "fr"
                ? "Nom complet"
                : "Full Name"
            }
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label={
              language === "en"
                ? "Email Address"
                : language === "it"
                ? "Indirizzo email"
                : language === "du"
                ? "E-mail adres"
                : language === "fr"
                ? "Adresse e-mail"
                : "Email Address"
            }
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label={
              language === "en"
                ? "Enter Your Phone Number"
                : language === "it"
                ? "Inserisci il tuo numero di telefono"
                : language === "du"
                ? "Voer je telefoonnummer in"
                : language === "fr"
                ? "Entrez votre numéro de téléphone"
                : "Enter Your Phone Number"
            }
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label={
              language === "en"
                ? "Account Number"
                : language === "it"
                ? "Numero di conto"
                : language === "du"
                ? "Rekeningnummer"
                : language === "fr"
                ? "Numéro de compte"
                : "Account Number"
            }
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>

        <div className="last_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <MDBInput
              label={
                language === "en"
                  ? "Expiration Date"
                  : language === "it"
                  ? "Data di scadenza"
                  : language === "du"
                  ? "Vervaldatum"
                  : language === "fr"
                  ? "Date d'expiration"
                  : "Expiration Date"
              }
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              as={Flatpickr}
              options={{
                enableTime: false,
                dateFormat: "F j, Y",
                defaultDate: formData.expirationDate,
              }}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                fontWeight: 600,
                fontSize: "16px",
                padding: "10px",
                width: "100%",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <MDBInput
              label={
                language === "en"
                  ? "Enter Your CVC"
                  : language === "it"
                  ? "Inserisci il tuo CVC"
                  : language === "du"
                  ? "Voer je CVC in"
                  : language === "fr"
                  ? "Entrez votre CVC"
                  : "Enter Your CVC"
              }
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                fontWeight: 600,
                fontSize: "16px",
                padding: "10px",
              }}
            />
          </Form.Group>
        </div>
        <div className="last_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <MDBInput
              label={
                language === "en"
                  ? "Number of Persons"
                  : language === "it"
                  ? "Numero di Persone"
                  : language === "du"
                  ? "Aantal Personen"
                  : language === "fr"
                  ? "Nombre de Personnes"
                  : "Number of Persons"
              }
              type="number"
              name="numberOfPersons"
              value={formData.numberOfPersons}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                fontWeight: 600,
                fontSize: "16px",
                padding: "10px",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPickupDate">
            <div style={{ position: "relative" }}>
              {/* Floating Label */}
              <label
                htmlFor="pickupDate"
                style={{
                  position: "absolute",
                  backgroundColor: "#f9f9f9",
                  top: formData.pickupDate ? "-10px" : "50%",
                  left: "10px",
                  transform: formData.pickupDate ? "none" : "translateY(-50%)",
                  fontSize: formData.pickupDate ? "12px" : "16px", // Dynamic font size
                  color: formData.pickupDate ? "#495057" : "#6c757d", // Color based on state
                  transition: "all 0.3s ease", // Smooth transition for floating effect
                  pointerEvents: "none",
                  background: "#fff", // Prevent overlap with input content
                  padding: "0 5px", // Padding around the label text
                  zIndex: 1, // Ensure it stays above the input field
                }}
              >
                Pickup Date
              </label>

              {/* Flatpickr Input */}
              <Flatpickr
                className="form-control"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={(date) => handleDateChange(date, "pickupDate")}
                options={{
                  dateFormat: "F j, Y",
                  minDate: "today",
                  disableMobile: true,
                }}
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ced4da", // Border with MDBInput-like styling
                  borderRadius: "5px", // Smooth rounded corners
                  padding: "10px", // Padding to maintain height and spacing
                  paddingTop: "18px", // Extra padding to accommodate floating label
                  fontWeight: 400, // Lighter font weight for a sleek look
                  fontSize: "16px", // Standard font size for MDBInput
                  height: "45px", // Fixed height for consistency
                  color: "#495057", // Default text color
                  outline: "none", // Remove default outline
                  transition: "border-color 0.3s, box-shadow 0.3s", // Smooth hover and focus effects
                  boxShadow: "none", // No shadow initially
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>
          </Form.Group>
        </div>
        <div className="last_div">
          {/* Drop Off Location */}
          <Form.Group className="mb-3" controlId="formDropOffLocation">
            <Autosuggest
              suggestions={dropOffSuggestions}
              onSuggestionsFetchRequested={(e) =>
                handleSuggestionsFetchRequested(e, "dropOffLocation")
              }
              onSuggestionsClearRequested={() => setDropOffSuggestions([])}
              getSuggestionValue={(suggestion) => suggestion.description}
              renderSuggestion={(suggestion) => (
                <div>{suggestion.description}</div>
              )}
              onSuggestionSelected={handleSuggestionSelected}
              inputProps={{
                value: formData.dropOffLocation,
                onChange: handleInputChange,
                name: "dropOffLocation",
                className: "form-outline form-control autosuggest_drop",
                type: "text",
                label: "Drop Off Location",
                style: {
                  backgroundColor: "#f9f9f9",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "10px",
                  width: "100%",
                  color: "#575b62",
                  borderRadius: "10px",
                },
              }}
              renderInputComponent={(inputProps) => (
                <MDBInput
                  {...inputProps} // Pass down all the inputProps to MDBInput
                  className="form-outline form-control autosuggest_drop"
                />
              )}
              theme={{
                container: {
                  position: "relative",
                  zIndex: 1050,
                },
                suggestionsContainerOpen: {
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: "200px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  zIndex: 9999,
                },
                suggestion: {
                  padding: "10px",
                  cursor: "pointer",
                },
                suggestionHighlighted: {
                  backgroundColor: "#d3d3d3",
                },
              }}
            />
          </Form.Group>

          {/* Pickup Location */}
          <Form.Group className="mb-3" controlId="formPickupLocation">
            <Autosuggest
              suggestions={pickupSuggestions}
              onSuggestionsFetchRequested={(e) =>
                handleSuggestionsFetchRequested(e, "pickupLocation")
              }
              onSuggestionsClearRequested={() => setPickupSuggestions([])}
              getSuggestionValue={(suggestion) => suggestion.description}
              renderSuggestion={(suggestion) => (
                <div>{suggestion.description}</div>
              )}
              inputProps={{
                value: formData.pickupLocation,
                onChange: handleInputChange,
                name: "pickupLocation",
                label: "Pickup Location",
                style: {
                  backgroundColor: "#f9f9f9",
                  border: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "10px",
                  width: "100%",
                  color: "#34434d", // Text color
                  borderRadius: "10px", // Apply border radius
                },
              }}
              onSuggestionSelected={(e, data) =>
                handleSuggestionSelected(e, data, "pickupLocation")
              }
              renderInputComponent={(inputProps) => (
                <MDBInput
                  {...inputProps} // Pass down all the inputProps to MDBInput
                  className="form-outline form-control"
                  // You can add more class names if needed
                />
              )}
              theme={{
                container: {
                  position: "relative",
                  zIndex: 1050, // Ensure suggestions overlay without disturbing other UI elements
                },
                suggestionsContainerOpen: {
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: "200px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  zIndex: 9999,
                },
                suggestion: {
                  padding: "10px",
                  cursor: "pointer",
                },
                suggestionHighlighted: {
                  backgroundColor: "#d3d3d3",
                },
              }}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label="Luggage Quantity"
            type="number"
            name="luggageQuantity"
            value={formData.luggageQuantity}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRadio">
          <div
            style={{
              marginBottom: "10px",
              paddingLeft: "15px",
              border: "1px solid #ced4da",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{
                marginBottom: "10px",
                color: "#585b5e",
                fontWeight: 600,
                textAlign: "center",
                paddingTop: "5px",
              }}
            >
              Choose Your Payment Method
            </div>
            <Form.Check
              className="radio_payment"
              type="radio"
              name="paymentMethod"
              id="visa"
              value="visa"
              label={
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55" // Adjust the size as needed
                    height="55" // Adjust the size as needed
                    viewBox="0 60 780 780" // Keep the original viewBox if necessary
                    style={{ marginRight: "8px" }}
                  >
                    <path
                      d="m293.2 348.73l33.359-195.76h53.358l-33.384 195.76h-53.333zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-0.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-0.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885 0.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-0.271 30.088 3.534 39.936 7.5l4.781 2.259 7.231-42.427m137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555 0.084 68.336 0.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-0.314 0.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293v3e-3zm-363.3-126.41l-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-0.063 84.004-195.39-56.524-1e-3"
                      fill="#0E4595" // Blue color
                    />
                    <path
                      d="m146.92 152.96h-86.041l-0.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528"
                      fill="#F2AE14" // Yellow color
                    />
                  </svg>
                </span>
              }
              style={{
                color: "#1B1B1B",
                marginBottom: "8px",
                padding: "10px 0 10px 30px", // Added more padding on the left
                backgroundColor: "#f9f9f9",
              }}
              onChange={handleInputChange}
            />
            <Form.Check
              className="radio_payment"
              type="radio"
              name="paymentMethod"
              id="mastercard"
              value="mastercard"
              label={
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40" // Adjust the size as needed
                    height="40" // Adjust the size as needed
                    viewBox="0 120 495 495" // Adjusted to match the viewBox from the Mastercard SVG
                    style={{ marginLeft: "8px" }}
                  >
                    <g>
                      <path
                        style={{ fill: "#2488FF" }} // Blue color
                        d="M247.471,314.297C233.009,325.682,214.791,332.5,195,332.5c-46.869,0-85-38.131-85-85
        s38.131-85,85-85c19.791,0,38.009,6.818,52.471,18.203c0.029-0.023,0.029-91.372,0.029-91.372H0v316.338h247.5
        C247.5,405.669,247.5,314.32,247.471,314.297z"
                      />
                      <path
                        style={{ fill: "#005ECE" }} // Dark blue color
                        d="M247.5,89.331v91.348c14.867-11.681,33.332-18.179,52.5-18.179c46.869,0,85,38.131,85,85
        s-38.131,85-85,85c-19.168,0-37.633-6.499-52.5-18.18v91.349H495V89.331H247.5z"
                      />
                      <path
                        style={{ fill: "#FFCD00" }} // Yellow color
                        d="M280,247.5c0,27.078-12.742,51.22-32.529,66.797C262.367,326.001,280.832,332.5,300,332.5
        c46.869,0,85-38.131,85-85s-38.131-85-85-85c-19.168,0-37.633,6.499-52.5,18.179C267.257,196.279,280,220.422,280,247.5z"
                      />
                      <path
                        style={{ fill: "#FF5023" }} // Red color
                        d="M280,247.5c0-27.078-12.743-51.221-32.529-66.797C233.009,169.318,214.791,162.5,195,162.5
        c-46.869,0-85,38.131-85,85s38.131,85,85,85c19.791,0,38.009-6.818,52.471-18.203C267.258,298.72,280,274.578,280,247.5z"
                      />
                    </g>
                  </svg>
                </span>
              }
              style={{
                color: "#1B1B1B",
                padding: "10px 0 10px 30px", // Added more padding on the left
                backgroundColor: "#f9f9f9",
              }}
              onChange={handleInputChange}
            />
          </div>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ width: "100%" }}
        >
          <MDBInput
            type="number"
            name="Amount"
            placeholder={`Price: ${selectedCard.hourlyRate}/hr`}
            value={selectedCard.hourlyRate}
            readOnly
          />
        </Form.Group>
        <button type="submit" className="payment_button">
          Get a quote
        </button>
      </Form>
    </div>
  );
};

export default Payment;

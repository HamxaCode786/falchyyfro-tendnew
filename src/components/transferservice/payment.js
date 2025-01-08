import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import Autosuggest from "react-autosuggest";
import { MDBInput } from "mdb-react-ui-kit";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
  
} from 'mdb-react-ui-kit';
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const MapComponent = ({ origin, destination, initialState }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [map, setMap] = useState(null);
  
  
  useEffect(() => {
    if (origin && destination) {
      console.log('Origin:', origin);
      console.log('Destination:', destination);

      const calculateRoute = async () => {
        try {
          const directionsService = new window.google.maps.DirectionsService();
          const results = await directionsService.route({
            origin,
            destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          });
          setDirectionsResponse(results);
          
          if (map) {
            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(origin);
            bounds.extend(destination);
            map.fitBounds(bounds);
          }

           // Set loading to false once directions are fetched
        } catch (error) {
          console.error("Error fetching directions", error);
        }
      };

      calculateRoute();
    }
  }, [origin, destination, map, initialState]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '200px' }}
      zoom={10}
      center={origin}
      onLoad={(mapInstance) => setMap(mapInstance)}
    >
      {/* Marker for Pickup */}
      <Marker className="marker_origin" 
        position={origin} 
        // Directly using a string for label
      />
      
      {/* Marker for Dropoff */}
      <Marker 
        position={destination} 
         // Directly using a string for label
      />
      
      {/* Directions Renderer */}
      {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )}
    </GoogleMap>
  </LoadScript>
  );
};

const Payment = ({ selectedCard, initialState }) => {
  const { language } = useContext(TranslationContext);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);
  const [distanceInfo, setDistanceInfo] = useState(null);
  const [showRouteInfo, setShowRouteInfo] = useState(false);

  // Handle transition end
  const handleTransitionEnd = () => {
    setIsTransitionComplete(true); // Set state to true when the transition ends
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    pickupDate: null,
    numberOfPersons: "",
    pickupLocation: initialState.pickup || "",
    dropOffLocation: initialState.dropoff || "",
    luggageQuantity: "",
    checkbox: false,
    checkbox2: false, // Added for terms acceptance
    ageOfChild: "", // Added for child age
    numberofchild: "" // Added for number of children
  });

const isPickupEditable = !initialState.pickup;
const isDropoffEditable = !initialState.dropoff;


  const [errors, setErrors] = useState({});
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Calculate distance between two locations
  const calculateDistance = async (origin, destination, initialState) => {
    if (!origin || !destination) {
      console.log("Origin or destination missing");
      setShowRouteInfo(false);
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/transfers/distance`, {
        params: {
          origins: origin,
          destinations: destination,
        },
      });
    

      // Check if the response contains data
      if (!response?.data) {
        console.error("Invalid response:", response);
        throw new Error("Invalid response from distance API");
      }

      // Process and store the distance and duration info
      const info = {
        distance: response.data.distance,
        duration: response.data.duration,
        status:response.data.milan
      };

      setDistanceInfo(info);
      setShowRouteInfo(true);
      return info;
    } catch (error) {
      console.error("Error calculating distance:", error.message);
      setDistanceInfo(null);
      setShowRouteInfo(false);
      throw error;
    }
  };                                                                                                                                                                                                                                                                                                                                              

  // Effect to trigger when pickup or dropOff changes
  useEffect(() => {
    if (initialState?.pickup && initialState?.dropoff) {
      console.log("Initial State Pickup:", initialState?.pickup);
      console.log("Initial State DropOff:", initialState?.dropoff);
  
      calculateDistance(initialState?.pickup, initialState?.dropoff);
    }
  }, []);  // Empty dependency array to run once on component mount
  

  const validateForm = () => {
    const newErrors = {};
    const errorMessages = [];

    if (!formData.fullName.trim()) {
      errorMessages.push("Full name is required");
    }

    if (!formData.email.trim()) {
      errorMessages.push("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorMessages.push("Email is invalid");
    }

    if (!formData.contact.trim()) {
      errorMessages.push("Contact number is required");
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.contact)) {
      errorMessages.push("Invalid contact number");
    }

    if (!formData.pickupDate) {
      errorMessages.push("Pickup date is required");
    }

    if (!formData.numberOfPersons) {
      errorMessages.push("Number of persons is required");
    }

    if (!formData.pickupLocation.trim()) {
      errorMessages.push("Pickup location is required");
    }

    if (!formData.dropOffLocation.trim()) {
      errorMessages.push("Drop off location is required");
    }

    if (!formData.luggageQuantity) {
      errorMessages.push("Luggage quantity is required");
    }

    if (errorMessages.length > 0) {
      Swal.fire({
        icon: "error",
        title:
          language === "en"
            ? "Incomplete Fields"
            : language === "it"
            ? "Campi Incompleti"
            : language === "fr"
            ? "Champs Incomplets"
            : language === "du"
            ? "Ingevulde Velden"
            : "Incomplete Fields",

        text:
          language === "en"
            ? "Please fill all fields"
            : language === "it"
            ? "Compila tutti i campi"
            : language === "fr"
            ? "Veuillez remplir tous les champs"
            : language === "du"
            ? "Vul alle velden in"
            : "Please fill all fields",

        iconColor: "#05021f",
        confirmButtonColor: "#05021f",
        customClass: {
          popup: "swal-popup-custom",
          confirmButton: "swal-button-custom",
        },
        confirmButtonText:
          language === "en"
            ? "Ok"
            : language === "it"
            ? "Ok"
            : language === "fr"
            ? "D'accord"
            : language === "du"
            ? "Ok"
            : "Ok",
      });

      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    const { name, checked, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleDateChange = (date, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: date[0],
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Calculate distance between pickup and dropoff l
    // ocations
    const distanceInfo = await calculateDistance(
      formData.pickupLocation,
      formData.dropOffLocation
    );

    // Get payment amount based on route
    const payment_amount = initialState?.additionalNumber === 1
  ? (selectedCard?.malpenssatomilan ? selectedCard.malpenssatomilan.toString().replace(/[€$]/g, '') : '0')
  : initialState?.additionalNumber === 2
  ? (selectedCard?.malpenssatocomo ? selectedCard.malpenssatocomo.toString().replace(/[€$]/g, '') : '0')
  : initialState?.additionalNumber === 3
  ? (selectedCard?.malpenssatobergamo ? selectedCard.malpenssatobergamo.toString().replace(/[€$]/g, '') : '0')
  : (selectedCard?.hourlyRate ? selectedCard.hourlyRate.toString().replace(/[€$]/g, '') : '0');


    // Prepare data with child age and number - set to "none" if checkbox not selected
    const submissionData = {
      full_name: formData.fullName,
      email: formData.email, 
      phone_number: formData.contact,
      pick_up_location: formData.pickupLocation,
      drop_off_location: formData.dropOffLocation,
      number_of_persons: formData.numberOfPersons,
      luggage_quantity: formData.luggageQuantity,
      car: selectedCard.id,
      pickup_date_time: formData.pickupDate,
      age_of_child: formData.ageOfChild || "none",
      no_of_child_seats: formData.numberofchild || "none",
      payment_amount: payment_amount,
      distance: distanceInfo?.distance || "Unknown",
      estimated_duration: distanceInfo?.duration || "Unknown",
      need_a_child_seat: formData.checkbox,
      
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/transfers/transfer-bookings`, submissionData);

      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        contact: "",
        pickupDate: null,
        numberOfPersons: "",
        pickupLocation: "",
        dropOffLocation: "", 
        luggageQuantity: "",
        checkbox: false,
        ageOfChild: "",
        numberofchild: ""
      });

      Swal.fire({
        icon: "success",
        title:
          language === "en"
            ? "Success!"
            : language === "it"
            ? "Successo!"
            : language === "fr"
            ? "Succès!"
            : language === "du"
            ? "Succes!"
            : "Success!",

        text:
          language === "en"
            ? "Thank You For Reaching Out, Our team will Get in touch with you Shortly!"
            : language === "it"
            ? "Grazie per averci contattato, il nostro team ti contatterà a breve!"
            : language === "fr"
            ? "Merci de nous avoir contacté, notre équipe vous contactera sous peu!"
            : language === "du"
            ? "Dank je voor het contact opnemen, ons team neemt binnenkort contact met je op!"
            : "Thank You For Reaching Out, Our team will Get in touch with you Shortly!",

        iconColor: "#05021f",
        confirmButtonColor: "#05021f",
        customClass: {
          popup: "swal-popup-custom",
          confirmButton: "swal-button-custom",
        },
      });

      navigate("/transferservice");

    } catch (error) {
      console.error("Error submitting payment:", error);
      Swal.fire({
        icon: "error",
        title:
          language === "en"
            ? "Error!"
            : language === "it"
            ? "Errore!"
            : language === "fr"
            ? "Erreur!"
            : language === "du"
            ? "Fout!"
            : "Error!",

        text:
          language === "en"
            ? "Failed to submit information. Please try again later."
            : language === "it"
            ? "Impossibile inviare le informazioni. Riprova più tardi."
            : language === "fr"
            ? "Échec de l'envoi des informations. Veuillez réessayer plus tard."
            : language === "du"
            ? "Het verzenden van informatie is mislukt. Probeer het later opnieuw."
            : "Failed to submit information. Please try again later.",

        iconColor: "#05021f",
        confirmButtonColor: "#05021f",
        customClass: {
          popup: "swal-popup-custom",
          confirmButton: "swal-button-custom",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchSuggestions = async (value) => {
    if (!value) return [];
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/transfers/autocomplete/?input=${encodeURIComponent(value)}`);

      if (!response.ok) {
        throw new Error("Failed to fetch location suggestions");
      }
  
      const data = await response.json();
      return data.predictions?.map((place) => ({
        description: place.description,
        latitude: place.latitude,
        longitude: place.longitude,
      })) || [];
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    }
  };
  

  const handleSuggestionsFetchRequested = async ({ value }, field) => {
    const suggestions = await fetchSuggestions(value);
    if (field === "pickupLocation") {
      setPickupSuggestions(suggestions);
    } else if (field === "dropOffLocation") {
      setDropOffSuggestions(suggestions);
    }
  };

  const handleSuggestionSelected = async (event, { suggestion }, field) => {
    const { description } = suggestion;
    const updatedFormData = {
      ...formData,
      [field]: description
    };
    
    setFormData(updatedFormData);

    // Calculate distance when both locations are set
    if (updatedFormData.pickupLocation && updatedFormData.dropOffLocation) {
      await calculateDistance(updatedFormData.pickupLocation, updatedFormData.dropOffLocation);
    }
  };

  const handleCalendarOpen = () => {
    setIsCalendarOpen(true); // Set state when the calendar is open
  };

  const handleCalendarClose = () => {
    setIsCalendarOpen(false); // Set state when the calendar is closed
  };

  return (
    <div className="payment_form">
      <h3 className="transfer_service_heading_form">
        {language === "en"
          ? "Fill out the form and book your transfer"
          : language === "it"
          ? "Compila il modulo e prenota il tuo trasferimento"
          : language === "du"
          ? "Vul het formulier in en boek je transfer"
          : language === "fr"
          ? "Remplissez le formulaire et réservez votre transfert"
          : "Fill out the form and book your transfer"}
      </h3>

      <Form onSubmit={handleSubmit} noValidate>
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
                  ? "Number of Persons"
                  : language === "it"
                  ? "Numero di Persone"
                  : language === "du"
                  ? "Aantal Personen"
                  : language === "fr"
                  ? "Nombre de Personnes"
                  : "Number of Persons"
              }
             type="text"
              name="numberOfPersons"
              value={formData.numberOfPersons}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                color:"black",
                fontSize: "16px",
                padding: "10px",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPickupDate">
  <div className="form-outline" style={{ position: "relative" }}>
  <label
            htmlFor="pickupDate"
            style={{
              position: "absolute",
              backgroundColor: "transparent", // Set to white during transition and then transparent
              top: formData.pickupDate || isCalendarOpen ? "-10px" : "50%", // Position adjustment
              left: "10px",
              transform: formData.pickupDate || isCalendarOpen ? "none" : "translateY(-50%)", // Apply translation for vertical centering
              fontSize: formData.pickupDate || isCalendarOpen ? "12px" : "16px",
              color: isCalendarOpen ? "#3f51b5" : "#6c757d", // Color change based on state
              transition: "all 0.3s ease", // Smooth transition for all changes
              pointerEvents: "none",
              padding: "0 5px",
              zIndex: 1,
            }}
            onTransitionEnd={handleTransitionEnd} // Listen for the transition end
          >
            Pickup Date & Time
          </label>



    <Flatpickr
      className="form-control"
      name="pickupDate"
      value={formData.pickupDate}
      onChange={(date) => handleDateChange(date, "pickupDate")}
      options={{
        dateFormat: "F j, Y h:i K", // Format: "Month Day, Year Hour:Minute AM/PM"
        minDate: "today",
        disableMobile: true,
        enableTime: true, // Enable time picker
        noCalendar: false, // Ensure the calendar is not disabled
        time_24hr: false, // Use 12-hour format (false for AM/PM, true for 24-hour)
        defaultHour: 12, // Default hour to show in the time picker
        defaultMinute: 0, // Default minute to show in the time picker
        onOpen: handleCalendarOpen, // Track when the calendar opens
        onClose: handleCalendarClose, // Track when the calendar closes
      }}
      style={{
        backgroundColor: "#f9f9f9",
        border: formData.pickupDate || isCalendarOpen ? null : "1px solid #bdbdbd",
        borderRadius: "5px",
        padding: "10px",
        fontWeight: 400,
        fontSize: "16px",
        height: "45px",
        color: "#495057",
        outline: "none",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: "none",
      }}
    />
    <div className="form-notch" style={{
      display: "flex",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      textAlign: "left",
      pointerEvents: "none",
    }}>
      <div className="form-notch-leading"></div>
      <div className="form-notch-middle" style={{width: "116.8px", borderTop: formData.pickupDate || isCalendarOpen ? "1px solid transparent" : null}}></div>
      <div className="form-notch-trailing"></div>
    </div>
    </div>
</Form.Group>

        </div>
        <div className="last_div">
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
              onSuggestionSelected={(e, data) =>
                handleSuggestionSelected(e, data, "dropOffLocation")
              }
              inputProps={{
                value: formData.dropOffLocation,
                onChange: handleInputChange,
                name: "dropOffLocation",
                className: "form-outline form-control autosuggest_drop",
                type: "text",
                label: "Drop Off Location",
                style: {
                  backgroundColor: "#f9f9f9",
                  color:"black",
                  fontSize: "16px",
                  padding: "10px",
                  width: "100%",
                  
                  borderRadius: "10px",
                  border: "none",
                },
                disabled: !isDropoffEditable,
              }}
              renderInputComponent={(inputProps) => (
                <MDBInput
                  {...inputProps}
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
              disabled={!isDropoffEditable}
            />
            
          </Form.Group>

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
                className: "form-outline form-control",
                style: {
                  backgroundColor: "#f9f9f9",
                  border: "none",
                  
                  fontSize: "16px",
                  padding: "10px",
                  width: "100%",
                  color: "black",
                  borderRadius: "10px",
                },
                disabled:!isPickupEditable,
              }}
              onSuggestionSelected={(e, data) =>
                handleSuggestionSelected(e, data, "pickupLocation")
              }
              renderInputComponent={(inputProps) => (
                <MDBInput
                  {...inputProps}
                  className="form-outline form-control"
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
              disabled={!isPickupEditable}
            />
          </Form.Group>
        </div>

        {showRouteInfo && (
          <MDBCard className="" style={{ marginTop: '10px', display: 'block', backgroundColor:"rgb(249, 249, 249)", marginBottom:"30px", border:"1px solid", borderColor:"#bdbdbd", borderRadius:"5px"  }}>
            <MDBCardHeader className="text" style={{ textAlign: 'center', fontWeight:"700", fontSize:"22px" }}>Route Information</MDBCardHeader>
            <MapComponent origin={formData.pickupLocation} destination={formData.dropOffLocation} />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <div>
                  <strong>Distance:</strong  ><span style={{fontWeight:700}}> {distanceInfo?.distance || 'N/A'}</span>
                </div>
                <div>
                  <strong>Duration:</strong><span style={{fontWeight:700}}> {distanceInfo?.duration || 'N/A'}</span>
                </div>
              </div>
              
            </MDBCardBody>
          </MDBCard>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label="Luggage Quantity"
           type="text"
            name="luggageQuantity"
            value={formData.luggageQuantity}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              color:"black",
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3 checkbox_margin_left" controlId="formBasicEmail">
      <MDBCheckbox
        label="Need a Child Seat?"
        name="checkbox"
        checked={formData.checkbox}
        onChange={handleInputChange}
        style={{
          fontWeight: 600,
          fontSize: "16px",
        }}
      />
    </Form.Group>
    
    <div className={`child-seat-container ${formData.checkbox ? 'show' : ''}`}>
        {formData.checkbox && (
          <MDBInput
            label="Age of Child"
            type="text"
            name="ageOfChild"
            value={formData.ageOfChild}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              color:"black",
              fontSize: "16px",
              padding: "10px",
              marginBottom:"17px",
              marginTop:"6px",
              // Add some spacing
            }}
          />
          
        )}
        {formData.checkbox && (
          <MDBInput
            label="Number of Child"
            type="text"
            name="numberofchild"
            value={formData.numberofchild}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              color:"black",
              fontSize: "16px",
              padding: "10px",
              marginBottom:"17px"
              // Add some spacing
            }}
          />
          
        )}
      </div>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ width: "100%" }}
        >
          <MDBInput
            type="number"
            name="Amount"
            placeholder={`Price: ${
              console.log('distanceInfo.milan:', distanceInfo),
            
              // Check if distanceInfo has a status of "true"
              distanceInfo?.status === true
                ? '€80'  // Set price to 80 with Euro symbol when status is "true"
                : // If distance is available and valid, calculate price based on distance
                distanceInfo?.distance && !isNaN(parseFloat(distanceInfo.distance))
                ? (() => {
                    // Skip price calculation for selectedCard.malpenssatomilan, malpenssatocomo, malpenssatobergamo
                    if (
                      initialState.additionalNumber === 1 || 
                      initialState.additionalNumber === 2 || 
                      initialState.additionalNumber === 3
                    ) {
                      // Return the corresponding price from selectedCard for 1, 2, or 3 with Euro symbol
                      return `€${initialState.additionalNumber === 1
                        ? selectedCard.malpenssatomilan
                        : initialState.additionalNumber === 2
                        ? selectedCard.malpenssatocomo
                        : selectedCard.malpenssatobergamo
                      }`;  // Return the appropriate price with Euro symbol
                    }
            
                    // Remove " km" and parse the number
                    const distanceValue = parseFloat(distanceInfo.distance.replace(' km', ''));
                    const calculatedPrice = Math.max(distanceValue * 5, 60);
                    console.log("distanceInfo.distance:", distanceInfo.distance);
                    console.log("distance value after removing 'km':", distanceValue);
                    console.log("calculated price:", calculatedPrice);
                    return `€${calculatedPrice}`;  // Return calculated price with Euro symbol
                  })()
                : // If additionalNumber is 1, 2, or 3, use selectedCard's corresponding price without calculating
                initialState.additionalNumber === 1
                ? `€${selectedCard.malpenssatomilan}`  // Return selectedCard.malpenssatomilan price with Euro symbol
                : initialState.additionalNumber === 2
                ? `€${selectedCard.malpenssatocomo}`  // Return selectedCard.malpenssatocomo price with Euro symbol
                : initialState.additionalNumber === 3
                ? `€${selectedCard.malpenssatobergamo}`  // Return selectedCard.malpenssatobergamo price with Euro symbol
                : `€${selectedCard.hourlyRate}`  // Return selectedCard hourlyRate price with Euro symbol
            }`}
             
            
            value={ 
              distanceInfo?.distance && !isNaN(parseFloat(distanceInfo.distance))
                ? (() => {
                    // Check if distanceInfo.status is "true", set calculatedPrice to 80
                    if (distanceInfo?.status === true) {
                      console.log("distanceInfo.status is 'true', setting price to 80");
                      return '€80';  // Return 80 with Euro symbol when status is "true"
                    }
            
                    // Skip calculation for selectedCard.malpenssatomilan, malpenssatocomo, malpenssatobergamo
                    if (
                      initialState.additionalNumber === 1 || 
                      initialState.additionalNumber === 2 || 
                      initialState.additionalNumber === 3
                    ) {
                      // Return the corresponding price from selectedCard for 1, 2, or 3
                      return initialState.additionalNumber === 1
                        ? `€${selectedCard.malpenssatomilan}`  // Add Euro sign
                        : initialState.additionalNumber === 2
                        ? `€${selectedCard.malpenssatocomo}`  // Add Euro sign
                        : `€${selectedCard.malpenssatobergamo}`;  // Add Euro sign
                    }
            
                    // Remove " km" and parse the number
                    const distanceValue = parseFloat(distanceInfo.distance.replace(' km', ''));
                    const calculatedPrice = Math.max(distanceValue * 5, 60);
                    console.log("distanceInfo.distance:", distanceInfo.distance);
                    console.log("distance value after removing 'km':", distanceValue);
                    console.log("calculated price:", calculatedPrice);
                    return `€${calculatedPrice}`;  // Add Euro sign to calculated price
                  })()
                : // If additionalNumber is 1, 2, or 3, use selectedCard's corresponding price without calculating
                initialState.additionalNumber === 1
                ? `€${selectedCard.malpenssatomilan}`  // Add Euro sign
                : initialState.additionalNumber === 2
                ? `€${selectedCard.malpenssatocomo}`  // Add Euro sign
                : initialState.additionalNumber === 3
                ? `€${selectedCard.malpenssatobergamo}`  // Add Euro sign
                : `€${selectedCard.hourlyRate}`  // Add Euro sign to hourly rate
            }
            
            
            readOnly
          />
        </Form.Group>
        <div className="terms_conditions_cards">
      <MDBCard className="card_background" alignment="center">
        <MDBCardHeader style={{ textAlign: "left", paddingLeft: "30px", fontWeight: "700" }}>
          Terms & Conditions
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", textAlign: "left" }}>
              <li>The minimum fare for a transfer is 60 euros. All rides within the city of Milan are charged at a flat rate of 80 euros.</li>
              <li>Each hour includes 15 km of travel. Any additional kilometers will incur a charge of 2.3 euros per kilometer, or 2.1 euros per kilometer if the ride is not at an airport.</li>
              <li>Users have the option to add multiple stops during their journey for an additional fee of 10 euros per stop.</li>
              <li>The driver will wait for up to 1-2 hours after the scheduled flight arrival time to accommodate any delays.</li>
            </ul>
          </MDBCardText>
          
          {/* Checkbox for accepting terms */}
          <div style={{ textAlign: "left" }}>
            <MDBCheckbox
              name="checkbox2"
              label="I accept the Terms & Conditions"
              checked={formData.checkbox2}
              onChange={handleInputChange}
            />
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>

        <button 
          type="submit" 
          className="payment_button"
          disabled={!formData.checkbox2 || isSubmitting}
          style={{
            opacity: formData.checkbox2 && !isSubmitting ? 1 : 0.5,
            cursor: formData.checkbox2 && !isSubmitting ? 'pointer' : 'not-allowed'
          }}
        >
          {isSubmitting ? "Submitting..." : "Get a quote"}
        </button>
      </Form>
    </div>
  );
};

export default Payment;

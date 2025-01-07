import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TransferContext } from "../../contextapi/transferservicecontext";
import Drivers from "../../assets/images/transferpage/transfercars/Chauffer-E-Class2.png";
import Driversv from "../../assets/images/transferpage/transfercars/Chauffer-V-Class.png";
import Driverss from "../../assets/images/transferpage/transfercars/Chauffer-S-Class.png";
import { TranslationContext } from "../../contextapi/translationContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Transfercards = () => {
  const { language } = useContext(TranslationContext);
  const navigate = useNavigate();
  const { selectedCard, setSelectedCard } = useContext(TransferContext);
  const [isPulsing, setIsPulsing] = useState(true);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulsing(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleAutoFillButtonClick = (pickup, dropoff, additionalNumber) => {
    navigate("/transferforward", {
      state: {
        pickup,
        dropoff,
        additionalNumber,
      },
    });
  };

  const handleCardSelection = (cardData) => {
    console.log("Selected card:", cardData);
    setSelectedCard(cardData);
  };

  const handleSelect = (cardId) => {
    console.log("Selected card ID:", cardId);
    setSelectedCard(cardId);
    navigate("/transferforward", { state: { cardId } });
  };

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCardsData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://nijaga8856.pythonanywhere.com/transfers`);
        console.log("Received car data:", response.data);
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setCardsData(data);
      } catch (error) {
        console.error("Error fetching cards data:", error);
        setCardsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCardsData();
  }, []);

  return (
    <div>
      <h1 className="transfer_service_heading1">
        {loading ? <Skeleton width={200} /> : (
          language === "en"
            ? "Arrive With Grace"
            : language === "it"
            ? "Arriva con grazia"
            : language === "du"
            ? "Kom met gratie"
            : language === "fr"
            ? "Arrivez avec grâce"
            : "Arrive With Grace"
        )}
      </h1>
      <h1 className="transfer_service_heading2">
        {loading ? <Skeleton width={400} /> : (
          language === "en"
            ? "Feel the Thrill of True Elegance with Every Transfer"
            : language === "it"
            ? "Senti il brivido della vera eleganza in ogni trasferimento"
            : language === "du"
            ? "Voel de sensatie van echte elegantie bij elke overdracht"
            : language === "fr"
            ? "Ressentez le frisson de la vraie élégance à chaque transfert"
            : "Feel the Thrill of True Elegance with Every Transfer"
        )}
      </h1>

      <div className="cards_div_transfer">
        {loading ? (
          // Skeleton loading state
          [...Array(3)].map((_, index) => (
            <div key={index} className="card_transfer12">
              <Skeleton height={200} width="100%" /> {/* For image */}
              <Skeleton height={24} width={150} style={{ margin: '10px 0' }} /> {/* For car name */}
              <div className="location_cards_selectable">
                <Skeleton height={40} width="100%" style={{ margin: '5px 0' }} />
                <div className="line-container">
                  <Skeleton height={2} width="100%" />
                </div>
                <Skeleton height={40} width="100%" style={{ margin: '5px 0' }} />
                <Skeleton height={40} width="100%" style={{ margin: '5px 0' }} />
                <Skeleton height={40} width="100%" style={{ margin: '5px 0' }} />
              </div>
              <div className="last_rent_now_div">
                <Skeleton height={50} width="100%" />
              </div>
            </div>
          ))
        ) : (
          Array.isArray(cardsData) && cardsData.map((car, index) => (
            <div
              key={index}
              className="card_transfer12"
              onClick={() =>
                handleCardSelection({
                  id: car.id,
                  name: car.car_name,
                  hourlyRate: car.hourly_rate,
                  color: car.color,
                  power: car.power,
                  milage: car.mileage,
                  passengers: car.passangers,
                  luggage: car.luggage,
                  malpenssatomilan: car.locations.find(
                    (location) => location.location_name === "Malpensa to milan"
                  )?.price,
                  malpenssatocomo: car.locations.find(
                    (location) => location.location_name === "malpenssa to como"
                  )?.price,
                  malpenssatobergamo: car.locations.find(
                    (location) => location.location_name === "malpenssa to bergamo"
                  )?.price,
                  image: car.car_image,
                })
              }
            >
              <img className="card_transfer1_img1" src={car.car_image} alt={`cards_${index + 1}`} />
              
              <h4>{car.car_name}</h4>
              
              <div className="location_cards_selectable">
                <button
                  id="hourly-rate-btn"
                  className={`small_cards_4 ${selectedCard === 'hourly' ? "selected" : ""}`}
                  onClick={() => handleSelect('hourly')}
                >
                  {language === "en"
                    ? "Hourly Rate"
                    : language === "it"
                    ? "Tariffa oraria"
                    : language === "du"
                    ? "Uurtarief"
                    : language === "fr"
                    ? "Tarif horaire"
                    : "Milan to Malpensa"}
                  <span>€{car.hourly_rate}</span>
                </button>
                <div className="line-container">
                  <div></div>
                </div>
                <button
                  id="malpensa-milan-btn"
                  className={`small_cards_1 ${selectedCard === 'malpensa-milan' ? "selected" : ""} ${isPulsing ? "pulsing" : ""}`}
                  onClick={() => {
                    handleSelect('malpensa-milan');
                    handleAutoFillButtonClick(
                      "Milan-Malpensa International Airport, Via Santa Maria, Ferno, Unione dei comuni di Lonate Pozzolo e Ferno, Varese, Lombardy, 21015, Italy",
                      "Milan, Lombardy, Italy",
                      1
                    );
                  }}
                >
                  {language === "en"
                    ? "Malpensa to Milan"
                    : language === "it"
                    ? "Malpensa a Milano"
                    : language === "du"
                    ? "Malpensa naar Milaan"
                    : language === "fr"
                    ? "Malpensa à Milan"
                    : "Malpensa to Milan"}
                  <span>€{car.locations.find(loc => loc.location_name === "Malpensa to milan")?.price}</span>
                </button>
               
                <button
                  id="malpensa-como-btn"
                  className={`small_cards_2 ${selectedCard === 'malpensa-como' ? "selected" : ""}`}
                  onClick={() => {
                    handleSelect('malpensa-como');
                    handleAutoFillButtonClick(
                      "Milan-Malpensa International Airport, Via Santa Maria, Ferno, Unione dei comuni di Lonate Pozzolo e Ferno, Varese, Lombardy, 21015, Italy",
                      "Lake Como, Como, Lombardy, Italy",
                      2
                    );
                  }}
                >
                  {language === "en"
                    ? "Malpensa to Lake Como"
                    : language === "it"
                    ? "Malpensa al Lago di Como"
                    : language === "du"
                    ? "Malpensa naar Comomeer"
                    : language === "fr"
                    ? "Malpensa au lac de Côme"
                    : "Malpensa to Lake Como"}
                  <span>€{car.locations.find(loc => loc.location_name === "malpenssa to como")?.price}</span>
                </button>
                <button
                  id="malpensa-bergamo-btn"
                  className={`small_cards_3 ${selectedCard === 'malpensa-bergamo' ? "selected" : ""}`}
                  onClick={() => {
                    handleSelect('malpensa-bergamo');
                    handleAutoFillButtonClick(
                      "Milan-Malpensa International Airport, Via Santa Maria, Ferno, Unione dei comuni di Lonate Pozzolo e Ferno, Varese, Lombardy, 21015, Italy",
                      "Bergamo, Lombardy, Italy",
                      3
                    );
                  }}
                >
                  {language === "en"
                    ? "Malpensa to Bergamo"
                    : language === "it"
                    ? "Malpensa a Bergamo"
                    : language === "du"
                    ? "Malpensa naar Bergamo"
                    : language === "fr"
                    ? "Malpensa à Bergame"
                    : "Malpensa to Bergamo"}
                  <span>€{car.locations.find(loc => loc.location_name === "malpenssa to bergamo")?.price}</span>
                </button>
              </div>
              
              <div className="last_rent_now_div">
                <Link to="/transferforward">
                  <h4>
                    {language === "en"
                      ? "To Where"
                      : language === "it"
                      ? "Dove"
                      : language === "du"
                      ? "Waarheen"
                      : language === "fr"
                      ? "Vers où"
                      : "To Where"}
                  </h4>
                  <h5>
                    {language === "en"
                      ? "Custom Location"
                      : language === "it"
                      ? "Posizione personalizzata"
                      : language === "du"
                      ? "Aangepaste locatie"
                      : language === "fr"
                      ? "Emplacement personnalisé"
                      : "Custom Location"}
                  </h5>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Transfercards;

import React from "react";
import Footerimage from "../../src/assets/images/layout/footer_image.jpg";
import Footerlogo from "../../src/assets/logo/FalchyLogo.svg";
import { Link } from "react-router-dom";
import { TranslationContext } from "../contextapi/translationContext";
import { useContext } from "react";

const Footer = () => {
  const { language } = useContext(TranslationContext);

  return (
    
    <div className="footer_main_container">
      <div className="footer_main_div">
        {/* <div
        className="image_div"
        style={{
          background: `linear-gradient(rgba(39, 47, 59, 0.7), rgba(39, 47, 59, 0.7)), url(${Footerimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="footer_heading">
          Lets Get You Moving <span className="span_1">-</span>{" "}
          <span>Contact Us</span>
        </h1>
      </div> */}
        <div className="footer_main_data">
          <div className="footer_div1">
            <img className="footer_logo1" src={Footerlogo} alt="footer_image" />
            <p>
            Where Comfort Meets Excellence
            </p>

            <a href="/newaboutus">
              <button>Contact Us</button>
            </a>
            <div className="icons_div1">
              <ul
                className="footer_social_icons"
                style={{
                  listStyle: "none",
                  display: "flex",
                  gap: "7%",
                  padding: 0,
                }}
              >
                <li>
                  <i
                    className="fab fa-facebook"
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  ></i>
                </li>
                <li>
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  ></i>
                </li>
                <li>
                  <i
                    className="fab fa-twitter"
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  ></i>
                </li>
                <li>
                  <i
                    className="fab fa-linkedin"
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  ></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_div2">
            <div className="navigation_div">
              <h1>Navigation</h1>
              <Link to="/">
                <h4>Home</h4>
              </Link>
              <Link to="/rentluxury">
                <h4>Rent Luxury</h4>
              </Link>
              <Link to="/transferservice">
                <h4>Transfer Service</h4>
              </Link>
              <Link to="/luggagetransferform">
                <h4>Luggage Transfer & Deposit</h4>
              </Link>

              <Link to="/conciergeevents">
                <h4>Concierge Services</h4>
              </Link>
              <Link to="/newaboutus">
                <h4>Contact Us</h4>
              </Link>
            </div>
            <div
              className="contact_us_div"
              style={{ alignItems: "flex-start" }}
            >
              <h1
                style={{
                  color: "#05021F",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Contact Us
              </h1>
              <div
              className="footer_mobile_responsive"
                style={{ display: "flex", alignItems: "baseline", gap: "15px", textAlign:"left" }}
              >
                <i
                  className="fas fa-map-marker-alt"
                  style={{ fontSize: "20px", color: "#05021F" }}
                ></i>
                <p>CASSANO MAGNAGO (VA) VIA FORO SAN MARTINO 22 CAP 21012</p>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "15px" }}
              >
                <i
                  className="fas fa-envelope"
                  style={{ fontSize: "20px", color: "#05021F" }}
                ></i>
                <p>info@company.com</p>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "15px" }}
              >
                <i
                  className="fas fa-phone"
                  style={{ fontSize: "20px", color: "#05021F" }}
                ></i>
                <p>(+39) 375 911 9255</p>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "15px" }}
              >
                <i
                  className="far fa-clock"
                  style={{ fontSize: "20px", color: "#05021F" }}
                ></i>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        {language === "en" ? (
          <h3>Copyright © 2024 FALCHY - All Rights Reserved.</h3>
        ) : language === "it" ? (
          <h3>Copyright © 2024 FALCHY - Tutti i diritti riservati.</h3>
        ) : language === "du" ? (
          <h3>Copyright © 2024 FALCHY - Alle rechten voorbehouden.</h3>
        ) : language === "fr" ? (
          <h3>Copyright © 2024 FALCHY - Tous droits réservés.</h3>
        ) : (
          <h3>Copyright © 2024 FALCHY - All Rights Reserved.</h3>
        )}
      </div>
    </div>
    
    
  );
};

export default Footer;

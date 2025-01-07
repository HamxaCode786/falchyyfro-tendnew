import React, { useState } from "react";
import Mercedeslogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/Mercedes-Logo 2 222222.png";
import Ferarrilogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/icons8-ferrari-48.png";
import Lambologo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/icons8-lamborghini-48.png";
import Porschelogo from "../../assets/images/rentLuxury/RentLuxuryCars/porsche/icons8-porsche-48.png";
import Bentlogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/icons8-bentley-48.png";
import BMWlogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/icons8-bmw-48.png";
import Landroverlogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/land-rover-logo-png_seeklogo-201638 1.png";
import Audilogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/AudiLogo.png";

import Class1 from "../../assets/images/rentLuxury/RentLuxuryCars/Car-E-Class2.png";
import Class2 from "../../assets/images/rentLuxury/RentLuxuryCars/Car-V-Class.png";
import Class3 from "../../assets/images/rentLuxury/RentLuxuryCars/Car-S-Class.png";
import Class4 from "../../assets/images/rentLuxury/RentLuxuryCars/Ferrari 296 GTS (Cabrio) - Sport Car Cabrio.png";
import Class5 from "../../assets/images/rentLuxury/RentLuxuryCars/Portofino Spyder - Sport Car Cabrio _ 2021.png";
import Class6 from "../../assets/images/rentLuxury/RentLuxuryCars/LAMBO/Huracan Sterrato - Sport Car Cabrio _ 2024256.png";
import Class7 from "../../assets/images/rentLuxury/RentLuxuryCars/LAMBO/HuracanTecnica.png";
import Class8 from "../../assets/images/rentLuxury/RentLuxuryCars/LAMBO/Huran-Evo_Spider 2.png";
import Class9 from "../../assets/images/rentLuxury/RentLuxuryCars/LAMBO/Huracan Performante Spyder - Sport Car Cabrio2.png";
import Class10 from "../../assets/images/rentLuxury/RentLuxuryCars/LAMBO/Urus S - SUV Metrallic Black.png";
import Class11 from "../../assets/images/rentLuxury/RentLuxuryCars/LAMBO/Urus S - SUV Metallic Blue.png";
import Class12 from "../../assets/images/rentLuxury/RentLuxuryCars/bentley/Contintental GTC - Sport Car Cabrio.png";
import Class13 from "../../assets/images/rentLuxury/RentLuxuryCars/porsche/Cayenne E-Hybrid - SUV.png";
import Class14 from "../../assets/images/rentLuxury/RentLuxuryCars/porsche/911 Carrera 4S Cabriolet - Sport Car Cabrio.png";
import Class15 from "../../assets/images/rentLuxury/RentLuxuryCars/BMW/X7 40d Msport (7 Seats) - SUV _ 2024.png";
import Class16 from "../../assets/images/rentLuxury/RentLuxuryCars/BMW/X5 30d Msport - SUV.png";
import Class17 from "../../assets/images/rentLuxury/RentLuxuryCars/RANGEROVER/Range Rover Vogue (7 Seats) - SUV  2024.png";
import Class18 from "../../assets/images/rentLuxury/RentLuxuryCars/RANGEROVER/Range-Rover-Sport-HSE-SUV.png";
import Class19 from "../../assets/images/rentLuxury/RentLuxuryCars/RANGEROVER//Range-Rover-Sport-HSE-SUV.png";
import Class20 from "../../assets/images/rentLuxury/RentLuxuryCars/audi/Q8 50TDI Sline - SUV _ 2024 metallic black.png";
import Class21 from "../../assets/images/rentLuxury/RentLuxuryCars/audi/RS6.png";
import Class22 from "../../assets/images/rentLuxury/RentLuxuryCars/audi/Audi Q7 50TDI Sline (7 Seats) - SUV _ 2024.png";
import Class23 from "../../assets/images/rentLuxury/RentLuxuryCars/audi/Audi Q7 50TDI Sline (7 Seats) - SUV _ 2021.png";
import Class24 from "../../assets/images/rentLuxury/RentLuxuryCars/Mercedes/G63 AMG - SUV _ 2025.png";
import Class25 from "../../assets/images/rentLuxury/RentLuxuryCars/Mercedes/G63 AMG - SUV _ 2021.png";
import Class26 from "../../assets/images/rentLuxury/RentLuxuryCars/Mercedes/GLE AMG line - SUV _ 2024.png";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../contextapi/translationContext";
import { SelectedCardContext } from "../../contextapi/rentluxurycontext";
import { useContext } from "react";

const Transfercards = () => {
  const { language } = useContext(TranslationContext);
  const { setSelectedCard } = useContext(SelectedCardContext);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const cardsData = [
    {
      id: 1,
      title: {
        en: "Mercedes-Benz E-Class",
        it: "Mercedes-Benz E-Class",
        du: "Mercedes-Benz E-Klasse",
        fr: "Mercedes-Benz Classe E",
      },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Super White",
        it: "Super Bianco",
        du: "Super Wit",
        fr: "Super Blanc",
      },
      horsepower2: {
        en: "375 HP",
        it: "375 CV",
        du: "375 PK",
        fr: "375 CH",
      },
      mpg: {
        en: "30 MPG",
        it: "30 MPG",
        du: "30 MPG",
        fr: "30 MPG",
      },
      carMake: {
        en: "Mercedes",
        it: "Mercedes",
        du: "Mercedes",
        fr: "Mercedes",
      },

      topSpeed: {
        en: "155 MPH",
        it: "155 MPH",
        du: "155 MPH",
        fr: "155 MPH",
      },
      seatingCapacity: {
        en: "2+2",
        it: "2+2",
        du: "2+2",
        fr: "2+2",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },

      img: Class1,
      img2: Mercedeslogo,
    },
    {
      id: 2,
      title: {
        en: "Mercedes-Benz V-Class",
        it: "Mercedes-Benz V-Class",
        du: "Mercedes-Benz V-Klasse",
        fr: "Mercedes-Benz Classe V",
      },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Super White",
        it: "Super Bianco",
        du: "Super Wit",
        fr: "Super Blanc",
      },
      horsepower2: {
        en: "237 HP",
        it: "237 CV",
        du: "237 PK",
        fr: "237 CH",
      },
      mpg: {
        en: "40 MPG",
        it: "40 MPG",
        du: "40 MPG",
        fr: "40 MPG",
      },
      carMake: {
        en: "Mercedes",
        it: "Mercedes",
        du: "Mercedes",
        fr: "Mercedes",
      },
      topSpeed: {
        en: "130 MPH",
        it: "130 MPH",
        du: "130 MPH",
        fr: "130 MPH",
      },
      seatingCapacity: {
        en: "5+2",
        it: "5+2",
        du: "5+2",
        fr: "5+2",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },

      img: Class2,
      img2: Mercedeslogo,
    },
    {
      id: 3,
      title: {
        en: "Mercedes-Benz S-Class",
        it: "Mercedes-Benz S-Class",
        du: "Mercedes-Benz S-Klasse",
        fr: "Mercedes-Benz Classe S",
      },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Super White",
        it: "Super Bianco",
        du: "Super Wit",
        fr: "Super Blanc",
      },
      horsepower2: {
        en: "510 HP",
        it: "510 CV",
        du: "510 PK",
        fr: "510 CH",
      },
      mpg: {
        en: "32 MPG",
        it: "32 MPG",
        du: "32 MPG",
        fr: "32 MPG",
      },
      carMake: {
        en: "Mercedes",
        it: "Mercedes",
        du: "Mercedes",
        fr: "Mercedes",
      },
      topSpeed: {
        en: "155 MPH",
        it: "155 MPH",
        du: "155 MPH",
        fr: "155 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },

      img: Class3,
      img2: Mercedeslogo,
    },
    {
      id: 4,
      title: {
        en: "Ferrari 296 GTS (Cabrio)",
        it: "Ferrari 296 GTS (Cabrio)",
        du: "Ferrari 296 GTS (Cabrio)",
        fr: "Ferrari 296 GTS (Cabrio)",
      },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Rosso Corsa",
        it: "Rosso Corsa",
        du: "Rosso Corsa",
        fr: "Rosso Corsa",
      },
      horsepower2: {
        en: "820 HP",
        it: "820 CV",
        du: "820 PK",
        fr: "820 CH",
      },
      mpg: {
        en: "22 MPG",
        it: "22 MPG",
        du: "22 MPG",
        fr: "22 MPG",
      },
      carMake: {
        en: "Ferarri (2025)",
        it: "Ferarri (2025)",
        du: "Ferarri (2025)",
        fr: "Ferarri (2025)",
      },
      topSpeed: {
        en: "205 MPH",
        it: "205 MPH",
        du: "205 MPH",
        fr: "205 MPH",
      },
      seatingCapacity: {
        en: "2",
        it: "2",
        du: "2",
        fr: "2",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },

      img: Class4,
      img2: Ferarrilogo,
    },
    {
      id: 5,
      title: {
        en: "Portofino Spyder (Cabrio)",
        it: "Portofino Spyder (Cabrio) ",
        du: "Portofino Spyder (Cabrio) ",
        fr: "Portofino Spyder (Cabrio) ",
      },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Rosso Corsa",
        it: "Rosso Corsa",
        du: "Rosso Corsa",
        fr: "Rosso Corsa",
      },
      horsepower2: {
        en: "600 HP",
        it: "600 CV",
        du: "600 PK",
        fr: "600 CH",
      },
      mpg: {
        en: "18 MPG",
        it: "18 MPG",
        du: "18 MPG",
        fr: "18 MPG",
      },
      carMake: {
        en: "Ferarri (2021)",
        it: "Ferarri (2021)",
        du: "Ferarri (2021)",
        fr: "Ferarri (2021)",
      },
      topSpeed: {
        en: "199 MPH ",
        it: "199 MPH",
        du: "199 MPH",
        fr: "199 MPH",
      },
      seatingCapacity: {
        en: "2+2",
        it: "2+2",
        du: "2+2",
        fr: "2+2",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },
      img: Class5,
      img2: Ferarrilogo,
    },
    {
      id: 6,
      title: {
        en: "Huracan Sterrato (Cabrio)",
        it: "Huracan Sterrato (Cabrio)",
        du: "Huracan Sterrato (Cabrio)",
        fr: "Huracan Sterrato (Cabrio)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Satin Orange",
        it: "Arancio Satinato", // Italian translation for Satin Orange
        du: "Satin Oranje", // Dutch translation for Satin Orange
        fr: "Orange Satiné", // French translation for Satin Orange
      },

      horsepower2: {
        en: "610 HP",
        it: "610 CV",
        du: "610 PK",
        fr: "610 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "Lamborghini (2024)",
        it: "Lamborghini (2024)",
        du: "Lamborghini (2024)",
        fr: "Lamborghini (2024)",
      },

      topSpeed: {
        en: "160 MPH ",
        it: "160 MPH",
        du: "160 MPH",
        fr: "160 MPH",
      },
      seatingCapacity: {
        en: "2",
        it: "2",
        du: "2",
        fr: "2",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },
      img: Class6,
      img2: Lambologo,
    },

    {
      id: 7,
      title: {
        en: "Huracan Tecnica (Cabrio)",
        it: "Huracan Tecnica (Cabrio)",
        du: "Huracan Tecnica (Cabrio)",
        fr: "Huracan Tecnica (Cabrio)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Green Mantis",
        it: "Verde Mantis", // Italian translation for Green Mantis
        du: "Groen Mantis", // Dutch translation for Green Mantis
        fr: "Vert Mantis", // French translation for Green Mantis
      },

      horsepower2: {
        en: "640 HP",
        it: "640 CV",
        du: "640 PK",
        fr: "640 CH",
      },
      mpg: {
        en: "18 MPG",
        it: "18 MPG",
        du: "18 MPG",
        fr: "18 MPG",
      },
      carMake: {
        en: "Lamborghini (2024)",
        it: "Lamborghini (2024)",
        du: "Lamborghini (2024)",
        fr: "Lamborghini (2024)",
      },

      topSpeed: {
        en: "202 MPH ",
        it: "202 MPH",
        du: "202 MPH",
        fr: "202 MPH",
      },
      seatingCapacity: {
        en: "2",
        it: "2",
        du: "2",
        fr: "2",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },
      img: Class7,
      img2: Lambologo,
    },
    {
      id: 8,
      title: {
        en: "Huracan Evo Spyder (Cabrio)",
        it: "Huracan Evo Spyder (Cabrio)",
        du: "Huracan Evo Spyder (Cabrio)",
        fr: "Huracan Evo Spyder (Cabrio)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Green Mantis",
        it: "Verde Mantis", // Italian translation for Green Mantis
        du: "Groen Mantis", // Dutch translation for Green Mantis
        fr: "Vert Mantis", // French translation for Green Mantis
      },

      horsepower2: {
        en: "640 HP",
        it: "640 CV",
        du: "640 PK",
        fr: "640 CH",
      },
      mpg: {
        en: "18 MPG",
        it: "18 MPG",
        du: "18 MPG",
        fr: "18 MPG",
      },
      carMake: {
        en: "Lamborghini (2024)",
        it: "Lamborghini (2024)",
        du: "Lamborghini (2024)",
        fr: "Lamborghini (2024)",
      },

      topSpeed: {
        en: "202 MPH ",
        it: "202 MPH",
        du: "202 MPH",
        fr: "202 MPH",
      },
      seatingCapacity: {
        en: "2",
        it: "2",
        du: "2",
        fr: "2",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },
      img: Class8,
      img2: Lambologo,
    },
    {
      id: 9,
      title: {
        en: "Huracan Performante (Cabrio)",
        it: "Huracan Performante (Cabrio)",
        du: "Huracan Performante (Cabrio)",
        fr: "Huracan Performante (Cabrio)",
      },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "White",
        it: "Bianco", // Italian translation for White
        du: "Wit", // Dutch translation for White
        fr: "Blanc", // French translation for White
      },

      horsepower2: {
        en: "640 HP",
        it: "640 CV",
        du: "640 PK",
        fr: "640 CH",
      },
      mpg: {
        en: "18 MPG",
        it: "18 MPG",
        du: "18 MPG",
        fr: "18 MPG",
      },
      carMake: {
        en: "Lamborghini (2019)",
        it: "Lamborghini (2019)",
        du: "Lamborghini (2019)",
        fr: "Lamborghini (2019)",
      },

      topSpeed: {
        en: "201 MPH ",
        it: "201 MPH",
        du: "201 MPH",
        fr: "201 MPH",
      },
      seatingCapacity: {
        en: "2",
        it: "2",
        du: "2",
        fr: "2",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },
      img: Class9,
      img2: Lambologo,
    },
    {
      id: 10,
      title: {
        en: "Urus S - SUV",
        it: "Urus S - SUV",
        du: "Urus S - SUV",
        fr: "Urus S - SUV",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "666 HP",
        it: "666 CV",
        du: "666 PK",
        fr: "666 CH",
      },
      mpg: {
        en: "18 MPG",
        it: "18 MPG",
        du: "18 MPG",
        fr: "18 MPG",
      },
      carMake: {
        en: "Lamborghini (2024)",
        it: "Lamborghini (2024)",
        du: "Lamborghini (2024)",
        fr: "Lamborghini (2024)",
      },

      topSpeed: {
        en: "190 MPH ",
        it: "190 MPH",
        du: "190 MPH",
        fr: "190 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },
      img: Class10,
      img2: Lambologo,
    },
    {
      id: 11,
      title: {
        en: "Urus S - SUV",
        it: "Urus S - SUV",
        du: "Urus S - SUV",
        fr: "Urus S - SUV",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Blue",
        it: "Blu Metallizzato", // Italian translation for Metallic Blue
        du: "Metaal Blauw", // Dutch translation for Metallic Blue
        fr: "Bleu Métallique", // French translation for Metallic Blue
      },

      horsepower2: {
        en: "666 HP",
        it: "666 CV",
        du: "666 PK",
        fr: "666 CH",
      },
      mpg: {
        en: "18 MPG",
        it: "18 MPG",
        du: "18 MPG",
        fr: "18 MPG",
      },
      carMake: {
        en: "Lamborghini (2024)",
        it: "Lamborghini (2024)",
        du: "Lamborghini (2024)",
        fr: "Lamborghini (2024)",
      },

      topSpeed: {
        en: "190 MPH ",
        it: "190 MPH",
        du: "190 MPH",
        fr: "190 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline
        du: "Premium Benzine", // Dutch translation for Premium Gasoline
        fr: "Essence Premium", // French translation for Premium Gasoline
      },
      img: Class11,
      img2: Lambologo,
    },
    {
      id: 12,
      title: {
        en: "Continental GTC (Cabrio)",
        it: "Continental GTC (Cabrio)",
        du: "Continental GTC (Cabrio)",
        fr: "Continental GTC (Cabrio)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic White",
        it: "Bianco Metallizzato", // Italian translation for Metallic White
        du: "Metaal Wit", // Dutch translation for Metallic White
        fr: "Blanc Métallique", // French translation for Metallic White
      },

      horsepower2: {
        en: "782 HP",
        it: "782 CV",
        du: "782 PK",
        fr: "782 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "Bentley (2025)",
        it: "Bentley (2025)",
        du: "Bentley (2025)",
        fr: "Bentley (2025)",
      },

      topSpeed: {
        en: "207 MPH ",
        it: "207 MPH",
        du: "207 MPH",
        fr: "207 MPH",
      },
      seatingCapacity: {
        en: "2+2",
        it: "2+2",
        du: "2+2",
        fr: "2+2",
      },
      fuelType: {
        en: "Premium Gasoline (Hybrid)",
        it: "Benzina Premium (Ibrido)", // Italian translation for Premium Gasoline (Hybrid)
        du: "Premium Benzine (Hybride)", // Dutch translation for Premium Gasoline (Hybrid)
        fr: "Essence Premium (Hybride)", // French translation for Premium Gasoline (Hybrid)
      },
      img: Class12,
      img2: Bentlogo,
    },
    {
      id: 13,
      title: {
        en: "Cayenne E-Hybrid (SUV)",
        it: "Cayenne E-Hybrid (SUV)",
        du: "Cayenne E-Hybrid (SUV)",
        fr: "Cayenne E-Hybrid (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "White",
        it: "Bianco", // Italian translation for White
        du: "Wit", // Dutch translation for White
        fr: "Blanc", // French translation for White
      },

      horsepower2: {
        en: "470 HP",
        it: "470 CV",
        du: "470 PK",
        fr: "470 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "Porsche (2024)",
        it: "Porsche (2024)",
        du: "Porsche (2024)",
        fr: "Porsche (2024)",
      },

      topSpeed: {
        en: "157 MPH ",
        it: "157 MPH",
        du: "157 MPH",
        fr: "157 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Premium Gasoline (Hybrid)",
        it: "Benzina Premium (Ibrido)", // Italian translation for Premium Gasoline (Hybrid)
        du: "Premium Benzine (Hybride)", // Dutch translation for Premium Gasoline (Hybrid)
        fr: "Essence Premium (Hybride)", // French translation for Premium Gasoline (Hybrid)
      },
      img: Class13,
      img2: Porschelogo,
    },
    {
      id: 14,
      title: {
        en: "911 Carrera 4S (Cabrio)",
        it: "911 Carrera 4S (Cabrio)",
        du: "911 Carrera 4S (Cabrio)",
        fr: "911 Carrera 4S (Cabrio)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "White",
        it: "Bianco", // Italian translation for White
        du: "Wit", // Dutch translation for White
        fr: "Blanc", // French translation for White
      },

      horsepower2: {
        en: "450 HP",
        it: "450 CV",
        du: "450 PK",
        fr: "450 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "Porsche (2022)",
        it: "Porsche (2022)",
        du: "Porsche (2022)",
        fr: "Porsche (2022)",
      },

      topSpeed: {
        en: "191 MPH ",
        it: "191 MPH",
        du: "191 MPH",
        fr: "191 MPH",
      },
      seatingCapacity: {
        en: "2+2",
        it: "2+2",
        du: "2+2",
        fr: "2+2",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium", // Italian translation for Premium Gasoline (Hybrid)
        du: "Premium Benzine", // Dutch translation for Premium Gasoline (Hybrid)
        fr: "Essence Premium", // French translation for Premium Gasoline (Hybrid)
      },
      img: Class14,
      img2: Porschelogo,
    },
    {
      id: 15,
      title: {
        en: "X7 40d Msport (SUV)",
        it: "X7 40d Msport (SUV)",
        du: "X7 40d Msport (SUV)",
        fr: "X7 40d Msport (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "340 HP",
        it: "340 CV",
        du: "340 PK",
        fr: "340 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "BMW (2024)",
        it: "BMW (2024)",
        du: "BMW (2024)",
        fr: "BMW (2024)",
      },

      topSpeed: {
        en: "152 MPH ",
        it: "152 MPH",
        du: "152 MPH",
        fr: "152 MPH",
      },
      seatingCapacity: {
        en: "2+5",
        it: "2+5",
        du: "2+5",
        fr: "2+5",
      },
      fuelType: {
        en: "Diesel",
        it: "Diesel", // Italian translation for Diesel
        du: "Diesel", // Dutch translation for Diesel
        fr: "Diesel", // French translation for Diesel
      },
      img: Class15,
      img2: BMWlogo,
    },
    {
      id: 16,
      title: {
        en: "X5 30d Msport (SUV)",
        it: "X5 30d Msport (SUV)",
        du: "X5 30d Msport (SUV)",
        fr: "X5 30d Msport (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "White",
        it: "Bianco", // Italian translation for White
        du: "Wit", // Dutch translation for White
        fr: "Blanc", // French translation for White
      },

      horsepower2: {
        en: "285 HP",
        it: "285 CV",
        du: "285 PK",
        fr: "285 CH",
      },
      mpg: {
        en: "30 MPG",
        it: "30 MPG",
        du: "30 MPG",
        fr: "30 MPG",
      },
      carMake: {
        en: "BMW (2021)",
        it: "BMW (2021)",
        du: "BMW (2021)",
        fr: "BMW (2021)",
      },

      topSpeed: {
        en: "150 MPH ",
        it: "150 MPH",
        du: "150 MPH",
        fr: "150 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Diesel",
        it: "Diesel", // Italian translation for Diesel
        du: "Diesel", // Dutch translation for Diesel
        fr: "Diesel", // French translation for Diesel
      },
      img: Class16,
      img2: BMWlogo,
    },
    {
      id: 17,
      title: {
        en: "Range Rover Vogue (SUV)",
        it: "Range Rover Vogue (SUV)",
        du: "Range Rover Vogue (SUV)",
        fr: "Range Rover Vogue (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "350 HP",
        it: "350 CV",
        du: "350 PK",
        fr: "350 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "Land Rover (2024)",
        it: "Land Rover (2024)",
        du: "Land Rover (2024)",
        fr: "Land Rover (2024)",
      },

      topSpeed: {
        en: "130 MPH ",
        it: "130 MPH",
        du: "130 MPH",
        fr: "130 MPH",
      },
      seatingCapacity: {
        en: "2+5",
        it: "2+5",
        du: "2+5",
        fr: "2+5",
      },
      fuelType: {
        en: "Diesel",
        it: "Diesel", // Italian translation for Diesel
        du: "Diesel", // Dutch translation for Diesel
        fr: "Diesel", // French translation for Diesel
      },

      img: Class17,
      img2: Landroverlogo,
    },
    {
      id: 18,
      title: {
        en: "Range Rover Sport HSE (SUV)",
        it: "Range Rover Sport HSE (SUV)",
        du: "Range Rover Sport HSE (SUV)",
        fr: "Range Rover Sport HSE (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "249 HP",
        it: "249 CV",
        du: "249 PK",
        fr: "249 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "Land Rover (2024)",
        it: "Land Rover (2024)",
        du: "Land Rover (2024)",
        fr: "Land Rover (2024)",
      },

      topSpeed: {
        en: "130 MPH ",
        it: "130 MPH",
        du: "130 MPH",
        fr: "130 MPH",
      },
      seatingCapacity: {
        en: "2+5",
        it: "2+5",
        du: "2+5",
        fr: "2+5",
      },
      fuelType: {
        en: "Diesel",
        it: "Diesel", // Italian translation for Diesel
        du: "Diesel", // Dutch translation for Diesel
        fr: "Diesel", // French translation for Diesel
      },

      img: Class18,
      img2: Landroverlogo,
    },
    {
      id: 19,
      title: {
        en: "Range Rover Sport HSE (SUV)",
        it: "Range Rover Sport HSE (SUV)",
        du: "Range Rover Sport HSE (SUV)",
        fr: "Range Rover Sport HSE (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "249 HP",
        it: "249 CV",
        du: "249 PK",
        fr: "249 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "Land Rover (2023)",
        it: "Land Rover (2023)",
        du: "Land Rover (2023)",
        fr: "Land Rover (2023)",
      },

      topSpeed: {
        en: "130 MPH ",
        it: "130 MPH",
        du: "130 MPH",
        fr: "130 MPH",
      },
      seatingCapacity: {
        en: "2+5",
        it: "2+5",
        du: "2+5",
        fr: "2+5",
      },
      fuelType: {
        en: "Diesel",
        it: "Diesel", // Italian translation for Diesel
        du: "Diesel", // Dutch translation for Diesel
        fr: "Diesel", // French translation for Diesel
      },

      img: Class19,
      img2: Landroverlogo,
    },
    {
      id: 20,
      title: {
        en: "RS6 (Station Wagon)",
        it: "RS6 (Station Wagon)",
        du: "RS6 (Station Wagon)",
        fr: "RS6 (Station Wagon)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "600 HP",
        it: "600 CV",
        du: "600 PK",
        fr: "600 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "Audi (2021)",
        it: "Audi (2021)",
        du: "Audi (2021)",
        fr: "Audi (2021)",
      },

      topSpeed: {
        en: "174 MPH ",
        it: "174 MPH",
        du: "174 MPH",
        fr: "174 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium",
        du: "Premium Benzine",
        fr: "Essence Premium",
      },

      img: Class20,
      img2: Audilogo,
    },
    {
      id: 21,
      title: {
        en: "Q8 50TDI Sline (SUV)",
        it: "Q8 50TDI Sline (SUV)",
        du: "Q8 50TDI Sline (SUV)",
        fr: "Q8 50TDI Sline (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "286 HP",
        it: "286 CV",
        du: "286 PK",
        fr: "286 CH",
      },
      mpg: {
        en: "20 MPG",
        it: "20 MPG",
        du: "20 MPG",
        fr: "20 MPG",
      },
      carMake: {
        en: "Audi (2024)",
        it: "Audi (2024)",
        du: "Audi (2024)",
        fr: "Audi (2024)",
      },

      topSpeed: {
        en: "155 MPH ",
        it: "155 MPH",
        du: "155 MPH",
        fr: "155 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Diesel",
        it: "Diesel",
        du: "Diesel",
        fr: "Diesel",
      },
      img: Class21,
      img2: Audilogo,
    },
    {
      id: 22,
      title: {
        en: "Q7 50TDI Sline (SUV)",
        it: "Q7 50TDI Sline (SUV)",
        du: "Q7 50TDI Sline (SUV)",
        fr: "Q7 50TDI Sline (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "286 HP",
        it: "286 CV",
        du: "286 PK",
        fr: "286 CH",
      },
      mpg: {
        en: "30 MPG",
        it: "30 MPG",
        du: "30 MPG",
        fr: "30 MPG",
      },
      carMake: {
        en: "Audi (2024)",
        it: "Audi (2024)",
        du: "Audi (2024)",
        fr: "Audi (2024)",
      },

      topSpeed: {
        en: "155 MPH ",
        it: "155 MPH",
        du: "155 MPH",
        fr: "155 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Diesel",
        it: "Diesel",
        du: "Diesel",
        fr: "Diesel",
      },
      img: Class22,
      img2: Audilogo,
    },
    {
      id: 23,
      title: {
        en: "Q7 50TDI Sline (SUV)",
        it: "Q7 50TDI Sline (SUV)",
        du: "Q7 50TDI Sline (SUV)",
        fr: "Q7 50TDI Sline (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "286 HP",
        it: "286 CV",
        du: "286 PK",
        fr: "286 CH",
      },
      mpg: {
        en: "30 MPG",
        it: "30 MPG",
        du: "30 MPG",
        fr: "30 MPG",
      },
      carMake: {
        en: "Audi (2021)",
        it: "Audi (2021)",
        du: "Audi (2021)",
        fr: "Audi (2021)",
      },

      topSpeed: {
        en: "155 MPH ",
        it: "155 MPH",
        du: "155 MPH",
        fr: "155 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Diesel",
        it: "Diesel",
        du: "Diesel",
        fr: "Diesel",
      },
      img: Class23,
      img2: Audilogo,
    },
    {
      id: 24,
      title: {
        en: "G63 AMG (SUV)",
        it: "G63 AMG (SUV)",
        du: "G63 AMG (SUV)",
        fr: "G63 AMG (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "585 HP",
        it: "585 CV",
        du: "585 PK",
        fr: "585 CH",
      },
      mpg: {
        en: "30 MPG",
        it: "30 MPG",
        du: "30 MPG",
        fr: "30 MPG",
      },
      carMake: {
        en: "Mercedes (2025)",
        it: "Mercedes (2025)",
        du: "Mercedes (2025)",
        fr: "Mercedes (2025)",
      },

      topSpeed: {
        en: "137 MPH ",
        it: "137 MPH",
        du: "137 MPH",
        fr: "137 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium",
        du: "Premium Benzine",
        fr: "Essence Premium"
    },    
      img: Class24,
      img2: Mercedeslogo,
    },
    {
      id: 25,
      title: {
        en: "G63 AMG (SUV)",
        it: "G63 AMG (SUV)",
        du: "G63 AMG (SUV)",
        fr: "G63 AMG (SUV)",
      },

      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "585 HP",
        it: "585 CV",
        du: "585 PK",
        fr: "585 CH",
      },
      mpg: {
        en: "30 MPG",
        it: "30 MPG",
        du: "30 MPG",
        fr: "30 MPG",
      },
      carMake: {
        en: "Mercedes (2025)",
        it: "Mercedes (2025)",
        du: "Mercedes (2025)",
        fr: "Mercedes (2025)",
      },

      topSpeed: {
        en: "137 MPH ",
        it: "137 MPH",
        du: "137 MPH",
        fr: "137 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Premium Gasoline",
        it: "Benzina Premium",
        du: "Premium Benzine",
        fr: "Essence Premium"
    },    
      img: Class25,
      img2: Mercedeslogo,
    },
    {
      id: 26,
      title: {
        en: "GLE AMG line (SUV)",
        it: "GLE AMG line (SUV)",
        du: "GLE AMG line (SUV)",
        fr: "GLE AMG line (SUV)"
    },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Metallic Black",
        it: "Nero Metallizzato", // Italian translation for Metallic Black
        du: "Metaal Zwart", // Dutch translation for Metallic Black
        fr: "Noir Métallique", // French translation for Metallic Black
      },

      horsepower2: {
        en: "289 HP",
        it: "289 CV",
        du: "289 PK",
        fr: "289 CH",
      },
      mpg: {
        en: "23 MPG",
        it: "23 MPG",
        du: "23 MPG",
        fr: "23 MPG",
      },
      carMake: {
        en: "Mercedes (2024)",
        it: "Mercedes (2024)",
        du: "Mercedes (2024)",
        fr: "Mercedes (2024)",
      },

      topSpeed: {
        en: "155 MPH ",
        it: "155 MPH",
        du: "155 MPH",
        fr: "155 MPH",
      },
      seatingCapacity: {
        en: "2+3",
        it: "2+3",
        du: "2+3",
        fr: "2+3",
      },
      fuelType: {
        en: "Diesel",
        it: "Diesel",
        du: "Diesel",
        fr: "Diesel"
    },
      img: Class26,
      img2: Mercedeslogo,
    },
  ];

  const handleCardClick = (card) => {
    console.log("Card clicked:", card);
    setSelectedCard(card);
  };

  // Get current cards
  const paginate = (pageNumber) => {
    const maxPages = Math.ceil(cardsData.length / cardsPerPage);
    if (pageNumber > 0 && pageNumber <= maxPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => {
    const maxPages = Math.ceil(cardsData.length / cardsPerPage);
    if (currentPage < maxPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Determine cards to show based on current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate the range of pagination buttons to show
  const maxPages = Math.ceil(cardsData.length / cardsPerPage);
  const paginationRange = [];

  if (maxPages <= 3) {
    // If there are fewer than 3 pages, show all of them
    paginationRange.push(...Array.from({ length: maxPages }, (_, i) => i + 1));
  } else {
    // Show only 3 pages at a time
    if (currentPage === 1) {
      paginationRange.push(1, 2, 3);
    } else if (currentPage === maxPages) {
      paginationRange.push(maxPages - 2, maxPages - 1, maxPages);
    } else {
      paginationRange.push(currentPage - 1, currentPage, currentPage + 1);
    }
  }

  return (
    <div>
      <h1 className="transfer_service_heading1">
        {language === "en"
          ? "Experience elegance and comfort"
          : language === "it"
          ? "Sperimenta eleganza e comfort"
          : language === "du"
          ? "Ervaar elegantie en comfort"
          : language === "fr"
          ? "Découvrez l'élégance et le confort"
          : "Experience elegance and comfort"}
      </h1>
      <h1 className="transfer_service_heading2">
        {language === "en"
          ? "Sense the Pulse of Perfection on Every Mile You Travel."
          : language === "it"
          ? "Senti il battito della perfezione in ogni miglio che percorri."
          : language === "du"
          ? "Voel de pols van perfectie op elke mijl die je reist."
          : language === "fr"
          ? "Sentez le pouls de la perfection à chaque kilomètre que vous parcourez."
          : "Sense the Pulse of Perfection on Every Mile You Travel."}
      </h1>

      <div className="cards_div_transfer">
        {currentCards.map((card) => (
          <div key={card.id} className="card_transfer12 custom_height_card">
            <img
              src={card.img2}
              alt="Logo"
              style={{ position: "absolute", top: "10px", left: "10px" }}
            />{" "}
            <img className="card_transfer1_img1" src={card.img} alt="cards_1" />
            <h4>{card.title[language]}</h4>
            <div className="card_specs_div">
              <div className="icon_specs_div" style={{ gap: "15px" }}>
                <div
                  className="testing_123"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  <i
                    className="fas fa-palette"
                    style={{ width: "20px", textAlign: "center" }}
                  ></i>
                  <p style={{ margin: 0 }}>{card.color[language]}</p>
                </div>
                <div
                  className="testing_123"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  <i
                    className="fas fa-tachometer-alt"
                    style={{ width: "20px", textAlign: "center" }}
                  ></i>
                  <p style={{ margin: 0 }}>{card.horsepower[language]}</p>
                </div>
                <div
                  className="testing_123"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  <i
                    className="fas fa-road"
                    style={{ width: "20px", textAlign: "center" }}
                  ></i>
                  <p style={{ margin: 0 }}>{card.miles[language]}</p>
                </div>
              </div>
              <div className="icon_specs_div" style={{ gap: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <p
                    className="card_specs_p1"
                    style={{ margin: 0, textAlign: "left" }}
                  >
                    {card.obsidianBlack[language]}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <p
                    className="card_specs_p1"
                    style={{ margin: 0, textAlign: "left" }}
                  >
                    {card.horsepower2[language]}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <p
                    className="card_specs_p1"
                    style={{ margin: 0, textAlign: "left" }}
                  >
                    {card.mpg[language]}
                  </p>
                </div>
              </div>
            </div>
            <div className="last_rent_now_div">
              <Link to="/rentluxuryforward">
                <h4 onClick={() => handleCardClick(card)}>
                  {language === "en"
                    ? "Rent Now"
                    : language === "it"
                    ? "Noleggia ora"
                    : language === "du"
                    ? "Huur nu"
                    : language === "fr"
                    ? "Louer maintenant"
                    : "Rent Now"}
                </h4>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5px",
          gap: "10px",
          paddingBottom: "20px",
        }}
      >
        <button
          onClick={prevPage}
          disabled={currentPage === 1} // Disable previous button on first page
          style={{
            padding: "5px 10px",
            backgroundColor: "#fff",
            border: "1px solid #05021f",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {paginationRange.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              padding: "5px 15px",
              backgroundColor: currentPage === number ? "#05021f" : "#fff",
              color: currentPage === number ? "#fff" : "#000",
              border: "1px solid #05021f",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {number}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === maxPages} // Disable next button on last page
          style={{
            padding: "5px 10px",
            backgroundColor: "#fff",
            border: "1px solid #05021f",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Transfercards;

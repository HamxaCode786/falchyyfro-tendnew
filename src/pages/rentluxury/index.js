import React from "react";
import Luxury from "../../components/rentluxury/rentluxury";
import Contactcard2 from "../../components/transferservice/contactcard";
import Caraouselluxury from "../../components/caraousel/carousalrentluxury";
import Customcars from '../../components/customcar/customcars'


const Rentluxury = () => {
  return (
    <div>
      <Caraouselluxury />
      <Luxury />
      <Customcars />
      
    </div>
  );
};

export default Rentluxury;

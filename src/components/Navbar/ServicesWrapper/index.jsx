import React from "react";
import { servicesData } from "../../../Data/data";

const ServicesWrapper = () => {
  return (
    <div>
      {servicesData.map((data) => (
        <ul>
          <li>{data.title} {data.description1}</li>
          
        </ul>
      ))}
    </div>
  );
};

export default ServicesWrapper;

import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-16">
      <div className="text-center">
        <h4 className="font-bold text-red-600">Service</h4>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p className="text-stone-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto mt-10">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
        
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;

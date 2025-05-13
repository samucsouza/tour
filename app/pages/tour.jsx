'use client';

import React, { useEffect, useState } from "react";
import { getAllCountries } from "@/app/services";
import Card from "@/app/components/ui/Card";


const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado de carregamento

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCountries();
      setCountries(data);
      setLoading(false);  // Quando os dados forem carregados, desativa o carregamento
    };
    fetchData();
  }, []); 

  if (loading) {
    return <div>Carregando países...</div>;  // Exibe enquanto os dados são carregados
  }

  return (
    <>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {countries?.map((country, index) => (
          <Card 
            key={index}
            title={country?.name?.common}
            description={`Capital: ${country?.capital ? country?.capital[0] : "N/A"}`}
            onButtonClick={() => alert(`Você clicou no ${country?.name?.common}`)}
          />
        ))}
      </div>
    </div>
    
    </>
  );
};

export default CountryList;

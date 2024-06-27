"use client";

import { Coffee as CoffeeTemperature } from "../type/Coffee";

export interface CoffeeAPIResponse {
  title: string;
  description: string;
  image: string;
  ingredients?: string[];
  id: string;
  tags: string[];
}

interface ApiMappingProps {
  apiUrl: string;
}

const mapping: Record<CoffeeTemperature, ApiMappingProps> = {
  HOT: { apiUrl: "https://cof.cny.sh/hot" },
  ICED: { apiUrl: "https://cof.cny.sh/iced" },
};

export const fetchCoffeeData = async (coffeeType: CoffeeTemperature) => {
  const fetchedData = await fetch(mapping[coffeeType].apiUrl);
  const data = await fetchedData.json();

  return data as CoffeeAPIResponse[];
};

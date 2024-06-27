"use client";

import React from "react";
import { CustomButton } from "./component/Button";
import { CoffeeCard } from "./component/CoffeCard";
import { CoffeeAPIResponse, fetchCoffeeData } from "./lib/utils";
import { Coffee } from "./type/Coffee";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [coffeeData, setCoffeeData] = React.useState<
    CoffeeAPIResponse[] | null
  >(null);

  const fetchCoffee = async (coffeeType: Coffee) => {
    setIsLoading(true);
    const fetchedData = await fetchCoffeeData(coffeeType);
    setCoffeeData(fetchedData);

    setIsLoading(false);
  };

  return (
    <>
      <div className="flex gap-3">
        <CustomButton onClick={() => fetchCoffee("ICED")} text={"ICED"} />
        <CustomButton onClick={() => fetchCoffee("HOT")} text={"HOT"} />
      </div>

      {isLoading ? (
        <p>Lädt...</p>
      ) : (
        <div className="flex flex-col gap-6">
          {coffeeData?.map((singleCoffee) => (
            <CoffeeCard {...singleCoffee} />
          ))}
        </div>
      )}
    </>
  );
}

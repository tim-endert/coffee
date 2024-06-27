import { CoffeeAPIResponse } from "../lib/utils";

export const CoffeeCard = ({
  title,
  description,
  image,
  ingredients,
}: CoffeeAPIResponse) => {
  return (
    <div className="bg-white rounded-lg py-6 px-4 shadow-lg">
      <img src={image} alt={title} className="object-cover h-96 w-full" />
      <p className="text-xl font-bold text-red-600 mt-3">{title}</p>
      <p className="text-red-800 text-sm">{description}</p>
      <ul>
        {ingredients?.map((singleIngredient) => (
          <li>{singleIngredient}</li>
        ))}
      </ul>
    </div>
  );
};

import { MouseEventHandler } from "react";

interface CustomButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton = ({ text, onClick }: CustomButtonProps) => {
  return (
    <button onClick={onClick} className="bg-zinc-700 py-3 px-2">
      {text}
    </button>
  );
};

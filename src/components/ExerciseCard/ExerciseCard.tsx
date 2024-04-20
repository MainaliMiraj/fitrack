import React from "react";
import Image from "next/image";

interface ExerciseProps {
  image: string;
  name: string;
  repetitions: number;
  sets: number;
  description?: string;
}

const ExerciseCard: React.FC<ExerciseProps> = ({
  image,
  name,
  repetitions,
  sets,
  description = "",
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">
          Repetitions: {repetitions}
        </p>
        <p className="text-gray-700 text-base mb-2">Sets: {sets}</p>
        {description && (
          <p className="text-gray-700 text-base mb-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;

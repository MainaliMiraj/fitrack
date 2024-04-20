import BmiCalculator from "@/components/BMICalculator/BmiCalculator";
import SearchExercise from "@/components/SearchExercise/SearchExercise";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-2 p-4 ">
      <SearchExercise />
      <BmiCalculator />
    </div>
  );
}

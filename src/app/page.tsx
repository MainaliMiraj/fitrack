import BmiCalculator from "@/components/BMICalculator/BmiCalculator";
import SearchExercise from "@/components/SearchExercise/SearchExercise";
import ExerciseBox from "@/components/ExerciseBox/ExerciseBox";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-2 p-4 ">
      <SearchExercise />
      <ExerciseBox/>
      <BmiCalculator />
    </div>
  );
}

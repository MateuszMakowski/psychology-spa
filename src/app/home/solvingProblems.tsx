import React from "react";
import Carousel from "../components/carousel";

export default function SolvingProblems() {
  return (
    <div className="bg-neutral py-20">
      <div className="container mx-auto h-full items-center">
        <div className="px-6">
          <h2 className="mb-20 md:w-2/3 font-normal">
            Pomagam w różnych obszarach
            <span className="font-bold text-primary">
              {" "}
              Psychoterapii i Psychologii.
            </span>{" "}
            Poniżej znajdziesz przykładowe tematy, nad którymi możemy wspólnie
            pracować.
          </h2>
          <div className="block">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

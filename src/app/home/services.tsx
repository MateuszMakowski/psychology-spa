import Image from "next/image";
import brain from "../assets/Brain icon.svg";
import lightbulb from "../assets/Light bulb icon.svg";
import run from "../assets/Run icon.svg";

export default function Services() {
  return (
    <div className="">
      <div className="text-center">
        <h4>Usługi</h4>
        <h3 className="pb-10">Zobacz, jak mogę Ci pomóc</h3>
      </div>
      <div className="justify-center flex">
        <div className="md:flex gap-y-10 md:gap-y-0 grid md:gap-x-5 lg:gap-x-10 lg:w-3/4 mx-10 md:mx-5 lg:mx-0">
          <div className="md:w-1/3 bg-accent px-7 rounded-3xl pt-2 text-center shadow-2xl">
            <div className="justify-center flex py-7">
              <Image src={brain} alt={"Brain Icon"} height={70}></Image>
            </div>
            <h3 className=" pb-5">Konsultacje Psychologiczne</h3>
            <h4 className="pb-7 font-normal">
              Konsultacja psychologiczna to pierwszy krok w zrozumieniu Twoich
              trudności i wyzwań. W trakcie spotkań pomagam zidentyfikować
              problemy i wspólnie szukamy możliwych dróg wsparcia. Konsultacje
              są idealne dla osób, które potrzebują jednorazowej porady lub
              zastanawiają się nad rozpoczęciem terapii.
            </h4>
          </div>
          <div className="md:w-1/3 bg-accent px-7 rounded-3xl pt-2 text-center shadow-2xl">
            <div className="justify-center flex py-7">
              <Image
                src={lightbulb}
                alt={"Light bulb Icon"}
                height={70}
              ></Image>
            </div>
            <h3 className="pb-5">Psychoterapia TSR</h3>
            <h4 className="pb-7 font-normal">
              Terapia Skoncentrowana na Rozwiązaniach (TSR) to krótkoterminowe
              podejście terapeutyczne, które koncentruje się na Twoich zasobach
              i możliwościach. Skupiamy się na przyszłości i konkretnych celach,
              które chcesz osiągnąć. TSR pomaga szybko znaleźć skuteczne
              rozwiązania i wprowadzać zmiany w życiu.
            </h4>
          </div>
          <div className="md:w-1/3 bg-accent px-7 rounded-3xl pt-2 text-center shadow-2xl">
            <div className="justify-center flex py-7">
              <Image src={run} alt={"Run Icon"} height={70}></Image>
            </div>
            <h3 className="pb-5">Psychologia Sportu</h3>
            <h4 className="pb-7 font-normal">
              Psychologia sportu wspiera sportowców w osiąganiu optymalnej
              wydajności i radzeniu sobie z presją zawodów. Pracuję zarówno z
              profesjonalnymi sportowcami, jak i amatorami, pomagając w
              budowaniu motywacji, koncentracji oraz zarządzaniu stresem i
              emocjami.
            </h4>
          </div>
        </div>
      </div>
      <div className="justify-center flex my-7">
        <div className="bg-neutral rounded-full aspect-square w-16 h-16 items-center flex hover:w-40 active:w-40 transition-all ease-in-out duration-500 justify-center">
          <a href="https://www.znanylekarz.pl/karolina-buczek-makowska/psycholog/bielsko-biala">
            <button className="font-bold text-nowrap">Umów wizytę</button>
          </a>
        </div>
      </div>
    </div>
  );
}

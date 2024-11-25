import Image from "next/image";
import heroImg from "../assets/hero-img2.webp";
import znanyLekarzLogo from "../assets/znanyLekarzColor.svg";
import ratingStars from "../assets/rating-stars.svg";

export default function Hero() {
  return (
    <div className="relative md:h-screen max-h-[1200px] md:items-center text-center md:text-start flex mx-10 md:mx-0">
      <div className="absolute right-0 w-full md:w-4/5 lg:w-2/3 rounded-3xl md:rounded-l-[50px] md:rounded-none mt-2 md:top-32 md:justify-self-center h-3/4 bg-neutral -z-10 md:z-0 shadow-2xl"></div>
      <div className="container mx-auto md:flex px-6">
        <div className="flex justify-center md:justify-start">
          <div className="z-10  md:w-1/2 lg:w-2/3 grid">
            <div className="mt-10 md:mt-0 justify-self-center md:justify-self-start">
              <Image
                src={znanyLekarzLogo}
                alt="znany lekarz logo"
                height={12}
              ></Image>
              <a href="https://www.znanylekarz.pl/karolina-buczek-makowska/psycholog/bielsko-biala#profile-reviews">
                <div className="row flex  gap-x-1">
                  <Image
                    src={ratingStars}
                    alt="five star rating, najwyzsza jakosc, maksymalna ocena, piec gwazdek"
                  ></Image>
                  <h6 className="underline">30+ opinii</h6>
                </div>
              </a>
            </div>

            <h1 className="lg:w-2/3">
              Znajdź spokój i równowagę w codziennym życiu
            </h1>
            <h3 className="my-10">
              Każda osoba jest wyjątkowa. Razem odkryjemy twoją siłę, pokonamy
              trudności, co przyczyni się do poprawy jakości życia.
            </h3>
            <div className="justify-center md:justify-start flex md:block">
              <div className="bg-accent rounded-full aspect-square w-16 h-16 md:pl-7 items-center flex hover:w-40 active:w-40 transition-all ease-in-out duration-500 justify-center md:justify-start md:justify-self-start">
                <a href="https://www.znanylekarz.pl/karolina-buczek-makowska/psycholog/bielsko-biala">
                  <button className="font-bold text-nowrap ">
                    Umów wizytę
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={heroImg}
          alt="Zdjęcie profilowe Karolina Buczek-Makowska - Psycholog Bielsko-Biała"
          height={"500"}
          className="hidden z-10 md:block md:absolute bottom-0 right-0 lg:right-20"
        ></Image>
        <Image
          src={heroImg}
          alt="Zdjęcie profilowe Karolina Buczek-Makowska - Psycholog Bielsko-Biała"
          height={"250"}
          className="inline md:hidden z-10 mt-5  justify-self-center"
        ></Image>
      </div>
    </div>
  );
}

import Image from "next/image";
import znanyLekarzLogo from "../assets/znanyLekarz.svg";
import ratingStars from "../assets/rating-stars.svg";
import logoIcon from "../assets/logo-icon.png";
import logoText from "../assets/logo-text.png";

export default function Footer() {
  return (
    <div className="container mx-auto mt-32 mb-10">
      <div className="bg-neutral h-1 w-2/3 justify-self-center mb-10 rounded"></div>
      <div className="mx-5">
        <div className="justify-center md:justify-between flex flex-col md:flex-row">
          <div className="flex flex-nowrap justify-center">
            <Image
              src={logoIcon}
              alt="Karolina Buczek - Makowska - Psycholog Logo"
              height={"50"}
              className="pr-2"
            ></Image>
            <Image
              src={logoText}
              alt="Karolina Buczek - Makowska - Psycholog Logo"
              height={"50"}
              className="pr-8"
            ></Image>
          </div>
          <div className="flex justify-center md:hidden space-x-4 lg:space-x-14 items-center whitespace-nowrap justify-self-center py-16">
            <p>o mnie</p>
            <p>współpraca</p>
            <p>kontakt</p>
          </div>
          <div className="justify-center flex">
            <span className="flex flex-nowrap gap-x-4">
              <div>
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
              <a href="https://www.znanylekarz.pl/karolina-buczek-makowska/psycholog/bielsko-biala">
                <button className="flex row items-center px-5 py-3.5 bg-znanylekarz rounded-lg text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                  <Image
                    src={znanyLekarzLogo}
                    alt="znany lekarz logo"
                    height={16}
                  ></Image>
                </button>
              </a>
            </span>
          </div>
        </div>
        <div className="hidden md:flex space-x-4 lg:space-x-14 items-center whitespace-nowrap justify-self-center py-16">
          <p>o mnie</p>
          <p>współpraca</p>
          <p>kontakt</p>
        </div>
        <div className="justify-center md:justify-between md:flex text-text/50 py-10 md:py-0 gap-y-2 grid">
          <h5>Copyright © Karolina Buczek - Makowska</h5>
          <h5>Stworzone przez Mateusza Makowskiego</h5>
        </div>
      </div>
    </div>
  );
}

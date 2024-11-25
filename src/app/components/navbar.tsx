import Image from "next/image";
import logoIcon from "../assets/logo-icon.png";
import logoText from "../assets/logo-text.png";

import znanyLekarzLogo from "../assets/znanyLekarz.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string, offset: number = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop =
        document.documentElement.scrollTop || window.pageYOffset;
      const top = rect.top + scrollTop - offset; // Oblicz pozycję z offsetem

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="top-0 sticky md:fixed flex justify-between w-full z-20 px-0 md:px-5 lg:px-10 bg-neutral2">
      <div
        className={`hidden md:block transition-all ease-in-out duration-300 ${
          isScrolled ? "py-5" : "py-8"
        }`}
      >
        <div className="flex flex-nowrap">
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
      </div>
      <div className="block md:hidden p-5 pr-8">
        <div className="flex flex-nowrap">
          <Image
            src={logoIcon}
            alt="Karolina Buczek - Makowska - Psycholog Logo"
            height={"40"}
            className="mr-2"
          ></Image>
          <Image
            src={logoText}
            alt="Karolina Buczek - Makowska - Psycholog Logo"
            height={"50"}
            className="pr-8"
          ></Image>
        </div>
      </div>
      <div className="hidden md:flex row space-x-4 lg:space-x-14 items-center whitespace-nowrap">
        <p>
          <button
            onClick={() => scrollToSection("omnie", 100)} // Wywołanie z offsetem
          >
            o mnie
          </button>
        </p>
        <p>
          <button
            onClick={() => scrollToSection("współpraca", 100)} // Wywołanie z offsetem
          >
            współpraca
          </button>
        </p>
        <p>
          <button
            onClick={() => scrollToSection("kontakt", 100)} // Wywołanie z offsetem
          >
            kontakt
          </button>
        </p>
        <a href="https://www.znanylekarz.pl/karolina-buczek-makowska/psycholog/bielsko-biala">
          <button className="flex row items-center px-5 py-3.5 bg-znanylekarz rounded-lg text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
            <Image
              src={znanyLekarzLogo}
              alt="znany lekarz logo"
              height={16}
            ></Image>
          </button>
        </a>
      </div>
    </div>
  );
}

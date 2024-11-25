"use client";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Image from "next/image";
import znanyLekarz from "./assets/znanyLekarz.svg";
import HamburgerToggle from "./components/hamburgerToggle";
import MobileMenu from "./components/mobileMenu";
import Hero from "./home/hero";
import SolvingProblems from "./home/solvingProblems";
import About from "./home/about";
import Services from "./home/services";
import MeetingsFormat from "./home/meetingsFormat";
import Reviews from "./home/reviews";
import Contact from "./home/contact";
import { useRef } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScale, setIsScale] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (isDisabled) return;
    setIsDisabled(true);

    setIsOpen(!isOpen);

    if (isOpen) {
      setTimeout(() => {
        setIsScale(true);
      }, 500);
    } else {
      setIsScale(false);
    }

    setTimeout(() => {
      setIsDisabled(false);
    }, 500);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
      setIsScale(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id: string, offset: number = 0) => {
    if (sectionRef.current) {
      const container = sectionRef.current; // Kontener, w którym przewijasz
      const element = document.getElementById(id); // Element docelowy

      if (container && element) {
        // Oblicz pozycję kontenera i elementu
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        // Uwzględnij skalowanie
        const scaleFactor = isScale ? 1 : 0.75;

        // Oblicz przesunięcie docelowe względem kontenera
        const top =
          container.scrollTop + // Obecna pozycja przewinięcia kontenera
          (elementRect.top - containerRect.top) / scaleFactor - // Pozycja elementu względem kontenera
          offset;

        // Ustaw precyzyjne przewijanie
        container.scrollTo({
          top: top,
          behavior: "smooth",
        });

        console.log(`Scroll target top: ${top}, scaleFactor: ${scaleFactor}`);
      } else {
        console.error(`Element with id "${id}" not found.`);
      }
    } else {
      console.error("sectionRef.current is null.");
    }
  };

  return (
    <div
      className={`overflow-x-hidden relative ${
        isScale ? "bg-white" : "bg-neutral"
      }`}
    >
      <div className="fixed right-5 top-6 z-50 md:hidden">
        <HamburgerToggle isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <>
        <MobileMenu isOpen={isOpen} scrollToSection={scrollToSection} />
        <div
          className={`fixed bottom-16 left-10 transition-transform ease-in-out duration-500 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-60"
          }`}
        >
          <a href="https://www.znanylekarz.pl/karolina-buczek-makowska/psycholog/bielsko-biala">
            <button
              className={`px-6 py-3.5 bg-znanylekarz rounded-lg text-white font-bold transition-transform ease-in-out active:scale-90 `}
            >
              <Image
                src={znanyLekarz}
                alt="logo znany lekarz"
                width={"100"}
              ></Image>
            </button>
          </a>
        </div>
      </>

      <div
        className={`fixed md:hidden bg-white/50 transition-all transform duration-500 ease-in-out h-screen w-2/3
          ${
            isOpen
              ? "scale-[.7] translate-x-[12rem] translate-y-10"
              : "scale-100 translate-x-0 translate-y-0"
          } ${isScale ? "rounded-none" : "rounded-3xl"}
        `}
      ></div>
      <div
        ref={sectionRef}
        className={`md:hidden transition-transform duration-500 ease-in-out h-screen bg-white overflow-y-auto ${
          isOpen
            ? "scale-75 translate-x-[12rem] translate-y-10"
            : "scale-100 translate-x-0 translate-y-0"
        } ${isScale ? "rounded-none" : "rounded-3xl rounded-mask"}`}
        style={{
          clipPath: isScale ? "none" : "inset(0 round 30px)",
        }}
      >
        <>
          <Navbar />
          <main className="">
            <Hero />
            <SolvingProblems />
            <section id="omnieMobile">
              <About />
            </section>
            <section id="współpracaMobile">
              <Services />
            </section>

            <MeetingsFormat />
            <Reviews />
            <section id="kontaktMobile">
              <Contact />
            </section>
          </main>
          <Footer />
        </>
      </div>
      <div className="hidden md:block">
        <Navbar />
        <main>
          <Hero />
          <SolvingProblems />
          <div id="omnie">
            <About />
          </div>
          <div id="współpraca">
            <Services />
          </div>
          <MeetingsFormat />
          <Reviews />
          <div id="kontakt">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

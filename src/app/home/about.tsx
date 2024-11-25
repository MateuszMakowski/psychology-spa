import Image from "next/image";
import profileImg from "../assets/about-img.jpg";

export default function About() {
  // const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="row flex my-20 mx-auto container">
      <div className="md:w-2/3 mx-5">
        <h3 className="font-extralight">O mnie</h3>
        <h2>Indywidualne podejście, które przynosi rezultaty</h2>
        <div className="h-1 w-32 bg-primary my-7"></div>
        <div className="gap-y-5 grid">
          <p>Nazywam się Karolina Buczek-Makowska.</p>
          <p>
            Jestem psychologiem, a obecnie kształcę się w Szkole Psychoterapii
            Poznawczo-Behawioralnej Uniwersytetu SWPS w Katowicach pod
            kierownictwem dr hab. Agnieszki Popiel i dr Ewy Pragłowskiej.
          </p>

          <Image
            className="md:hidden place-self-center w-1/2"
            src={profileImg}
            alt={
              "Zdjęcie profilowe Karolina Buczek-Makowska - Psycholog Sportu Bielsko-Biała"
            }
            height={520}
          ></Image>

          <p>
            W swojej pracy korzystam również z technik Terapii Skoncentrowanej
            na Rozwiązaniach. Jest to rodzaj terapii krótkoterminowej, w której
            główny nacisk kładzie się na rozwiązywanie problemów, a nie na
            analizowaniu ich przyczyn. I i II stopień ukończyłam w Akademii
            Bliżej.
          </p>
          <p>
            Obszarem, w którym prężnie działam jest także psychologia sportu.
            Ukończyłam studia podyplomowe na kierunku Psychologia Sportu Dzieci
            i Młodzieży na Uniwersytecie SWPS w Katowicach.
          </p>
          <p>
            Podczas spotkań dokładam wszelkich starań, aby pacjent czuł się
            komfortowo i bezpiecznie.
          </p>
          <p>Pracuję z młodzieżą od 12. roku życia oraz osobami dorosłymi.</p>
        </div>
      </div>
      <div className="w-1/3 self-end hidden md:block">
        <Image
          src={profileImg}
          alt={
            "Zdjęcie profilowe Karolina Buczek-Makowska - Psycholog Sportu Bielsko-Biała"
          }
          height={520}
        ></Image>
      </div>
    </div>
  );
}

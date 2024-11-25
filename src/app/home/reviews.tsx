import Image from "next/image";
import stars from "../assets/stars.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../ui/globals.css";
export default function Reviews() {
  const reviews = [
    {
      author: "Wiktor",
      description: `Swoją współpracę z Panią Karoliną rozpocząłem pod koniec 2023 roku, od początku poczułem się bardzo komfortowo oraz byłem pod wrażeniem profesjonalizmu ze strony terapeuty. Moje wcześniejsze doświadczenia w pracy z psychologiem nie były dla mnie satysfakcjonujące natomiast tutaj byłem w stanie w pełni wyrazić swoje opinie i przemyślenia, czułem się wysłuchany. Pani Karolina pomogła mi poradzić sobie z bardzo ciężkim rozstaniem i uporządkować najważniejsze sprawy. Z pełną odpowiedzialnością polecam tego specjalistę każdemu, a w szczególności takim sceptykom jak ja :)`,
    },
    {
      author: "Paulina",
      description: `Od pierwszej wizyty syn był bardzo pozytywnie nastawiony do wizyt
              u pani Karoliny. Szybko złapali kontakt a po paru spotkaniach
              widać zmiane w zachowaniu syna na treningach. Nie ma wielu
              specjalistów dziecięcych w dziedzinie sportu ale trafiliśmy
              najlepiej jak mogliśmy. Jestem bardzo wdzięczna i szczerze polecam`,
    },
    {
      author: "Gabriela",
      description: `Z całego serducha polecamy Panią Karolinę!
Od pierwszego spotkania, zdobyła zaufanie naszej córy.
Do Pani Karoliny trafiliśmy z polecenia. Szukaliśmy kogoś, kto pokaże naszemu dziecku jak radzić sobie ze stresem, presją, jak odbudować się, po "słabszym" meczu.
Kilka spotkań i efekt niesamowity.
Świetnie, że mamy takiego dobrego specjalistę w Bielsku-Białej
Pani Karolino bardzo dziękujemy i życzymy wszystkiego dobrego. Jest Pani najlepsza!`,
    },
    {
      author: "Anna",
      description: `Pracowałam z Panią Karolina przez kilka miesięcy i z czystym sumieniem mogę polecić tą specjalistkę. Zawsze byłam wysłuchana, zrozumiana i czułam się lżej mogąc z siebie wszystko wyrzucić. Atmosfera na spotkaniach była bardzo przyjazna i domowa. Dzięki terapii lepiej poznałam sama siebie i dostałam narzędzia, aby pracować nad swoimi słabościami. Pani Karolina jest osobą empatyczną, serdeczna i zaangażowaną w swoją pracę. Serdecznie polecam!`,
    },
    {
      author: "JMG",
      description: `Pani Karolina jest godną zaufania profesjonalistką, pełną pozytywnej energii. Dzięki niej stałam się bardziej spełnioną kobietą, żoną i matką. Nawiązałam sama ze sobą więź, która mnie wzmocniła i daje siłę w trudnych chwilach. Nigdy nie czułam się oceniana co było dla mnie ważne. To dzięki niej wybaczyłam sobie swoje niedociągłości oraz zrozumiałam, że moje potrzeby też są ważne. Zawsze mnie wspierała i dodawała otuchy kiedy tego potrzebowałam. Gorąco polecam.`,
    },
    {
      author: "Maciej",
      description: `Od pierwszego spotkania czuć chęć pomocy pacjentowi. Bardzo indywidualne i profesjonalne podejście. Efekty są widoczne, a metody bardzo skuteczne i trafiające do pacjenta.`,
    },
    {
      author: "Jakub",
      description: `Pani Karolina jest bardzo sympatyczną osobą oraz kompetentnym specjalistą. Pomogła w rozwiązywaniu moich problemów. Zdecydowanie polecam!`,
    },
    {
      author: "Dominika",
      description: `Pani Karolina jest wyjątkowo skupiona na pacjencie oraz jego potrzebach. Pozwala się wygadać, nawet jeśli ktoś dostaje słowotoku i wydaje się, że wyrzuca z siebie myśli bez ładu i składu. Dzięki swej wnikliwości Pani Karolina potrafi dotrzeć do pacjenta, który czuje się bezpiecznie, a przede wszystkim jest zmotywowany do działania. Człowiek po wizycie u Pani Karoliny czuje się zaopiekowany i zrozumiany. Szczerze polecam.`,
    },
  ];
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      breakpoints={{
        // dla ekranów >= 1200px
        1200: {
          slidesPerView: 3,
        },
        // dla ekranów >= 576px (mobilne większe)
        576: {
          slidesPerView: 2,
        },
        // dla ekranów < 576px (telefony mniejsze)
        0: {
          slidesPerView: 1,
        },
      }}
      centeredSlides={false}
      autoplay={{
        delay: 0,
      }}
      speed={10000}
      freeMode={true}
      loop={true}
      modules={[Autoplay]}
      className="infinite-loop"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="p-5 gap-y-5 grid rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] my-20 mx-5">
            <div className="justify-between flex">
              <h5 className="font-bold">{review.author}</h5>

              <Image
                src={stars}
                alt={"Pięć gwiazdek na pięć oceny na stronie znanego lekarza"}
                className="h-5"
              ></Image>
            </div>
            <h5>{review.description}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

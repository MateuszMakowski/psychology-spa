import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel-styles.css";

export default function Carousel() {
  const problems = [
    {
      title: "Lęki",
      description: `Pomogę Ci zidentyfikować źródła lęku, zrozumieć mechanizmy go podtrzymujące oraz nauczę skutecznych sposobów radzenia sobie z nim.`,
    },
    {
      title: "Zaburzenia nastroju",
      description: `Pomogę w zrozumieniu przyczyn wahań/spadku nastroju, rozpoznamy nieadaptacyjne wzorce myślenia, które stopniowo będziemy zastępować tymi zdrowymi.`,
    },
    {
      title: "Emocje i Stres",
      description: `Pomogę w zrozumieniu, regulowaniu i wyrażaniu emocji w sposób, który nie rani Ciebie ani bliskich Ci osób. Nauczę Cię technik zarządzania stresem, aby nie ograniczał Cię w działaniu.`,
    },
    {
      title: "Relacje międzyludzkie",
      description: `Pomogę Ci zrozumieć, co powoduje, że relacje które tworzysz nie są satysfakcjonujące. Przyjrzymy się Twoim wzorcom zachowań i popracujemy nad tworzeniem zdrowych relacji.`,
    },
    {
      title: "Poczucie własnej wartości",
      description: `Pomogę Ci zbudować realistyczny obraz siebie, popracujemy nad samoakceptacją oraz wzmocnimy Twoje zasoby, które przyczynią się do zwiększenia wiary we własne możliwości.`,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          // dla ekranów >= 1200px
          1200: {
            slidesPerView: 4,
          },
          // dla ekranów >= 768px (tablety)
          768: {
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
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={6500}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper duration-500"
      >
        {problems.map((problem, index) => (
          <SwiperSlide key={index}>
            <div>
              <h3>{problem.title}</h3>
              <h5>{problem.description}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

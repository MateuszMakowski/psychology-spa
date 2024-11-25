export default function MeetingsFormat() {
  return (
    <div>
      <div className="container mx-auto mb-10">
        <div className="mx-5">
          <h3 className="font-extralight">Forma Spotkań</h3>
          <h2>Wybierz formę spotkania, która Ci odpowiada</h2>
          <div className="h-1 w-32 bg-primary my-7"></div>
          <h2 className="font-normal">
            Dbam o to, aby pacjent czuł się komfortowo i miał wybór przestrzeni,
            w której spotkania będą się odbywać. Zapraszam zarówno do spotkań w
            moim gabinecie w Bielsku-Białej, jak i spotkań w formie online.
          </h2>
        </div>
      </div>
      <div className="md:flex md:space-x-10 gap-y-5 grid md:gap-y-0">
        <div className="md:w-1/2 space-y-7 grid py-5 px-2 justify-center text-center shadow-[0px_-5px_20px_0px_rgba(0,0,0,0.15)] md:shadow-[0_10px_20px_0px_rgba(0,0,0,0.15)] rounded-e-3xl mr-5 md:mr-0">
          <h2>Konsultacje Online</h2>
          <h3 className="font-normal">
            Konsultacje online to wygodna forma terapii, która pozwala na
            kontakt z psychologiem z dowolnego miejsca. Wystarczy komputer,
            tablet lub telefon z dostępem do internetu. Spotkania online są
            idealne dla osób, które cenią sobie elastyczność lub wolą pracować w
            domowej przestrzeni.
          </h3>
          <div className="justify-center flex items-end">
            <div className="w-64 justify-start flex">
              <div className="bg-accent rounded-full aspect-square w-16 h-16 pl-7 items-center flex hover:w-64 active:w-64 transition-all ease-in-out duration-500 justify-start justify-self-start">
                <a href="https://www.znanylekarz.pl/karolina-buczek-makowska/psycholog/bielsko-biala">
                  <button className="font-bold text-nowrap ">
                    Umów konsultacje online
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-7 grid py-5 px-2 justify-center text-center shadow-[0_10px_20px_0px_rgba(0,0,0,0.15)] rounded-s-3xl ml-5 md:ml-0">
          <h2>Spotkania w gabinecie</h2>
          <h3 className="font-normal">
            Spotkania na żywo umożliwiają bezpośredni kontakt w bezpiecznej
            przestrzeni, która sprzyja budowaniu głębokiej relacji
            terapeutycznej. Jest to doskonała opcja dla osób, które preferują
            tradycyjną formę spotkań i cenią sobie intymną atmosferę.
          </h3>
          <div className="justify-center flex items-end">
            <div className="w-64 justify-start flex">
              <div className="bg-accent rounded-full aspect-square w-16 h-16 pl-7 items-center flex hover:w-64 active:w-64 transition-all ease-in-out duration-500 justify-start justify-self-start">
                <a href="https://www.znanylekarz.pl/karolina-buczek-makowska/psycholog/bielsko-biala">
                  <button className="font-bold text-nowrap ">
                    Umów wizytę w gabinecie
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

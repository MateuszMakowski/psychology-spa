export default function MobileMenu({
  isOpen,
  scrollToSection,
}: {
  isOpen: boolean;
  scrollToSection: (id: string, offset: number) => void;
}) {
  return (
    <div
      className={`transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-60"
      }`}
    >
      <p
        className={`md:hidden fixed left-5 top-6 text-neutral2 text-lg font-bold`}
      >
        Menu
      </p>

      <div className={`fixed left-10 top-48 md:hidden`}>
        <div className="gap-y-1 grid text-neutral2/90">
          <button
            className="focus:bg-neutral2/30 focus:text-neutral2 w-32 text-start pl-4 rounded-md py-2 default:focus"
            onClick={() => scrollToSection("omnieMobile", 100)}
          >
            o mnie
          </button>
          <button
            className="focus:bg-neutral2/30 w-32 text-start pl-4 rounded-md py-2"
            onClick={() => scrollToSection("współpracaMobile", 100)}
          >
            współpraca
          </button>
          <button
            className="focus:bg-neutral2/30 w-32 text-start pl-4 rounded-md py-2"
            onClick={() => scrollToSection("kontaktMobile", 100)}
          >
            kontakt
          </button>
        </div>
      </div>
    </div>
  );
}

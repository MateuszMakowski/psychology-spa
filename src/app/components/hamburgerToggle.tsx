import React from "react";

export default function HamburgerToggle({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <button
      onClick={toggleMenu}
      className="relative group w-6 h-6 flex items-center justify-center"
      aria-label="Toggle Menu"
    >
      <span
        className={`block absolute h-0.5 w-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "rotate-45 bg-white" : "-translate-y-2 bg-primary"
        }`}
      ></span>
      <span
        className={`block absolute h-0.5 w-6 bg-primary transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block absolute h-0.5 w-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "-rotate-45 bg-white" : "translate-y-2 bg-primary"
        }`}
      ></span>
    </button>
  );
}

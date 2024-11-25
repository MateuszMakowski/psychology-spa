import Image from "next/image";
import email from "../assets/email.gif";
import phone from "../assets/phone-contact.gif";
import location from "../assets/andalucia.gif";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className="mx-5">
        <h1 className="lg:w-2/3">
          Masz pytania lub potrzebujesz więcej informacji?{" "}
          <span className="text-primary"> Napisz do mnie lub zadzwoń,</span> a
          wspólnie ustalimy najlepszy sposób, aby Ci pomóc.
        </h1>
        <div className="lg:flex text-center my-10 lg:my-20 gap-y-16 lg:gap-y-0 grid">
          <div className="lg:w-1/3 lg:gap-y-8 grid">
            <div className="justify-center flex">
              <Image
                className="self-center"
                src={email}
                alt={"email kontaktowy"}
                height={85}
              ></Image>
            </div>
            <h3>kbuczekmakowska@gmail.com</h3>
          </div>
          <div className="lg:w-1/3 lg:gap-y-8 grid">
            <div className="justify-center flex">
              <Image src={phone} alt={"telefon kontaktowy"} height={85}></Image>
            </div>
            <h3>+48 662-967-384</h3>
          </div>
          <div className="lg:w-1/3 lg:gap-y-8 grid">
            <div className="justify-center flex">
              <Image src={location} alt={"adres"} height={85}></Image>
            </div>
            <h3>ul. Browarna 13A, Bielsko-Biała</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

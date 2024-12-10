import Image from "next/image";
import Hero from "./hero";
import Navbar from "./layout/navbar";
import Questions from "./questions";
import Statistics from "./statistics";

export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-[#0D101D]">
      <main className="relative w-full max-w-screen-xl flex flex-col justify-center items-center">
        <Navbar />
        <Hero />
        <Questions />
        <Statistics />
      </main>
    </div>
  );
}

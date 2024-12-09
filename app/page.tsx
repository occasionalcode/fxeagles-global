import Image from "next/image";
import Hero from "./hero";
import Navbar from "./layout/navbar";
import Questions from "./questions";

export default function Home() {
  return (
    <div>
      <main className=" w-full max-w-screen-2xl">
        <Navbar />
        <Hero />
        <Questions />
      </main>
    </div>
  );
}

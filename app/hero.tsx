import globe from "@/public/globe cropped2.png";
import grain from "@/public/grain.png";
import Image from "next/image";

export default function Hero() {
  const world = globe;
  return (
    <div className="relative h-svh w-full bg-black font-Montserrat">
      <div className="w-full absolute z-20 h-full px-2 pb-20 text-white text-center  flex justify-center items-center flex-col">
        <h1
          style={{
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="w-full font-extrabold text-center  bg-gradient-to-tr from-[#E5AF64]  to-[#C8C8C8] from-30%  to-75% text-transparent text-xl mobileL:text-2xl sm:text-3xl"
        >
          WHAT’S HOLDING YOU BACK FROM MASTERING THE MARKETS?
        </h1>
        <button className="bg-[#e8911f] px-3 py-1 rounded-md mt-4 text-sm font-semibold bg-gradient-to-b from-[#E5AF64]  to-[#ff982a] from-30%  to-75% drop-shadow-glow">
          More
        </button>
      </div>
      <div className=" absolute z-10 bottom-0 w-full">
        <div className="absolute bottom-0 w-full h-32 z-10 bg-gradient-to-t from-[#0D101D] to-transparent from-20%  to-100%"></div>

        <Image
          className="saturate-[1.25] object-cover size-96 w-full blur-[3px] lg:size-full lg:h-[30rem]"
          src={globe}
          alt="world"
          quality={100}
        />
      </div>
    </div>
  );
}

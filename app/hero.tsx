import globe from "@/public/globe cropped2.png";
import grain from "@/public/grain.png";
import Image from "next/image";

export default function Hero() {
  const world = globe;
  return (
    <div className="relative min-h-[640px] h-svh w-full bg-black font-Montserrat ">
      <div className="w-full absolute z-20 h-full px-2 pb-20 text-white text-center  flex justify-center items-center flex-col">
        <h1
          style={{
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="w-full font-extrabold text-center  bg-gradient-to-tr from-[#E5AF64]  to-[#C8C8C8] from-30%  to-75% text-transparent text-xl mobileL:text-2xl sm:text-3xl xl:text-4xl"
        >
          WHAT’S HOLDING YOU BACK FROM MASTERING THE MARKETS?
        </h1>
        <button className="bg-[#e8911f] px-3 py-1 rounded-md mt-4 text-sm font-semibold bg-gradient-to-b from-[#E5AF64]  to-[#ff982a] from-30%  to-75% drop-shadow-glow">
          More
        </button>
      </div>
      <div className=" absolute z-10 bottom-0 w-dvw left-1/2 ml-[-50vw]  overflow-hidden ">
        <div className="absolute  bottom-80 w-full h-96 z-10 bg-gradient-to-b from-[#000000] to-transparent from-50%  to-100% xl:flex mobilesS:hidden"></div>
        <div className="absolute bottom-0 w-full h-32 z-10 bg-gradient-to-t from-[#0D101D] to-transparent from-20%  to-100%"></div>
        <div className="bg-black w-screen h-screen"></div>
        <Image
          className="saturate-[1.25] object-cover size-96 w-full blur-[3px] lg:size-full lg:h-[35rem]"
          src={globe}
          alt="world"
          quality={100}
        />
      </div>
    </div>
  );
}

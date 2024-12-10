import grain from "@/public/grain.png";
import Image from "next/image";

export default function Questions() {
  const questions = [
    {
      name: "Emma T.",
      messege:
        "Why can’t I win a single trade? I always seem to enter at the wrong time. Is forex just not for me?",
    },
    {
      name: " Alex P.",
      messege:
        "I keep getting stopped out right before the market moves in my favor. Am I setting my stop losses incorrectly?",
    },
    {
      name: "Jake L.",
      messege:
        "Why do I always panic and close trades too early? Even when my analysis says to hold, I can’t trust myself",
    },
    {
      name: "Sarah V.",
      messege:
        "Every time I try a new strategy, it works at first, but then it stops working. How do I know which strategy to stick with?",
    },
    {
      name: "Jenny F.",
      messege:
        "I follow risk management rules, but even my small losses add up. Am I being too conservative with my trades?",
    },
    {
      name: "Rachel S.",
      messege:
        "I feel like the market always does the opposite of what I expect. How do I stop second-guessing my analysis?",
    },
  ];
  return (
    <div className="relative bg-[#0D101D] h-full font-Montserrat w-full">
      <div className="absolute top-0 w-full h-32 z-10 bg-gradient-to-b from-[#0D101D] to-transparent from-20%  to-100%"></div>
      <h2
        className="relative px-5 pt-10 z-20 bg-gradient-to-r from-[#E846DC] via-[#ffc672]  to-[#FF37D7] from-1% via-40%  to-2% text-transparent text-4xl mobileL:text-5xl"
        style={{
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        The questions every struggling trader is afraid to ask…
      </h2>

      <div className="relative w-full pt-10">
        <div className="w-full grid co grid-cols-auto-fill-250 lg:grid-cols-auto-fill-300 gap-6 justify-around items-start px-8">
          {questions.map((question, i) => (
            <div
              key={i}
              className="  backdrop-blur-3xl text-white border-[#FEBB5B] border-2  sm:h-56 lg:h-44  rounded-xl px-4 pt-4 pb-8 lg:text-lg"
            >
              <div className="flex justify-start items-center gap-4 pb-4">
                <div className="rounded-full size-8  bg-white "></div>
                <p>{question.name}</p>
              </div>
              <p>{question.messege}</p>
            </div>
          ))}
        </div>
        {/* <Image
          src={grain}
          alt="grain"
          className="absolute z-0 top-0 w-full h-56 object-cover  opacity-15"
        /> */}
      </div>
      <div className=" relative flex flex-col justify-center text-center items-center  py-14">
        <div className="absolute bottom-0 w-full h-[40rem] z-10 bg-gradient-to-t from-[#0D101D] to-transparent from-20%  to-100%"></div>
        <div className="z-10 pt-16 pb-5 flex flex-col lg:flex-row lg:justify-center lg:items-end lg:gap-6">
          <p
            className=" z-10 bg-gradient-to-r from-[#E846DC] via-[#ffc672]  to-[#FF37D7] from-1% via-40%  to-2% text-transparent text-xl mobileL:text-2xl sm:text-3xl md:text-4xl lg:text-4xl lg:pb-2.5"
            style={{
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            FRIGHTENINGLY
          </p>
          <p
            className=" z-10 bg-gradient-to-r from-[#E846DC] via-[#ffc672]  to-[#FF37D7] from-1% via-40%  to-2% text-transparent text-5xl mobileL:text-6xl sm:text-7xl md:text-8xl   lg:text-8xl"
            style={{
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            FAMILIAR?
          </p>
        </div>
      </div>

      <Image
        src={grain}
        alt="grain"
        className="absolute top-0 size-full object-cover z-0 opacity-[0.03]"
        quality={100}
      />
    </div>
  );
}

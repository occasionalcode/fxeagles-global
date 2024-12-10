export default function Statistics() {
  const statistics = [
    {
      percentage: "80%",
      description: "of day traders quit within the first two years",
      link: "https://tradeciety.com/24-statistics-why-most-traders-lose-money",
    },
    {
      percentage: "< 1%",
      description: "of all day traders earn consistently",
      link: "https://www.currentmarketvaluation.com/posts/the-data-on-day-trading.php",
    },
    {
      percentage: "80%-90%",
      description: "of all traders fail prop firm challenges",
      link: "https://tradersunion.com/interesting-articles/what-is-prop-trading/what-is-the-failure-rate-of-prop-traders/#:~:text=According%20to%20our%20extensive%20research,traders%20fail%20prop%20firm%20challenges.",
    },
  ];

  return (
    <div className="text-white font-Montserrat px-4 xl:px-20 pb-20">
      <div className="flex flex-row flex-wrap justify-center items-center text-center pt-10 gap-7 xl:justify-around">
        {statistics.map((stat, i) => (
          <div className="flex flex-col lg:flex-row justify-center items-center w-72 text-wrap">
            <div key={i} className="flex flex-col mobileL:gap-3">
              <p className="text-5xl mobileL:text-6xl sm:text-6xl xl:text-7xl">
                {stat.percentage}
              </p>
              <p className="px-10 sm:px-0 font-extralight text-wrap mobileL:text-lg xl:text-2xl">
                {stat.description}
              </p>
              <a
                className="text-sm mobileL:text-base xl:text-lg font-extralight text-orange-400 pt-2 underline"
                target="_blank"
                href={`${stat.link}`}
              >
                View article
              </a>
            </div>
            <div className="bg-white opacity-10 w-28 h-0.5 my-4 mobileL:my-8 rounded-lg lg:hidden"></div>

            {/* {i < 2 && (
              <div className="bg-white opacity-10 h-28 w-1 my-4 mobileL:my-8 rounded-lg mobilesS:hidden lg:flex"></div>
            )} */}
          </div>
        ))}
      </div>

      <p className="font-extralight text-xl md:text-2xl lg:text-3xl  px-4 mobileL:px-7 pt-10 lg:pt-20  text-justify">
        This basically means that trading is tough, and most people don’t make
        it, with only a small percentage finding consistent success.{" "}
        <span
          style={{
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className=" font-medium bg-gradient-to-r from-[#E846DC] via-[#ffc672]  to-[#FF37D7] from-10% via-40%  to-2% text-transparent"
        >
          Craaaaaaazy
        </span>{" "}
        right?
      </p>
    </div>
  );
}

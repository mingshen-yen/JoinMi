import { Link } from "react-router";

export const Hero = () => {
  return (
    <div className="max-w-8xl mb-30 px-4 sm:px-0 flex flex-wrap lg:flex-nowrap gap-6 sm:gap-8 lg:gap-12 items-center">
      {/* TEXT */}
      <div className="space-y-6 order-2 sm:ml-10 lg:ml-0 -mt-10 sm:-mt-10 lg:mt-0 lg:order-1 col-span-2 basis-full lg:basis-2/3 xl:basis-1/2 shrink-0">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight uppercase text-white">
          Sign up next <br />
          upcoming
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink via-orange to-yellow">
            Museum <br />
            Tours
          </span>
        </h1>
        <p className="text-gray-200 max-w-full sm:max-w-md text-lg leading-relaxed">
          JoinMi organizes guided museum tours in Berlin. Discover culture and
          explore the city in a new way. Register today.
        </p>

        <div className="flex flex-row gap-4 pt-4">
          <a href="#howto">
            <Link to={"/tours"}>
              <button className="cursor-pointer bg-linear-to-r from-pink to-yellow text-black font-bold px-8 py-4 rounded-md uppercase text-sm tracking-widest">
                Find tours
              </button>{" "}
            </Link>
          </a>
          <Link to={"/tour-register"}>
            <button className="border border-white text-white px-8 py-4 rounded-md uppercase text-sm font-bold tracking-widest hover:bg-white hover:text-black transition">
              Signup tour
            </button>
          </Link>
        </div>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center lg:justify-end order-1 mb-10 lg:mb-0">
        <img
          src="Hero-img.png"
          alt="JoinMi illustration"
          className="herobg w-10/9 lg:w-5/2 xl:w-3/2 max-w-none -z-1"
        />
      </div>
    </div>
  );
};

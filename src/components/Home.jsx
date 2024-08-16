import React from "react";
import Countdown from "./Countdown";

const Home = () => {
  const targetDate = "2024-08-20T23:59:59";

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={"/src/assets/images/festrem2.jpg"} // Update the path to your image
          alt="Concert"
          className="w-full h-full object-cover blur-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative flex flex-col items-center justify-center mt-10 space-y-10 z-10">
        {/* Other content goes here */}
        <div className="dark:bg-slate-600 w-full max-w-6xl rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <img
              src={"/src/assets/images/festrem2.jpg"} // Update the path to your image
              alt="Concert"
              className="w-full h-[0vh] md:h-[80vh] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end p-8 text-left space-y-2">
              <h1 className="text-white text-3xl font-bold">Bob Marley</h1>
              <p className="text-white text-4xl font-light">
                Love the life you live.
                <br />
                Live the life you love.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="relative bg-slate-800 p-4 rounded-lg overflow-hidden">
              <button className="absolute bottom-4 right-4 bg-[#0D1717] text-n-2 font-extrabold px-4 py-2 rounded-full shadow-lg hover:bg-gray-300">
                REGISTER
              </button>
              <p className="text-white">
                Welcome to the heart of the Biggest Festival! <br />
                Get ready to dive into an array of exhilarating activities that
                promise to entertain, engage and excite. <br />
                Whether you&apos;re a thrill-seeker, a music lover, or a foodie,
                our festival has something special for everyone.
              </p>
            </div>
          </div>
        </div>
        {/* Add Countdown component */}
        <Countdown targetDate={targetDate} />
      </div>
      <div>
        <div className="relative p-4 rounded-lg pt-20 overflow-hidden">
          {/*<button className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg hover:bg-gray-300">
            LIVE MOVIE
          </button>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>*/}
        </div>
      </div>
    </div>
  );
};

export default Home;

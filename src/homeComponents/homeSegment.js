import React from "react";

function HomeSegment() {
  return (
    <div className=" h-screen w-screen flex bg-orange-100">
      <div className="fixed top-3 right-3 border-2 border-black">
        <div className="flex px-2 pt-2 pb-1">
          <a className="text-xl font-bold px-1 hover:underline" href="/">
            Home
          </a>
          <a className="text-xl font-bold px-1 hover:underline" href="#Awards">
            Awards
          </a>
          <a className="text-xl font-bold px-1 hover:underline" href="#Interests">
            Interests
          </a>
        </div>
      </div>
      <div className="m-auto px-4 grid md:grid-cols-2">
        <div className="flex flex-col md:mb-0 mb-20">
          <h1 className="text-9xl font-bold">Hi,</h1>
          <h3 className="text-8xl ">I'm Neev</h3>
        </div>
        <div className="flex">
          <div className="mx-auto">
            <img src="porsche.png" className="w-full" />
            <h1 className="italic text-3xl font-semibold text-center">
              I like cars.
            </h1>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomeSegment;

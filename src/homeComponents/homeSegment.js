import React from "react";


function WorkSegment(){
  return (
    <div className="h-fit">
      <div></div>
    </div>
  )
}

function HomeSegment() {
  return (
    <div className=" h-screen w-screen flex z-10 relative overflow-x-hidden">
      <div className="fixed h-screen w-screen bg-gradient-to-b to-cyan-100 from-cyan-50 dark:to-neutral-950 dark:via-cyan-950 dark:from-neutral-950 z-0">

      </div>
      <div className="fixed top-6 right-6 bg-gradient-to-br from-cyan-800 to-cyan-500 dark:to-cyan-300 dark:from-cyan-50 p-1">
        <div className="flex w-full h-full p-2 bg-cyan-50 dark:bg-cyan-950 mukta font-semibold">
          <div className="bg-gradient-to-br from-cyan-800 to-cyan-500 dark:to-cyan-300 dark:from-cyan-50 text-transparent bg-clip-text ">
            <a className="text-xl px-1 hover:text-black dark:hover:text-white" href="/">
              Home
            </a>
            <a className="text-xl px-1 hover:text-black dark:hover:text-white" href="#Awards">
              Awards
            </a>
            <a className="text-xl px-1 hover:text-black dark:hover:text-white" href="#Interests">
              Interests
            </a>
          </div>
        </div>
      </div>
      <div className="m-auto px-4 grid md:grid-cols-2 relative">
        <div className="flex flex-col relative h-screen md:h-full md:mb-0 mb-20 mx-auto bg-gradient-to-br from-cyan-800 to-cyan-400 dark:to-cyan-300 dark:from-cyan-50 bg-clip-text text-transparent  magictime puffIn">
          <div className="my-auto flex flex-col">
            <h1 className="md:text-9xl text-7xl font-bold">Hi,</h1>
            <h3 className=" text-6xl md:text-8xl mb-4 md:m-0">I'm Neev</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mx-auto animate-bounce md:hidden text-black dark:text-white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
        </div>
        <div className="flex pb-4 magictime twisterInDown relative">
          <div className="mx-auto self-end">
            <img src="porsche.png" className="w-full" />
            <h1 className="italic text-3xl font-semibold text-center bg-gradient-to-br from-cyan-800 to-cyan-400 dark:to-cyan-300 dark:from-cyan-50 bg-clip-text text-transparent">
              I like cars.
            </h1>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomeSegment;

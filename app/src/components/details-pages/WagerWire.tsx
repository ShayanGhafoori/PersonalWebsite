import { useState, useEffect } from "react";
import clsx from "clsx";

const Home = () => {
  return (
    <div>
      <p className='mt-8 text-[12px]'>
        So here is a brief description of everything
      </p>
      <div className='flex flex-row justify-evenly h-[500px] overflow-scroll mt-24 text-white'>
        <div className='pr-6'>
          <div className='absolute top-72'> Small screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_small.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='absolute top-72'> Medium screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_medium.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='absolute top-72'> Large screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_large.png'
            alt='ww-home-large'
          />
        </div>
      </div>
    </div>
  );
};
const Calculator = () => {
  return (
    <div>
      <p className='mt-8 text-[12px]'>
        So here is a brief description of everything
      </p>
      <div className='flex flex-row justify-evenly h-[500px] overflow-scroll mt-24 text-white'>
        <div className='pr-6'>
          <div className='absolute top-72'> Small screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_calculator_small.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='absolute top-72'> Medium screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_calculator_medium.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='absolute top-72'> Large screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_calculator_large.png'
            alt='ww-home-large'
          />
        </div>
      </div>
    </div>
  );
};

const Graph = () => {
  return (
    <div>
      <p className='mt-8 text-[12px]'>
        So here is a brief description of everything
      </p>
      <div className='flex flex-row justify-evenly h-[500px] overflow-scroll mt-24 text-white'>
        <div className='pr-6'>
          <div className='absolute top-72'> Small screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_graph_small.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='absolute top-72'> Medium screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_graph_medium.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='absolute top-72'> Large screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_graph_large.png'
            alt='ww-home-large'
          />
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  return (
    <div>
      <p className='mt-8 text-[12px]'>
        So here is a brief description of everything
      </p>
      <div className='flex flex-row justify-evenly h-[500px] overflow-scroll mt-24 text-white'>
        <div className='pr-6'>
          <div className='absolute top-72'> Small screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_community_small.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='absolute top-72'> Medium screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_community_medium.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='absolute top-72'> Large screen </div>
          <img
            className=''
            src='/images/www.wagerwire.com_community_large.png'
            alt='ww-home-large'
          />
        </div>
      </div>
    </div>
  );
};

const WagerWire = () => {
  const [subPage, setSubPage] = useState("CALC");
  return (
    <div className='font-semibold'>
      <a
        href='/projects'
        className='font-bold text-[16px] hover:text-[#E5BAC9]'
      >
        {"<"} Projects
      </a>
      <div className='md:max-w-[500px] lg:max-w-[800px]'>
        <div className='flex flex-row text-[24px] pt-8'>
          <div className='flex flex-col justify-center items-center mr-4 group'>
            <button
              className={clsx(
                "group-hover:text-white",
                subPage === "HOME" && "text-white"
              )}
              onClick={() => setSubPage("HOME")}
            >
              Home Page
            </button>
            <hr
              className={clsx(
                "border-2 w-full group-hover:border-white",
                subPage === "HOME" ? "border-white" : "border-black"
              )}
            />
          </div>

          <div className='flex flex-col justify-center items-center mr-4 group'>
            <button
              className={clsx(
                "group-hover:text-white",
                subPage === "CALC" && "text-white"
              )}
              onClick={() => setSubPage("CALC")}
            >
              Calculator Page
            </button>
            <hr
              className={clsx(
                "border-2 w-full group-hover:border-white",
                subPage === "CALC" ? "border-white" : "border-black"
              )}
            />
          </div>

          <div className='flex flex-col justify-center items-center mr-4 group'>
            <button
              className={clsx(
                "group-hover:text-white",
                subPage === "GRAPH" && "text-white"
              )}
              onClick={() => setSubPage("GRAPH")}
            >
              Graph Page
            </button>
            <hr
              className={clsx(
                "border-2 w-full group-hover:border-white",
                subPage === "GRAPH" ? "border-white" : "border-black"
              )}
            />
          </div>

          <div className='flex flex-col justify-center items-center group'>
            <button
              className={clsx(
                "group-hover:text-white",
                subPage === "COMM" && "text-white"
              )}
              onClick={() => setSubPage("COMM")}
            >
              Community Page
            </button>
            <hr
              className={clsx(
                "border-2 w-full group-hover:border-white",
                subPage === "COMM" ? "border-white" : "border-black"
              )}
            />
          </div>
        </div>
      </div>
      {subPage === "HOME" && <Home />}
      {subPage === "GRAPH" && <Graph />}
      {subPage === "CALC" && <Calculator />}
      {subPage === "COMM" && <Community />}
    </div>
  );
};

export default WagerWire;

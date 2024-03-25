import { useState, useEffect } from "react";
import clsx from "clsx";

const Home = () => {
  return (
    <div>
      <div className='mt-8 text-[12px]'>
        <p className='mb-4 '>
          This carefully crafted landing page serves as the gateway to the
          WagerWire platform, encapsulating the essence of WagerWire's mission
          and showcasing the app's features in a clear and engaging manner.
          Through strategic layout and user-centered design principles, I
          developed this intuitive interface that welcomes visitors and guides
          them seamlessly through WagerWire's offerings. From highlighting key
          app functionalities to communicating the commitment to empowering
          sports enthusiasts, the home page serves as a compelling introduction
          to the world of WagerWire.
        </p>
        <p>
          {" "}
          Scroll Down to see the responsive designs for different page sizes or
          play around with it yourself @{" "}
          <span className='text-[#E5BAC9]'>
            <a href='https://www.wagerwire.com'> wagerwire.com</a>
          </span>{" "}
        </p>
      </div>
      <div className='flex flex-row justify-evenly mt-10 text-white'>
        <div className='pr-6'>
          <div className='mb-2'> Small screen </div>
          <img src='/images/www.wagerwire.com_small.png' alt='ww-home-large' />
        </div>
        <div className='pr-6'>
          <div className='mb-2'> Medium screen </div>
          <img src='/images/www.wagerwire.com_medium.png' alt='ww-home-large' />
        </div>
        <div className='pr-6'>
          <div className='mb-2'> Large screen </div>
          <img src='/images/www.wagerwire.com_large.png' alt='ww-home-large' />
        </div>
      </div>
    </div>
  );
};
const Calculator = () => {
  return (
    <div>
      <div className='mt-8 mb-4 text-[12px]'>
        <p className='mb-4'>
          <span className='text-yellow-300'>
            As an integral member of the data team
          </span>{" "}
          at WagerWire, I played a pivotal role in the creation of our
          proprietary sports bet pricing algorithm. Collaborating closely with
          colleagues, I meticulously gathered and analyzed 22 years of sports
          betting data, resulting in a model capable of accurately
          pricing/valuing bets across various sports and bet types. The model
          factors in variables such as line movement, odds movement, bet type,
          and specific sports dynamics. The formulation of this model involved
          the development of other models, such as ones to accurately predict
          the distribution of percent change in bet value (from any given buy
          and sell interval) across various sports, sports leagues, and bet
          types.
        </p>
        <p className='mb-4'>
          <span className='text-yellow-300'>
            As a member of the engineering team
          </span>
          , I leveraged this algorithm and developed an intuitive frontend
          calculator page, enabling users to independently assess the current
          value of their bets. The calculator is a simple tool for evaluating
          straight bets and straight bet parlays, and only represents a glimpse
          into the complexity of the algorithm and its full capabilities.
        </p>
        <p>
          {" "}
          Scroll Down to see the responsive designs for different page sizes or
          play around with it yourself @{" "}
          <span className='text-[#E5BAC9]'>
            <a href='https://www.wagerwire.com/calculator'>
              {" "}
              wagerwire.com/calculator
            </a>
          </span>{" "}
        </p>
      </div>

      <div className='flex flex-row justify-evenly mt-10 text-white'>
        <div className='pr-6'>
          <div className='mb-2'> Small screen </div>
          <img
            src='/images/www.wagerwire.com_calculator_small.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='mb-2'> Medium screen </div>
          <img
            src='/images/www.wagerwire.com_calculator_medium.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='mb-2'> Large screen </div>
          <img
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
      <div className='mt-8 mb-4 text-[12px]'>
        <p className='mb-4'>
          <span className='text-yellow-300'>
            As an integral member of the data team
          </span>{" "}
          at WagerWire, I played a pivotal role in the creation of our
          proprietary sports bet pricing algorithm. Collaborating closely with
          colleagues, I meticulously gathered and analyzed 22 years of sports
          betting data, resulting in a model capable of accurately
          pricing/valuing bets across various sports and bet types. The model
          factors in variables such as line movement, odds movement, bet type,
          and specific sports dynamics. The formulation of this model involved
          the development of other models, such as ones to accurately predict
          the distribution of percent change in bet value (from any given buy
          and sell interval) across various sports, sports leagues, and bet
          types.
        </p>
        <p className='mb-4'>
          <span className='text-yellow-300'>
            As a member of the engineering team
          </span>{" "}
          -- in addition to my contributions to the algorithm and calculator
          page -- I engineered a dynamic graph page that enables users to
          visualize and track the monetary value of their bets over time,
          offering invaluable insights into bet value fluctuations. Users can
          compare different teams and outcomes, thanks to the integration of
          odds and pertinent team data. Notably, the graph page includes
          functionality to generate shareable links, ensuring recipients
          accessing the link view the exact same graph. This seamless sharing
          capability enhances collaboration and analysis among users, making the
          graph page an indispensable tool for sports bettors.
        </p>
        <p>
          {" "}
          Scroll Down to see the responsive designs for different page sizes or
          play around with it yourself @{" "}
          <span className='text-[#E5BAC9]'>
            <a href='https://www.wagerwire.com/graph'> wagerwire.com/graph</a>
          </span>{" "}
        </p>
      </div>
      <div className='flex flex-row justify-evenly mt-10 text-white'>
        <div className='pr-6'>
          <div className='mb-2'> Small screen </div>
          <img
            src='/images/www.wagerwire.com_graph_small.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='mb-2'> Medium screen </div>
          <img
            src='/images/www.wagerwire.com_graph_medium.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='mb-2'> Large screen </div>
          <img
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
      <div className='mt-8 text-[12px]'>
        <p className='mb-4 '>
          In my role at WagerWire, I had the privilege of creating a vibrant
          community page. This dynamic hub is dedicated to fostering engagement
          and interaction among sports enthusiasts and bettors. Curated with
          diverse content including written articles, live interviews on
          Twitter, podcasts, and real-time sports news updates, the community
          page serves as a go-to destination for staying informed and connected
          with the latest in the sports world.
        </p>
        <p>
          {" "}
          Scroll Down to see the responsive designs for different page sizes or
          play around with it yourself @{" "}
          <span className='text-[#E5BAC9]'>
            <a href='https://www.wagerwire.com/community'>
              {" "}
              wagerwire.com/community
            </a>
          </span>{" "}
        </p>
      </div>

      <div className='flex flex-row justify-evenly mt-10 text-white'>
        <div className='pr-6'>
          <div className='mb-2'> Small screen </div>
          <img
            src='/images/www.wagerwire.com_community_small.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='mb-2'> Medium screen </div>
          <img
            src='/images/www.wagerwire.com_community_medium.png'
            alt='ww-home-large'
          />
        </div>
        <div className='pr-6'>
          <div className='mb-2'> Large screen </div>
          <img
            src='/images/www.wagerwire.com_community_large.png'
            alt='ww-home-large'
          />
        </div>
      </div>
    </div>
  );
};

const WagerWire = () => {
  const [subPage, setSubPage] = useState("GRAPH");
  return (
    <div className='font-semibold'>
      <a
        href='/projects'
        className='font-bold text-[14px] hover:text-[#E5BAC9]'
      >
        {"<"} Projects
      </a>

      <div className='my-8 text-[16px] text-center md:text-left'>
        <h1 className='mb-3 text-center'>
          <a
            href='https://wagerwire.com'
            className='font-bold text-[28px] hover:text-[#E5BAC9]'
          >
            WagerWire.com
          </a>
          <div className='text-yellow-300 mt-1'>
            React.js, Tailwind, Sanity.io, Python, R
          </div>
        </h1>

        <div className='italic font-extralight'>
          Professional project from my time at WagerWire, a sports betting
          startup where I worked as both a software engineer and data analyst
          building a proprietary algorithm for valuing sports bets, concurrently
          developing intuitive GUIs that enabled public utilization
        </div>
      </div>
      <div className='md:max-w-[500px] lg:max-w-[800px]'>
        <div className='flex flex-col md:flex-row text-[20px] pt-8'>
          <div className='flex flex-col justify-center items-center mb-2 md:mb-0 md:mr-4 group'>
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

          <div className='flex flex-col justify-center items-center mb-2 md:mb-0 md:mr-4 group'>
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

          <div className='flex flex-col justify-center items-center mb-2 md:mb-0 md:mr-4 group'>
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

          <div className='flex flex-col justify-center items-center mb-2 md:mb-0 group'>
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

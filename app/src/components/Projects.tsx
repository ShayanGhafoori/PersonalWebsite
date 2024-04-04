import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const WW = () => {
  return (
    <div className='text-[12px]'>
      <h1 className='my-5'>
        <a
          href='https://wagerwire.com'
          className='font-bold text-[28px] hover:text-[#E5BAC9]'
        >
          WagerWire.com
        </a>
        <div>
          <span>
            {" "}
            <a
              href='https://wagerwire.com'
              className='font-bold text-[#E5BAC9]'
            >
              https://www.wagerwire.com
            </a>
          </span>
        </div>
        <div className='text-yellow-300 mt-1'>
          {" "}
          React.js, Tailwind, Sanity.io, Python, R{" "}
        </div>
      </h1>

      <div className='mb-4 italic font-extralight'>
        Professional project from my time at WagerWire, a sports betting startup
        where I worked as both a software engineer and data analyst building a
        proprietary algorithm for valuing sports bets, concurrently developing
        intuitive GUIs that enabled public utilization
      </div>

      <ul className='mb-4 list-disc pl-2'>
        <li className='my-2'>
          As a vital member of the data team, I built a proprietary sports
          betting algorithm, drawing insights from 22 years of diverse betting
          data spanning multiple sports and bet-types.
        </li>
        <li className='my-2'>
          As a vital member of the engineering team, I spearheaded the
          development of the{" "}
          <span className='italic font-extralight'> /calculator</span> and
          <span className='italic font-extralight'> /graph </span> pages of
          <span className='italic font-extralight'> wagerwire.com </span>. These
          user-friendly interfaces empower individuals to independently
          calculate the monetary worth of their bets and visualize value
          fluctuations over time across various sports, all achieved using the
          algorithm. Additionally, I created the{" "}
          <span className='italic font-extralight'> / </span> (home) page--
          effectively encapsulating WagerWire's mission and the app's features--
          as well as a vibrant{" "}
          <span className='italic font-extralight'> /community </span> page that
          hosts an array of sports-related content, fostering engagement and
          interaction among users.
        </li>
      </ul>
      <a
        href='#/details-wagerwire'
        className='font-bold text-[17px] text-white hover:text-[#E5BAC9] underline pt-4 italic font-normal underline-offset-2'
      >
        !! See more details !!
      </a>
    </div>
  );
};

const GoblinFrenzy = () => {
  return (
    <div className='text-[12px]'>
      <h1 className='my-5'>
        <a
          href='https://github.com/ShayanGhafoori/Goblin-Frenzy'
          className='font-bold text-[28px] hover:text-[#E5BAC9]'
        >
          Goblin Frenzy
        </a>
        <br />
        <a
          href='https://github.com/ShayanGhafoori/Goblin-Frenzy'
          className='font-bold text-[#E5BAC9]'
        >
          https://github.com/ShayanGhafoori/Goblin-Frenzy
        </a>
        <div className='text-yellow-300 mt-1'> Python</div>
      </h1>

      <div className='mb-4 italic font-extralight'>
        A Personal Project I developed as a hobby while exploring Python's
        Pygame module. Experience endless rounds of increasing difficulty in
        this Python-based computer game. Assume the role of a ninja tasked with
        fending off waves of goblins. As the game progresses, goblin numbers and
        strength escalate, challenging players to adapt and survive. Utilize
        various objects strategically to enhance gameplay and overcome
        obstacles.
      </div>
      <ul className='mb-4 list-disc pl-2'>
        <li className='my-2'>
          Developed a custom -- quasi Dijkstra's -- algorithm to ensure goblins
          take the shortest path to the player while preventing infinite looping
          of sprite animations
        </li>
        <li className='my-2'>
          Created an algorithm for spawning goblins, ensuring none overlap
        </li>
        <li className='my-2'>
          Maximized gameplay experience by accounting for variables such as
          angle of attack, health status, user input, and collisions when
          synchronizing sprite animations with character movement
        </li>
        <li className='my-2'>
          Utilized object-oriented programming to design user, enemy, and object
          classes for improved code organization and maintainability
        </li>
      </ul>
      <h1 className='my-4 text-yellow-300'> Check out the video Demo!</h1>
      <video
        src='images/goblin-frenzy-demo.mp4'
        className='w-[500px] rounded-[4px]'
        controls
        poster='images/goblin-frenzy-poster.png'
      ></video>
    </div>
  );
};

const Bsports = () => {
  return (
    <div className='text-[12px]'>
      <h1 className='my-5'>
        <a
          href='https://github.com/maxdalton01/bSports/tree/ShayanBranch'
          className='font-bold text-[28px] hover:text-[#E5BAC9]'
        >
          B-Sports (BruinSports)
        </a>
        <br />
        <a
          href='https://github.com/maxdalton01/bSports/tree/ShayanBranch'
          className='font-bold text-[#E5BAC9] break-all'
        >
          https://github.com/maxdalton01/bSports/tree/ShayanBranch
        </a>
        <div className='text-yellow-300 mt-1'>
          MongoDB, Express.js, Node.js, React.js
        </div>
      </h1>

      <div className='mb-4 italic font-extralight'>
        B-Sports was the final project for a capstone software construction
        class, where I led the frontend development with a dedicated team of
        five members. B-Sports is a dynamic client-server web application
        constructed using the MERN stack. Tailored to the UCLA community, it
        provides a platform for UCLA students to register and organize pick-up
        games across campus, alongside the ability to browse and RSVP to other
        listed games.
      </div>
    </div>
  );
};

const MiniRogue = () => {
  return (
    <div className='text-[12px]'>
      <h1 className='my-5'>
        <a
          href='https://github.com/ShayanGhafoori/Mini-Rogue'
          className='font-bold text-[28px] hover:text-[#E5BAC9]'
        >
          Mini Rogue
        </a>
        <br />
        <a
          href='https://github.com/ShayanGhafoori/Mini-Rogue'
          className='font-bold text-[#E5BAC9]'
        >
          https://github.com/ShayanGhafoori/Mini-Rogue
        </a>
        <div className='text-yellow-300 mt-1'>C++</div>
      </h1>

      <div className='mb-4 italic font-extralight'>
        My video game rendition of the Mini Rogue board game. Fight your way
        through a dungeon by collecting many different scrolls and weapons to
        battle a diverse group of monsters you encounter along the way. Climb
        the staircase to move on to the next level. Be careful, the levels get
        harder and the monsters become more dangerous as you progress. Win by
        making it to the final level and picking-up the Golden Idle.
      </div>
      <ul className='mb-4 list-disc pl-2'>
        <li className='my-2'>
          Crafted a custom, progressive algorithm for dynamically generating
          randomized dungeon layouts, weapons, and enemies at each level
        </li>
        <li className='my-2'>
          Implemented an object-oriented design for every weapon, scroll, and
          enemy such that they possesses unique strengths and weaknesses, adding
          depth and strategy to gameplay.
        </li>
      </ul>
    </div>
  );
};
const ProjectBox: React.FC<{
  projectName: string;
  defaultState?: boolean;
  children?: React.ReactNode;
}> = ({ projectName, defaultState, children }) => {
  const [viewProject, setViewProject] = useState(defaultState ?? false);

  return (
    <div className='uppercase '>
      <div className='flex flex-row justify-between items-end'>
        <h1 className='mt-6 tracking-[-0.3rem] leading-[5rem] font-semibold text-white text-[60px]'>
          {projectName}
        </h1>
        <button
          className='uppercase text-center flex flex-row item-center justify-center'
          onClick={() => setViewProject(!viewProject)}
        >
          {viewProject ? "- View Less" : "+ View Project"}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-100 ${
          viewProject ? "max-h-full" : "max-h-0"
        }`}
      >
        {children}
      </div>
      <hr className='border-white border-1 mt-4' />
    </div>
  );
};

const Projects = () => {
  return (
    <div className='h-full min-h-screen pt-36 pb-10'>
      <Fade triggerOnce fraction={0.75}>
        <div className='uppercase mb-4'>
          <h1 className='mt-12 tracking-[-0.3rem] leading-[5rem] font-semibold text-[#5C5C5C] text-[75px]'>
            Previous Projects
          </h1>
          <hr className='border-[#5C5C5C] border-2 mt-2' />
        </div>
      </Fade>
      <Fade direction='left' damping={0.2} cascade triggerOnce>
        <ProjectBox projectName={"WagerWire"} defaultState={true}>
          <div className='uppercase mt-4 px-2'>
            <div className='flex flex-row justify-between text-[14px]'>
              <div>
                <div className='mb-4 normal-case text-[#E5C88F] text-[16px] font-semibold'>
                  React.js, Tailwind, Sanity.io, Python, R
                </div>
                <p className=' font-normal text-white ] w-[40%]'>
                  Professional project from my time at WagerWire, a sports
                  betting startup where I worked as both a{" "}
                  <span className='text-[#E5C88F]'> Software Engineer</span> and{" "}
                  <span className='text-[#E5C88F]'> Data analyst</span> building
                  a proprietary algorithm for valuing sports bets, concurrently
                  developing intuitive GUIs that enabled public utilization
                </p>
                <div className='underline mt-4'>
                  <a href='https://wagerwire.com'>view wagerwire.com</a>
                </div>
              </div>
            </div>
            <hr className='border-white border-1 my-4' />
            <div className='flex flex-row justify-between text-[14px]'>
              <div className='w-[40%] order-last'>
                <p className='font-normal text-white mb-4'>
                  <span className='text-[#E5C88F]'>
                    As an integral member of the data team
                  </span>{" "}
                  at WagerWire, I played a pivotal role in the creation of our
                  proprietary sports bet pricing algorithm. Collaborating
                  closely with colleagues, I meticulously gathered and analyzed
                  22 years of sports betting data, resulting in a model capable
                  of accurately pricing/valuing bets across various sports and
                  bet types. The model factors in variables such as line
                  movement, odds movement, bet type, and specific sports
                  dynamics. The formulation of this model involved the
                  development of other models, such as ones to accurately
                  predict the distribution of percent change in bet value (from
                  any given buy and sell interval) across various sports, sports
                  leagues, and bet types.
                </p>
                <p className='mb-4'>
                  <span className='text-[#E5C88F]'>
                    As a member of the engineering team
                  </span>
                  , I leveraged this algorithm and developed an intuitive
                  frontend calculator page, enabling users to independently
                  assess the current value of their bets. The calculator is a
                  simple tool for evaluating straight bets and straight bet
                  parlays, and only represents a glimpse into the complexity of
                  the algorithm and its full capabilities.
                </p>
                <div className='underline mt-4'>
                  <a href='https://wagerwire.com/calculator'>
                    view wagerwire.com/calculator
                  </a>
                </div>
              </div>
              <img
                src='images/www.wagerwire.com_calculator_small.png'
                alt=''
                className='h-10'
              />
            </div>
            <hr className='border-white border-1 my-4' />
            <div className='flex flex-row justify-between text-[14px]'>
              <div className='w-[40%]'>
                <p className='mb-4'>
                  In addition to my contributions to the algorithm and
                  calculator page (see above) -- I engineered a dynamic graph
                  page that enables users to visualize and track the monetary
                  value of their bets over time, offering invaluable insights
                  into bet value fluctuations. This page utilizes calls to an
                  internal REST API that returns odds and comprehensive team
                  information. From there I process the API's contents and
                  transform it into a useable format, and apply our proprietary
                  bet pricing algorithm. Users can build their own graphs
                  comparing different teams and outcomes, thanks to the
                  integration of odds and pertinent team data. Notably, the
                  graph page includes functionality to generate shareable links,
                  ensuring recipients accessing the link view the exact same
                  graph. This seamless sharing capability enhances collaboration
                  and analysis among users, making the graph page an
                  indispensable tool for sports bettors.
                </p>
                <div className='underline mt-4'>
                  <a href='https://wagerwire.com/graph'>
                    view wagerwire.com/graph
                  </a>
                </div>
              </div>
              <img
                src='images/www.wagerwire.com_calculator_small.png'
                alt=''
                className='h-10'
              />
            </div>
            <hr className='border-white border-1 my-4' />
            <div className='flex flex-row justify-between text-[14px]'>
              <div className='w-[40%] order-last'>
                <p className='mb-4'>
                  In my role at WagerWire, I had the privilege of creating a
                  vibrant community page. This dynamic hub is dedicated to
                  fostering engagement and interaction among sports enthusiasts
                  and bettors. Curated with diverse content including written
                  articles, live interviews on Twitter, podcasts, and real-time
                  sports news updates, the community page serves as a go-to
                  destination for staying informed and connected with the latest
                  in the sports world.
                </p>
                <div className='underline mt-4'>
                  <a href='https://wagerwire.com/community'>
                    view wagerwire.com/community
                  </a>
                </div>
              </div>
              <img
                src='images/www.wagerwire.com_calculator_small.png'
                alt=''
                className='h-10'
              />
            </div>
            <hr className='border-white border-1 my-4' />
            <div className='flex flex-row justify-between text-[14px]'>
              <div className='w-[40%] '>
                <p className='mb-4'>
                  This carefully crafted landing page serves as the gateway to
                  the WagerWire platform, encapsulating the essence of
                  WagerWire's mission and showcasing the app's features in a
                  clear and engaging manner. Through strategic layout and
                  user-centered design principles, I developed this intuitive
                  interface that welcomes visitors and guides them seamlessly
                  through WagerWire's offerings. From highlighting key app
                  functionalities to communicating the commitment to empowering
                  sports enthusiasts, the home page serves as a compelling
                  introduction to the world of WagerWire.
                </p>
                <div className='underline mt-4'>
                  <a href='https://wagerwire.com/community'>
                    view wagerwire.com/community
                  </a>
                </div>
              </div>
              <img
                src='images/www.wagerwire.com_calculator_small.png'
                alt=''
                className='h-10'
              />
            </div>
          </div>
        </ProjectBox>
        <ProjectBox projectName={"Goblin Frenzy"}></ProjectBox>
        <ProjectBox projectName={"Bruin Sports"}></ProjectBox>
        <ProjectBox projectName={"Mini Rogue"}></ProjectBox>
      </Fade>
    </div>
  );
};

export default Projects;

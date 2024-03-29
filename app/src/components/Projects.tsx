import { useState, useEffect } from "react";

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
        href='/details-wagerwire'
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
        src='/images/goblin-frenzy-demo.mp4'
        className='w-[500px] rounded-[4px]'
        controls
        poster='/images/goblin-frenzy-poster.png'
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
const Projects = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className='md:max-w-[500px] lg:max-w-[600px] font-semibold text-[16px]'>
      <a href='/' className='font-bold hover:text-[#E5BAC9]'>
        {"<"} Home
      </a>
      <h1 className='mt-5 mb-2 text-[36px] md:text-[48px] font-black'>
        Projects 🚀
      </h1>
      <h2 className='text-white pb-4'>
        A list of some personal and professional projects I am most proud of
      </h2>

      <hr className='border-black border-2' />
      <WW />
      <hr className='border-black border-2 mt-6' />
      <GoblinFrenzy />
      {!seeMore && (
        <div>
          <hr className='border-black border-2 mt-6' />
          <button
            className='text-[14px] mt-12 text-[#E5BAC9]'
            onClick={() => setSeeMore(true)}
          >
            {" "}
            Click to see more projects ▼{" "}
          </button>
        </div>
      )}
      {seeMore && (
        <div>
          <hr className='border-black border-2 mt-6' />
          <Bsports />
          <hr className='border-black border-2 mt-6' />
          <MiniRogue />
        </div>
      )}
    </div>
  );
};

export default Projects;

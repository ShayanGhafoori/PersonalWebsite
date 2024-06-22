import { useState, useRef, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { VideoObserver } from "./index";
import ReactGA from "react-ga4";

const ProjectFrame: React.FC<{
  projectName: string;
  defaultState?: boolean;
  children?: React.ReactNode;
}> = ({ projectName, defaultState, children }) => {
  const [viewProject, setViewProject] = useState(defaultState ?? false);

  return (
    <div className='uppercase'>
      <div className='flex flex-col lg:flex-row justify-between items-end'>
        <h1 className='mt-6 tracking-[0rem] md:tracking-[-0.05rem] lg:tracking-[-0.1rem] font-semibold text-white text-[24px] md:text-[40px] lg:text-[60px]'>
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

const ProjectBox: React.FC<{
  projectLanguage?: string;
  projectDescription: string;
  projectLink?: string;
  projectLinkDescription?: string;
  projectMedia?: string;
  projectSubHeader?: string;
  isVideo?: boolean;
  projectPoster?: string;
  reverseOrder?: boolean;
  projectBullets?: string[];
  lowPowerMode?: boolean;
}> = ({
  projectLanguage,
  projectDescription,
  projectLink,
  projectLinkDescription,
  projectMedia,
  projectSubHeader,
  isVideo,
  projectPoster,
  reverseOrder,
  projectBullets,
  lowPowerMode,
}) => {
  return (
    <div className='uppercase mt-4 px-2'>
      <div className='flex flex-col md:flex-row justify-between text-[14px]'>
        <div
          className={
            reverseOrder
              ? "md:w-[45%] mb-8 md:mb-0 md:order-last"
              : "md:w-[45%] mb-8 md:mb-0"
          }
        >
          <div className='mb-4 normal-case text-[#E5C88F] text-[16px] font-semibold'>
            {projectLanguage}
          </div>
          {projectSubHeader && (
            <h2 className='font-bold text-[32px]'>{projectSubHeader}</h2>
          )}
          <p className='font-normal text-white'>{projectDescription}</p>
          {projectBullets?.length != 0 && (
            <ul className='mb-4 list-["-"] list-inside mt-4'>
              {projectBullets?.map((bullet) => (
                <li className='mb-2'> {bullet}</li>
              ))}
            </ul>
          )}
          <div className='underline mt-4 text-[#E5C88F]'>
            <a href={projectLink} target='_blank'>
              {projectLinkDescription}
            </a>
          </div>
        </div>
        {!isVideo
          ? projectMedia && (
              <div className='md:w-[45%] flex flex-col justify-center'>
                <img src={projectMedia} />
              </div>
            )
          : projectMedia && (
              <div className='md:w-[50%] flex flex-col justify-center'>
                <VideoObserver
                  src={projectMedia}
                  poster={projectPoster}
                  staticFallback={projectPoster}
                  playBackRate={3}
                  lowPowerMode={lowPowerMode}
                  loop={true}
                />
              </div>
            )}
      </div>
    </div>
  );
};

const Projects = () => {
  ReactGA.send({ hitType: "pageview", page: "#projects", title: "Projects" });
  const lowPowerModeDetection = useRef<HTMLVideoElement>(null);
  const [lowPowerMode, setLowPowerMode] = useState(false);

  useEffect(() => {
    console.log("lower power mode is ", lowPowerMode);
    if (lowPowerModeDetection.current) {
      lowPowerModeDetection.current.play().catch(() => {
        // If autoplay fails - assume low power mode.
        setLowPowerMode(true);
      });
    }
  }, [lowPowerMode]);
  return (
    <div className='h-full min-h-screen pt-36 pb-10'>
      {/* Hidden video to check lower power mode */}
      <video
        ref={lowPowerModeDetection}
        muted
        playsInline
        autoPlay={false}
        controls={false}
        className={"hidden h-0 w-0"}
      >
        <source src={""} type='' />
      </video>
      <Fade triggerOnce fraction={0.75}>
        <div className='uppercase mb-4'>
          <h1 className='mt-12 tracking-[-0.05rem] md:tracking-[-0.15rem] lg:tracking-[-0.25rem] font-semibold text-[#5C5C5C] text-[36px] md:text-[60px] lg:text-[75px]'>
            Previous Projects
          </h1>
          <hr className='border-[#5C5C5C] border-2 mt-2' />
        </div>
      </Fade>
      <Fade direction='left' damping={0.2} cascade triggerOnce>
        <ProjectFrame projectName={"Tesla Stock Predictor"} defaultState={true}>
          <ProjectBox
            projectMedia='images/TeslaStock.jpg'
            projectLanguage='Python, R'
            projectLink='documents/TeslaStock.pdf'
            projectLinkDescription='Read the Paper'
            projectDescription="Leveraged a maximum likelihood approach to linear regression
            (considering Gaussian noise), z-score normalization, and recursive
            feature elimination with 10-fold cross-validation to develop an
            algorithm that predicts Tesla's stock price using average
            mean-squared error as the evaluation metric for choosing the optimal
            features of the model"
            lowPowerMode={lowPowerMode}
          />
        </ProjectFrame>
        <ProjectFrame projectName={"WagerWire"}>
          <ProjectBox
            projectLanguage='React.js, Tailwind, Sanity.io, Python, R'
            projectDescription='Professional project from my time at WagerWire, a sports betting
            startup where I worked as both a Software Engineer and Data analyst building a 
            proprietary algorithm for valuing sports bets, concurrently
            developing intuitive GUIs that enabled public utilization'
            lowPowerMode={lowPowerMode}
          />
          <hr className='border-white border-1 mt-4' />
          <ProjectBox
            isVideo
            reverseOrder
            projectSubHeader='Home Page'
            projectMedia='images/HomePage.mp4'
            projectPoster='images/HomePage-poster.png'
            projectLink='https://wagerwire.com'
            projectLinkDescription='View wagerwire.com'
            projectDescription="This carefully crafted landing page serves as the gateway to the
            WagerWire platform. I developed this intuitive interface that welcomes
            visitors and guides them seamlessly through WagerWire's offerings.
            From highlighting key app functionalities to communicating the
            commitment to empowering sports enthusiasts, the home page serves
            as a compelling introduction to the world of WagerWire."
            lowPowerMode={lowPowerMode}
          />
          <hr className='border-white border-1 mt-4' />

          <ProjectBox
            isVideo
            projectSubHeader='Calculator Page'
            projectMedia='images/CalcPage.mp4'
            projectPoster='images/CalcPage-poster.png'
            projectLink='https://wagerwire.com/calculator'
            projectLinkDescription='View wagerwire.com/calculator'
            projectDescription="As a key member of the data team, I created a sports bet pricing algorithm by analyzing extensive betting data. 
            This model accurately values bets across sports and bet types, factoring in line and odds movements, and sports dynamics. On the engineering team, 
            I used this algorithm to develop a user-friendly calculator page, enabling users to assess their bet values, showcasing the algorithm's complexity and capabilities."
            lowPowerMode={lowPowerMode}
          />
          <hr className='border-white border-1 mt-4' />
          <ProjectBox
            isVideo
            reverseOrder
            projectSubHeader='Graph Page'
            projectMedia='images/GraphPage.mp4'
            projectPoster='images/GraphPage-poster.png'
            projectLink='https://wagerwire.com/graph'
            projectLinkDescription='View wagerwire.com/graph'
            projectDescription='In addition to the algorithm and calculator page, I engineered a dynamic graph page that visualizes and tracks the monetary value of bets over time. 
            This page calls an internal REST API for odds and team information, processes the data, and applies our pricing algorithm. Users can build and compare graphs for different teams and outcomes. 
            The page also generates shareable links, ensuring recipients see the same graph, enhancing collaboration and analysis for sports bettors.'
            lowPowerMode={lowPowerMode}
          />
          <hr className='border-white border-1 mt-4' />
          <ProjectBox
            isVideo
            projectSubHeader='Community Page'
            projectMedia='images/CommunityPage.mp4'
            projectPoster='images/CommunityPage-poster.png'
            projectLink='https://wagerwire.com/community'
            projectLinkDescription='View wagerwire.com/community'
            projectDescription='I had the privilege of creating a vibrant
            community page. This dynamic hub is dedicated to fostering
            engagement and interaction among sports enthusiasts and bettors.
            Curated with diverse content including written articles, live
            interviews on Twitter, podcasts, and real-time sports news
            updates, the community page serves as a go-to destination for
            staying informed and connected with the latest in the sports
            world.'
            lowPowerMode={lowPowerMode}
          />
        </ProjectFrame>
        <ProjectFrame projectName={"Goblin Frenzy"}>
          <ProjectBox
            isVideo
            projectMedia='images/goblin-frenzy-demo.mp4'
            projectPoster='images/goblin-frenzy-poster.png'
            projectLanguage='Python'
            projectLink='https://github.com/ShayanGhafoori/Goblin-Frenzy'
            projectLinkDescription='View the Github'
            projectDescription="A Personal Project I developed as a hobby while exploring Python's
            Pygame module. Experience endless rounds of increasing difficulty in
            this Python-based computer game. Assume the role of a ninja tasked
            with fending off waves of goblins. As the game progresses, goblin
            numbers and strength escalate, challenging players to adapt and
            survive. Utilize various objects strategically to enhance gameplay
            and overcome obstacles."
            projectBullets={[
              "Created an algorithm for spawning goblins, ensuring none overlap",
              "Developed a custom -- quasi Dijkstra's -- algorithm to ensure goblins take the shortest path to the player while preventing infinite looping of sprite animations",
              "Maximized gameplay experience by accounting for variables such as angle of attack, health status, user input, and collisions when synchronizing sprite animations with character movement",
            ]}
            lowPowerMode={lowPowerMode}
          />
        </ProjectFrame>
        <ProjectFrame projectName={"Bruin Sports"}>
          <ProjectBox
            projectLanguage='MongoDB, Express.js, Node.js, React.js'
            projectLink='https://github.com/maxdalton01/bSports/tree/ShayanBranch'
            projectLinkDescription='View the Github'
            projectDescription=' B-Sports was the final project for a capstone software construction
            class, where I led the frontend development with a dedicated team of
            five members. B-Sports is a dynamic client-server web application
            constructed using the MERN stack. Tailored to the UCLA community, it
            provides a platform for UCLA students to register and organize
            pick-up games across campus, alongside the ability to browse and
            RSVP to other listed games.'
            lowPowerMode={lowPowerMode}
          />
        </ProjectFrame>
        <ProjectFrame projectName={"Mini Rogue"}>
          <ProjectBox
            projectLanguage='C++'
            projectLink='https://github.com/ShayanGhafoori/Mini-Rogue'
            projectLinkDescription='View the Github'
            projectDescription='My video game rendition of the Mini Rogue board game. Fight your way
            through a dungeon by collecting many different scrolls and weapons
            to battle a diverse group of monsters you encounter along the way.
            Climb the staircase to move on to the next level. Be careful, the
            levels get harder and the monsters become more dangerous as you
            progress. Win by making it to the final level and picking-up the
            Golden Idle.'
            projectBullets={[
              "Crafted a custom, progressive algorithm for dynamically generating randomized dungeon layouts, weapons, and enemies at each level",
            ]}
            lowPowerMode={lowPowerMode}
          />
        </ProjectFrame>
      </Fade>
    </div>
  );
};

export default Projects;

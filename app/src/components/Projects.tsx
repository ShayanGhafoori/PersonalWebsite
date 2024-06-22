import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

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
}) => {
  return (
    <div className='uppercase mt-4 px-2'>
      <div className='flex flex-col md:flex-row justify-between text-[14px]'>
        <div
          className={
            reverseOrder
              ? "md:w-[50%] mb-8 md:mb-0 md:order-last"
              : "md:w-[50%] mb-8 md:mb-0"
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
              <div className='md:w-[36%] flex flex-col justify-center'>
                <img src={projectMedia} />
              </div>
            )
          : projectMedia && (
              <div className='md:w-[45%] flex flex-col justify-center'>
                <video
                  src={projectMedia}
                  className='rounded-[12px] border-2 border-[#5C5C5C]'
                  controls
                  poster={projectPoster}
                />
              </div>
            )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='h-full min-h-screen pt-36 pb-10'>
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
          />
        </ProjectFrame>
        <ProjectFrame projectName={"WagerWire"}>
          <ProjectBox
            projectLanguage='React.js, Tailwind, Sanity.io, Python, R'
            projectDescription='Professional project from my time at WagerWire, a sports betting
            startup where I worked as both a Software Engineer and Data analyst building a 
            proprietary algorithm for valuing sports bets, concurrently
            developing intuitive GUIs that enabled public utilization'
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
            WagerWire platform, encapsulating the essence of WagerWire's
            mission and showcasing the app's features in a clear and engaging
            manner. Through strategic layout and user-centered design
            principles, I developed this intuitive interface that welcomes
            visitors and guides them seamlessly through WagerWire's offerings.
            From highlighting key app functionalities to communicating the
            commitment to empowering sports enthusiasts, the home page serves
            as a compelling introduction to the world of WagerWire."
          />
          <hr className='border-white border-1 mt-4' />

          <ProjectBox
            isVideo
            projectSubHeader='Calculator Page'
            projectMedia='images/CalcPage.mp4'
            projectPoster='images/CalcPage-poster.png'
            projectLink='https://wagerwire.com/calculator'
            projectLinkDescription='View wagerwire.com/calculator'
            projectDescription='As an integral member of the data team, I played a pivotal role in the creation of our
            proprietary sports bet pricing algorithm. Collaborating closely
            with colleagues, I meticulously gathered and analyzed 22 years of
            sports betting data, resulting in a model capable of accurately
            pricing/valuing bets across various sports and bet types. The
            model factors in variables such as line movement, odds movement,
            bet type, and specific sports dynamics. The formulation of this
            model involved the development of other models, such as ones to
            accurately predict the distribution of percent change in bet value
            (from any given buy and sell interval) across various sports,
            sports leagues, and bet types. As a member of the engineering team, I leveraged this algorithm and developed an intuitive frontend
            calculator page, enabling users to independently assess the
            current value of their bets. The calculator is a simple tool for
            evaluating straight bets and straight bet parlays, and only
            represents a glimpse into the complexity of the algorithm and its
            full capabilities.'
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
            projectDescription='In addition to my contributions to the algorithm and calculator
            page (see above) -- I engineered a dynamic graph page that enables
            users to visualize and track the monetary value of their bets over
            time, offering invaluable insights into bet value fluctuations.
            This page utilizes calls to an internal REST API that returns odds
            and comprehensive team information. From there I process the APIs
            contents and transform it into a useable format, and apply our
            proprietary bet pricing algorithm. Users can build their own
            graphs comparing different teams and outcomes, thanks to the
            integration of odds and pertinent team data. Notably, the graph
            page includes functionality to generate shareable links, ensuring
            recipients accessing the link view the exact same graph. This
            seamless sharing capability enhances collaboration and analysis
            among users, making the graph page an indispensable tool for
            sports bettors.'
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
          />
        </ProjectFrame>
        <ProjectFrame projectName={"Goblin Frenzy"}>
          <ProjectBox
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
          />
        </ProjectFrame>
      </Fade>
    </div>
  );
};

export default Projects;

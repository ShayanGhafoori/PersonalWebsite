const WW = () => {
  return (
    <div>
      <h1 className='my-5'>
        <a
          href='https://wagerwire.com'
          className='font-bold text-[28px] hover:text-[#E5BAC9]'
        >
          WagerWire.com
        </a>
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
      <div className='mb-4'>
        Developed every page of
        <span>
          {" "}
          <a href='https://wagerwire.com' className='font-bold text-[#E5BAC9]'>
            WagerWire.com
          </a>
        </span>
      </div>
      <div className='mb-4'>
        As a vital member of the data team, I built a proprietary sports betting
        algorithm, drawing insights from 22 years of diverse betting data
        spanning multiple sports and bet-types.
      </div>

      <div className='mb-4'>
        As a vital member of the engineering team, I spearheaded the development
        of the <span className='italic font-extralight'> /calculator</span> and
        <span className='italic font-extralight'> /graph </span> pages of
        <span className='italic font-extralight'> wagerwire.com </span>. These
        user-friendly interfaces empower individuals to independently calculate
        the monetary worth of their bets and visualize value fluctuations over
        time across various sports, all achieved using the algorithm.
      </div>
      <div className='mb-4'>
        Additionally, I created the{" "}
        <span className='italic font-extralight'> / </span> (home) page--
        effectively encapsulating WagerWire's mission and the app's features--
        as well as a vibrant{" "}
        <span className='italic font-extralight'> /community </span> page that
        hosts an array of sports-related content, fostering engagement and
        interaction among users.
      </div>
      <a
        href='/details-wagerwire'
        className='font-bold text-[15px] text-yellow-300 underline pt-4'
      >
        See more details
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='md:max-w-[500px] lg:max-w-[600px] font-semibold'>
      <a href='/' className='font-bold text-[16px] hover:text-[#E5BAC9]'>
        {"<"} Home
      </a>
      <h1 className='my-5 text-[48px] md:text-[64px] font-black'>
        Projects 🚀
      </h1>
      <h2 className='text-white pb-4'>
        A list of some personal and professional projects I am most proud of
      </h2>

      <hr className='border-black border-2' />
      <WW />
    </div>
  );
};

export default Projects;

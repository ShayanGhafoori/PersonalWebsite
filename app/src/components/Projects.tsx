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
      </h1>

      <div className='mb-4 italic font-extralight'>
        Professional project from my time at WagerWire, a sports betting startup
        where I worked as both a software engineer and data analyst
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
      <div className='mb-2'>
        Additionally, as a key contributor to the data team, I played a pivotal
        role in formulating a proprietary algorithm used to assess the value of
        sports bets before closure. Applying this methodology, I crafted the
        /calculator and /graph pages, empowering users to independently compute
        their bets' dollar value and gain visual insights into the fluctuation
        of values over time for their bets and related ones.
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

import Nav from "./Nav";
import LastUpdated from "./LastUpdated";

const Home = () => {
  return (
    <div className='md:max-w-[500px] lg:max-w-[600px] font-semibold'>
      <Nav />
      <div className='flex flex-col items-start justify-center max-w-full'>
        <div className='text-[30px] md:text-[50px] font-bold pb-4'>
          Shayan Ghafoori
        </div>

        <p className='pb-6'>
          Your friendly neighborhood Software Engineer 🕷️🔴
        </p>
        <p className='pb-6'>
          I like to combine my passions for SWE and Data Science to build new
          stuff 🛠️👾
        </p>
        <div className='text-[14px] font-normal italic'>
          <p className='mb-4'>
            Currently working full-time as a Software Engineer at Raytheon
            Technologies while pursuing my M.S. in Machine Learning from The
            University of Arizona
          </p>
          <p className='mb-4 line-through'>
            Currently working as a Software Engineer and Data Analyst at
            WagerWire while pursuing my B.S. in Mathematics and Computation w/ a
            minor in Statistics and Data Science from The University of
            California, Los Angeles (UCLA)
          </p>
        </div>

        <p className='pb-2'>
          Check out what I've been up to --
          <span>
            <a href='/#/projects' className='underline text-[#E5BAC9] ml-2'>
              Projects
            </a>
          </span>
        </p>
      </div>
      <LastUpdated />
    </div>
  );
};

export default Home;

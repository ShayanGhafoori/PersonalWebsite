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
        <p className='pb-6'>Hello world! 🌍</p>
        <p className='pb-6'>
          Just your friendly neighborhood Software Engineer 🕷️🔴
        </p>
        <p className='pb-6'>
          I like to combine my passions for SWE and Data Science to build new
          stuff 🛠️👾
        </p>
        <p className='pb-6'>
          Check out what I've been up to --
          <span>
            <a href='/projects' className='underline text-[#E5BAC9] ml-2'>
              Projects
            </a>
          </span>
        </p>
        <p>
          If you want to know a bit more{" "}
          <span>
            <a href='/about' className='underline text-[#E5BAC9]'>
              about
            </a>
          </span>{" "}
          me and my story 📚
        </p>
      </div>
      <LastUpdated />
    </div>
  );
};

export default Home;

import { LinkedIn, Resume, Github } from "./svgs";

const Nav = () => {
  return (
    <div className='flex flex-row justify-between font-semibold uppercase items-start leading-8'>
      <h1 className='text-[36px]'>
        Shayan <br /> Ghafoori
      </h1>
      <div className='flex flex-row justify-between underline text-[24px]'>
        <a
          href='https://www.linkedin.com/in/shayan-ghafoori/'
          className='ml-6 hidden md:flex'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/ShayanGhafoori'
          className='ml-6 hidden md:flex'
        >
          Github
        </a>
        <a href='TODO' className='ml-6'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Nav;

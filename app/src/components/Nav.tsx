import { LinkedIn, Resume, Github } from "./svgs";

const Nav = () => {
  return (
    <ul className='flex flex-row justify-start items-center w-[60%]'>
      <a
        href='https://www.linkedin.com/in/shayan-ghafoori/'
        className='bg-white mr-2 p-2 w-full flex flex-row justify-center items-center rounded-md hover:opacity-60 cursor-pointer'
      >
        <LinkedIn />
        <div className='ml-2 hidden md:flex'> LinkedIn</div>
      </a>
      <a
        href='https://github.com/ShayanGhafoori'
        className='bg-white mr-2 p-2 w-full flex flex-row justify-center items-center rounded-md hover:opacity-60 cursor-pointer'
      >
        <Github />
        <div className='ml-2 hidden md:flex'> Github</div>
      </a>
      <a
        href='TODO'
        className='bg-white mr-2 p-2 w-full flex flex-row justify-center items-center rounded-md hover:opacity-60 cursor-pointer'
      >
        <Resume />
        <div className='ml-2'> Resume</div>
      </a>
    </ul>
  );
};

export default Nav;

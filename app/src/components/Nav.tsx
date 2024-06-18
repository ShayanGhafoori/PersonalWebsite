import { LinkedIn, Resume, Github } from "./svgs";

const Nav = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between font-semibold uppercase items-start leading-8'>
      <h1 className='text-[32px] md:text-[36px]'>
        Shayan <br /> Ghafoori
      </h1>
      <div className='flex flex-row justify-between underline text-[22px] md:text-[24px] mt-4 md:mt-0'>
        <a href='https://www.linkedin.com/in/shayan-ghafoori/' target='_blank'>
          LinkedIn
        </a>
        <a
          href='https://github.com/ShayanGhafoori'
          target='_blank'
          className='ml-4 md:ml-6'
        >
          Github
        </a>
        <a href='documents/Resume.pdf' target='_blank' className='ml-4 md:ml-6'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Nav;

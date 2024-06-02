import { Slide, Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className='mt-72 uppercase'>
      <Fade duration={2700} delay={400} triggerOnce>
        <h1 className='tracking-[-0.3rem] leading-[5rem] font-semibold text-[75px] w-[80%]'>
          Curious to learn more about my skills?
        </h1>
        <div className='mt-8'>
          <button
            onClick={() =>
              (window.location.href = "mailto:ghafoorishayan@gmail.com")
            }
          >
            <div className='underline uppercase text-[20px]'>
              Drop me a line
            </div>
          </button>
        </div>
      </Fade>

      <div className='mt-24'>
        <hr className='border-white border-1 mt-4' />
        <div className='mt-4 flex flex-row justify-between leading-[2rem]'>
          <div className='text-[32px] font-bold tracking-[-0.1rem]'>
            Shayan <br /> Ghafoori
          </div>
          <div className='text-[24px] font-normal '>
            {" "}
            All Rights <br /> reserved 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

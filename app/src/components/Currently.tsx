import { Fade } from "react-awesome-reveal";

const Currently = () => {
  return (
    <div className='text-[90px] uppercase h-screen pt-36'>
      <Fade duration={2700} delay={300} triggerOnce>
        <h2 className='text-[24px]'> Currently I am...</h2>
        <h1 className='mt-12 tracking-[-0.4rem] leading-[5rem] font-black text-white'>
          Working full-time as a{" "}
          <span className='text-[#5C5C5C]'> Software Engineer</span> at Raytheon
          Technologies while pursuing my M.S. in
          <span className='text-[#5C5C5C]'> Machine Learning</span> from The
          University of Arizona
        </h1>
      </Fade>
    </div>
  );
};

export default Currently;

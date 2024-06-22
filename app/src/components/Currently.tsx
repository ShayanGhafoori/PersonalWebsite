import { Fade } from "react-awesome-reveal";

const Currently = () => {
  return (
    <div className='uppercase h-full min-h-screen pt-36 lg:pt-[10%] '>
      <Fade duration={2700} delay={300} fraction={0.4} triggerOnce>
        <h2 className='text-[24px]'> Currently I am...</h2>
        <h1
          className='mt-12 font-black text-white'
          style={{
            fontSize: "6.5vw",
            lineHeight: "6vw",
            letterSpacing: "-0.3vw",
          }}
        >
          Working full-time as a{" "}
          <span className='text-[#E5C88F]'> Software Engineer</span> at Raytheon
          Technologies while pursuing my M.S. in
          <span className='text-[#E5C88F]'> Machine Learning</span> from The
          University of Arizona
        </h1>
      </Fade>
    </div>
  );
};

export default Currently;

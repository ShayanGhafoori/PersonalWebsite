import Nav from "./Nav";
import { DownArrow } from "./svgs";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { Slide, Fade } from "react-awesome-reveal";

const Header = () => {
  const [complete, setComplete] = useState(false);

  return (
    <div className='text-[115px] lg:text-[135px] xl:text-[150px] uppercase h-full min-h-screen'>
      <Nav />
      <h1 className='mt-12 tracking-[-0.45rem] lg:tracking-[-0.6rem] leading-[6rem] lg:leading-[7.6rem] font-black text-[#5C5C5C] lg:pt-[2%] xl:pt-[10%]'>
        <ReactTyped
          strings={[
            "<span style='color:white;'>Software Engineer</span> who uses <span style='color:white;'>data science</span> to build cool stuff.",
          ]}
          typeSpeed={50}
          onComplete={() => setComplete(true)}
          showCursor={false}
        />
        {complete && (
          <div className='inline-block pl-6 pt-2 w-28 lg:w-32 xl:w-36'>
            <Fade direction='down' delay={25} triggerOnce>
              <DownArrow />
            </Fade>
          </div>
        )}
      </h1>
    </div>
  );
};

export default Header;

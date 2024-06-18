import Nav from "./Nav";
import { DownArrow } from "./svgs";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { Slide, Fade } from "react-awesome-reveal";

const Header = () => {
  const [complete, setComplete] = useState(false);

  return (
    <div className='uppercase min-h-screen h-full'>
      <Nav />
      <div className='mt-[30%] md:mt-[25%] lg:mt-[5%]'>
        <h1
          className='font-black text-[#5C5C5C] relative'
          style={{
            fontSize: "9.4vw",
            lineHeight: "8.7vw",
            letterSpacing: "-0.5vw",
            textShadow: "0px 1px, 1px 0px, 1px 1px",
          }}
        >
          <ReactTyped
            strings={[
              "<span style='color:white;'>Software Engineer</span> who uses <span style='color:white;'>data science</span> to build cool stuff.",
            ]}
            typeSpeed={50}
            onComplete={() => setComplete(true)}
            showCursor={false}
          />
          {complete && (
            <div
              className='inline-block pl-4 md:pl-6 pt-1 min-w-12 md:min-w-20 absolute'
              style={{ width: "9.4vw" }}
            >
              <Fade direction='down' delay={25} triggerOnce>
                <DownArrow />
              </Fade>
            </div>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Header;

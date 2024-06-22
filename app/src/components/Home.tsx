import { Header, Currently, Projects, Footer } from "./index";
import ReactGA from "react-ga4";

const Home = () => {
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
  return (
    <div className='w-full '>
      {/* Hidden image to appear in Google results */}
      <img
        rel='meta'
        src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👾</text></svg>"
        alt="Shayan's Portfolio"
        className='hidden'
      />
      <Header />
      <Currently />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;

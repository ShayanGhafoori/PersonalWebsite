import { Header, Currently, Projects, Footer } from "./index";
import ReactGA from "react-ga4";

const Home = () => {
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
  return (
    <div className='w-full'>
      <Header />
      <Currently />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;

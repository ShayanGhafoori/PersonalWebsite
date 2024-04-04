import { Header, Currently, Projects } from "./index";

const Home = () => {
  return (
    <div className='w-full '>
      <Header />
      <Currently />
      <Projects />
    </div>
  );
};

export default Home;

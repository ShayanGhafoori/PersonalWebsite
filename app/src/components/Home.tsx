import { Header, Currently, Projects, Footer } from "./index";

const Home = () => {
  return (
    <div className='w-full '>
      <Header />
      <Currently />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;

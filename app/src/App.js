import { Home, Projects, About } from "./components";
import { WagerWire } from "./components/details-pages";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <body className='bg-[#798ECE] h-full min-h-screen bg-scroll px-10 py-10 md:px-20 md:py-20 font-lucida-sans-typewriter'>
      <HashRouter>
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/projects' exact={true} element={<Projects />} />
          <Route path='/about' exact={true} element={<About />} />
          <Route
            path='/details-wagerwire'
            exact={true}
            element={<WagerWire />}
          />
        </Routes>
      </HashRouter>
    </body>
  );
};

export default App;

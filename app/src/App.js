import { Home, Projects, About } from "./components";
import { WagerWire } from "./components/details-pages";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <body className='bg-[#333333] h-full min-h-screen bg-scroll overflow-x-scroll font-neue-haas-grotesk text-white p-8'>
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

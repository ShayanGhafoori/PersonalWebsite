import { Home, Projects, About } from "./components";
import { HashRouter, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

const App = () => {
  ReactGA.initialize("G-4BMF8VVYPD");
  return (
    <body className='bg-[#333333] h-full min-h-screen bg-scroll overflow-x-scroll font-neue-haas-grotesk text-white p-8'>
      {/* <HashRouter>
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/projects' exact={true} element={<Projects />} />
        </Routes>
      </HashRouter> */}
      Under Maintanence
    </body>
  );
};

export default App;

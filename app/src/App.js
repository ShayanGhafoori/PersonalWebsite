import { Home, Projects, About } from "./components";
import { WagerWire } from "./components/details-pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <body className='bg-[#798ECE] h-full min-h-screen bg-scroll px-10 py-10 md:px-20 md:py-20 font-lucida-sans-typewriter'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/projects' exact element={<Projects />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/details-wagerwire' exact element={<WagerWire />} />
        </Routes>
      </Router>
    </body>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "pages";
import { Navbar } from "components";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar authenticated={false} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

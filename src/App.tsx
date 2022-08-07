import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Login, Register } from "pages";
import { Navbar, Footer } from "components";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar authenticated={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

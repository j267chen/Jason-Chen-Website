import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// pages
import { Home, About, Projects, Contact, P1, P2, P3, P4 } from "./pages";

// components
import { Navbar } from "./components";

// app
const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      {/* routes */}
      <Router>
        {/* navbar */}
        <Navbar />

        {/* other routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/P1" element={<P1 />} />
          <Route path="/P2" element={<P2 />} />
          <Route path="/P3" element={<P3 />} />
          <Route path="/P4" element={<P4 />} />
        </Routes>

        {/* TODO: footer */}
      </Router>
    </main>
  );
};

export default App;

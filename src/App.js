import { useContext } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Index from "./components/Pages/Index/Index";
import ResumePage from "./components/Pages/Resume/ResumePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <Router>
      <div id="top" className={`${themeName} app`}>
        <Header />
        <Routes>
          <Route path="/abhinavchat-portfolio" element={<Index />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

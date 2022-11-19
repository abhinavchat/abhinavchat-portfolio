import { useContext } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route, HashRouter as Router } from "react-router-dom";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Index from "./components/Pages/Index/Index";
import ResumePage from "./components/Pages/Resume/ResumePage";
import NotFound from './components/Pages/NotFound/NotFound';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <Router basename="/abhinavchat-portfolio">
      <div id="top" className={`${themeName} app`}>
        <Header />
        <Routes>
          <Route index element={<Index />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route element={<NotFound />} status={404} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

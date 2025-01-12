import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import { useLanguage } from "./components/context/LanguageContext";

function App() {
  const { language } = useLanguage();

  return (
    <>
      <div className={language === "en" ? "font-en" : "font-kh"}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

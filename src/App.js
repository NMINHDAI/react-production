import { useEffect, useState } from "react";
import "./App.css";
import Authentic from "./pages/Authentic";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);
  return (
    <>
      <div className="h-screen flex flex-col " id="container">
        <NavBar isMobile={isMobile} />

        <Authentic isMobile={isMobile} />

        <Footer isMobile={isMobile} />
      </div>
    </>
  );
}

export default App;

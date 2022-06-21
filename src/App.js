import "./App.css";
import { useState, useEffect } from "react";
import Main from "./views/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/common/Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import PreLoader from "../src/common/PreLoader copy";
import { useScreenFixedProvider } from "../src/components/context/ScreenFixedProvider";
// import "animate.css";
const App = () => {
  const [loading, setLoading] = useState(false);
  const { showOverlay } = useScreenFixedProvider();
  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("setClass");
    } else {
      document.body.classList.remove("setClass");
    }
  }, [showOverlay]);
  AOS.init({
    once: true,
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return <>{loading ? <Main /> : <PreLoader />}</>;
};

export default App;

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;

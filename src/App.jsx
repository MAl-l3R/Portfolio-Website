import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

import { About, Contact, Hero, Navbar, Tech, Projects, StarsCanvas } from './components'; // Include Experience and use below
import { DroidCanvas } from './components/canvas';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="canvas-container">
          {!isMobile && <DroidCanvas />}
        </div>
        <div className="relative z-0">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Projects />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

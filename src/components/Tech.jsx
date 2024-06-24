import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

const Tech = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 695px)");

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

  const itemsPerPage = isMobile ? 6 : 13;
  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const handlePageChange = (newPage) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setLoading(false);
    }, 500); // Adjust delay as needed
  };

  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [loading]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Know</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      {loading ? (
        <>
          <div className=" w-full h-[400px]"></div>
          <LoadingScreen />
        </>
      ) : (
        <>
          <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
            {paginate(technologies, itemsPerPage, currentPage).map((technology) => (
              <Tilt className={isMobile ? "w-20 h-20" : "w-28 h-28"} key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </Tilt>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-10">
            <button
              className="p-3"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              hidden={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="p-3"
              onClick={() => handlePageChange(Math.min(currentPage + 1, Math.ceil(technologies.length / itemsPerPage)))}
              hidden={currentPage === Math.ceil(technologies.length / itemsPerPage)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");

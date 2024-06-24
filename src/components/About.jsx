import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { styles } from '../styles';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
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
  }, [])

  const handleButtonClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-[17px] w-full leading-[30px] ${isMobile ? 'text-secondary' : null}`}
      >
        Hello there! 👋 I'm Maher, a 4th-year computer science student at the University of Alberta. I'm passionate about software engineering, 
        with a keen focus in app and web development and a very strong interest in artificial intelligence and machine learning. 
        I stay ahead with emerging technologies and focus on building scalable, efficient, and user-friendly applications. 
        Eager for exciting internship opportunities to further my skills and make an impact. Let's connect and create something amazing together!
      </motion.p>

      <div className='w-full items-center justify-center flex mt-10'>
        <Tilt>
          <motion.div
            variants={fadeIn("right", "spring", 0.4, 0.75)}
            className='rounded-[50px] shadow-card flex items-center justify-center w-[200px] h-[65px] cursor-pointer green-pink-gradient'
            onClick={handleButtonClick}
          >
            <div
              className='bg-tertiary rounded-[50px] flex items-center justify-center h-[90%] w-[96%]'
            >
              <p className='text-white text-[20px] font-bold text-center'>View Resume</p>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')

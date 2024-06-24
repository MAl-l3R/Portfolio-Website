import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { DroidCanvas } from './canvas';

const Hero = () => {
  const name = 'Maher.';
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
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

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => clearInterval(ticker);
  }, [text])

  const tick = () => {
    let updatedText = isDeleting ? name.substring(0, text.length - 1) : name.substring(0, text.length + 1);
    setText(updatedText);
    
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === name) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setDelta(500);
    }
  }

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[115px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* This is for the Pin */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ffffff]' /> {/* The Ball of the Pin */}
          <div className='w-1 sm:h-80 h-40 white-gradient' /> {/* The Needle of the Pin */}
        </div>

        {/* The Introduction */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#ffffff]'>{text}</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>A passionate full-stack developer <br className='sm:block hidden'/> and artificial intelligence enthusiast</p>
        </div>
      </div>

      {isMobile && 
        <div  className="canvas-container-mobile">
          <DroidCanvas />
        </div>
      }

      <div className='absolute xs:bottom-10 bottom-32 pl-[2.25rem]'>
        <a href="#about">
          <div className='w-[45px] h-[80px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              style={{
                width: '5px',
                height: '15px',
                borderRadius: '25%',
                backgroundColor: '#dfd9ff',
                marginTop: '1px'
              }}
            />
          </div>
        </a>
      </div>
      
    </section>
  )
}

export default Hero

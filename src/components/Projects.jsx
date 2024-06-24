import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { github, link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ( {index, name, description, tags, image, url, source_code_link} ) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='green-pink-gradient p-[1px] rounded-2xl shadow-card'
      >
        <div
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-covedr rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img-hover gap-1.5">
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={link}
                  alt="url"
                  className="w-[47%] h-[47%] object-contain"
                  onClick={() => window.open(url, "_blank")}
                />
              </div>

              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-[60%] h-[60%] object-contain"
                  onClick={() => window.open(source_code_link, "_blank")}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Projects = () => {
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

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-[17px] w-full leading-[30px] ${isMobile ? 'text-secondary' : null}`}
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to the code repository and a live demo. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
        {projects.map( (project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )    
}

export default SectionWrapper(Projects, "projects");

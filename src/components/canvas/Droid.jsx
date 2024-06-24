import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Droid = ({ isMobile, scrollPosition }) => {
  const droid = useGLTF("./fluxs_pit_stop/scene.gltf");
  const droidRef = useRef();

  useFrame(() => {
    if (droidRef.current) {
      if (!isMobile) {
        // Calculate new scale based on scroll position
        const minScale = 0.5;
        const maxScale = 1;
        const newScale = Math.max(minScale, maxScale - scrollPosition * 0.001);

        const screenWidth = window.innerWidth;
        const maxHorizontalOffset = 5; // Adjust this factor as needed
        const horizontalOffset = (scrollPosition / screenWidth) * maxHorizontalOffset;

        droidRef.current.position.x = horizontalOffset;
        droidRef.current.scale.set(newScale, newScale, newScale);
      }
    }
  });

  return (
    <mesh ref={droidRef}>
      <primitive
        object={droid.scene}
        scale={isMobile ? 2 : 3.5}
        position={isMobile ? [0, -2, -0.5] : [0, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const DroidCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          reverseHorizontalOrbit
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Droid isMobile={isMobile}  scrollPosition={scrollPosition} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DroidCanvas;

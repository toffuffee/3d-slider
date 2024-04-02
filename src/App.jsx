import React, { useRef, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Person from "./3d_models/person/Person";
import Keyboard from "./3d_models/keyboard/Keyboard";
import "./App.css";

function App() {
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const scrollStepRef = useRef(0);

  const handleScroll = (event) => {
    event.preventDefault();
    const delta = event.deltaY;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    let targetScroll;

    if (delta > 0) {
      targetScroll = Math.min(
        scrollLeft + scrollStepRef.current,
        scrollContentRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth
      );
    } else {
      targetScroll = Math.max(scrollLeft - scrollStepRef.current, 0);
    }

    smoothScroll(scrollContainerRef.current, scrollLeft, targetScroll, 600);
  };

  const smoothScroll = (element, start, end, duration) => {
    let startTime = null;
    const easeFunction = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeFunction(timeElapsed / duration);
      element.scrollLeft = start + (end - start) * run;
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  // Вычисляем значение scrollStepRef при монтировании компонента
  React.useEffect(() => {
    scrollStepRef.current = scrollContentRef.current.clientWidth / 1;
  }, []);

  return (
    <div
      className="scroll-container"
      ref={scrollContainerRef}
      onWheel={handleScroll}
    >
      <div className="scroll-content" ref={scrollContentRef}>
        <div className="scroll-item item1">
        <Canvas camera={{position: [0, 0, 100], zoom: 1}} style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={null}>
              <group position={[0, -120, -80]} scale={[1, 1, 1]}>
                <Person />
              </group>
            </Suspense>
          </Canvas>
        </div>
        <div className="scroll-item item2">
          <Canvas camera={{position: [0, 0, 500], zoom: 1}} style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={null}>
              <group position={[-40, 0, 0]} scale={[1, 1, 1]}>
                <Keyboard />
              </group>
            </Suspense>
          </Canvas>
        </div>
        <div className="scroll-item item3"></div>
        <div className="scroll-item item4"></div>
        <div className="scroll-item item5"></div>
      </div>
    </div>
  );
}

export default App;

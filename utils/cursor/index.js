import React, { useRef, useEffect } from "react";
import "./styles.scss";
// import { gsap } from "gsap";

const Cursor = () => {
  const dotOutline = useRef();
  // const dot = useRef();
  const ref = useRef();



  useEffect(() => {
    // if (dot.current) {
    //   gsap.set(dot.current, { xPercent: -50, yPercent: -50 });
    //   gsap.set(dotOutline.current, { xPercent: -50, yPercent: -50 });
    //   window.addEventListener("mousemove", (e) => {
    //     gsap.to(".cursor-outline", {
    //       duration: 0.9,
    //       x: e.clientX,
    //       y: e.clientY,
    //     });
    //     gsap.to(".cursor-dot", { duration: 0, x: e.clientX, y: e.clientY });
    //   });
    // }
    if (ref.current) {
      let mouseCursor = document.getElementById("cursor");
      let mouseCircle = document.getElementById("cursorOutline");

      document.onmousemove = (e) => {
        mouseCursor.style.left = e.pageX - 50 + "px";
        mouseCursor.style.top = e.pageY - 50 + "px";
        mouseCursor.style.display = "block";
        mouseCircle.style.left = e.pageX - 65 +  "px";
        mouseCircle.style.top = e.pageY  - 65 + "px";
        mouseCircle.style.display = "block";
      }
    }
  });

  return (
    <>
      {/* <div ref={dot} className="cursor-dot"></div>*/}
      <div ref={dotOutline}  id="cursorOutline" className="cursor-outline"></div>
      <div ref={ref} id="cursor" className="cursorCircle"></div>
    </>
  );

};

export default Cursor;

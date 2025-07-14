import React, { useRef } from "react";
import { flavorlists } from "../constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FlavorSlider = () => {
  const sliderRef = useRef();
  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    console.log(scrollAmount);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrollAmount + 1500}px`,
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrollAmount + 1500}px`,
      ease: "power1.inOut",
    });
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[60vh] md:w-[90vw] md:h-[50vh] h-80  flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt={flavor.name}
              className="absolute bottom-0"
            />
            <img
              src={`public/images/${flavor.color}-drink.webp`}
              alt={flavor.name}
              className="drinks"
            />

            <img
              src={`public/images/${flavor.color}-elements.webp`}
              alt={flavor.name}
              className="elements"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;

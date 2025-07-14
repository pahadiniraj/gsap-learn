import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });

    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.fromTo(
      ".flavor-text-scroll",
      {
        clipPath: "inset(0 100% 0 0)",
      },
      {
        duration: 1,
        clipPath: "inset(0 0% 0 0)",
        start: "top 30%",
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top 30%",
        },
      }
    );

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });
  });

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16 ">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split  px-2">
        <h1>We Have 6</h1>
      </div>

      <div className="flavor-text-scroll">
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3 ">
          <h2 className="text-milk">Freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split px-2">
        <h1>Delicious Flavours</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;

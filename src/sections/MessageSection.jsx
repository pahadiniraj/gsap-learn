import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });

    const secondtMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    // const paragraphtMsgSplit = SplitText.create(".message-content p", {
    //   type: "words , lines",
    //   linesClass: "paragraph-line",
    // });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: "message-content",
        start: "10% end",
        end: "50% center",
        scrub: true,
      },
    });

    gsap.to(secondtMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: "second-message",
        start: "35% end",
        end: "50% end",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 100%", // Better trigger point
        end: "bottom 20%",
        scrub: 1, // Smooth scrub animation
        markers: true,
      },
    });

    revealTl.fromTo(
      ".msg-text-scroll",
      {
        clipPath: "inset(0 100% 0 0)", // Start fully clipped (hidden)
      },
      {
        clipPath: "inset(0 0% 0 0)", // End fully revealed
        duration: 2,
        ease: "circ.inOut",
      }
    );
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative ">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>
            <div className="msg-text-scroll">
              <div className="bg-light-brown md:p-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>
            <h1 className="second-message">
              your future with every gulp of Perfect Protine
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                consequuntur ex at dicta cupiditate? Exercitationem maiores
                temporibus sed cupiditate laudantium corrupti dolorum enim.
                Neque deleniti ex veritatis nemo perspiciatis illum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;

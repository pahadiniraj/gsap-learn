import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const HeroSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });
    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll ",
        {
          duration: 1,
          clipPath: "polygon(0% 0%,100% 0, 100% 100%,0% 100% )",
          ease: "circ.out",
        },
        "-=0.3"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        scrub: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="/images/static-img.png"
          alt="hero-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2  object-auto scale-100 md:scale-150 "
        />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protine + caffine</h1>
            </div>
          </div>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            doloremque accusantium incidunt fugiat ut, adipisci architecto est
            debitis sunt alias deleniti, quia quis assumenda? Voluptate
            inventore consequatur cupiditate rerum tenetur.
          </h2>
          <div className="hero-button">
            <p>Chug a Spyut</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

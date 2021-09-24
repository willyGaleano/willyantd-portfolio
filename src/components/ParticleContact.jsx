import Particles from "react-particles-js";
import arroba from "../assets/svg/cartita.svg";
import email from "../assets/svg/email2.svg";

function ParticleContact() {
  return (
    <Particles
      width="100%"
      height="100vh"
      style={{ position: "absolute" }}
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: "out",
          },
          shape: {
            type: ["images"],
            images: [
              {
                src: email,
                height: 100,
                width: 100,
              },
              {
                src: arroba,
                height: 100,
                width: 100,
              },
            ],
          },
          color: {
            value: "#000000",
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}

export default ParticleContact;

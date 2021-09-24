import Particles from "react-particles-js";
import net from "../assets/svg/net.svg";
import react from "../assets/svg/react.svg";
import antd from "../assets/svg/antd.svg";
import "./Particle.css";

function Particle() {
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
                src: react,
                height: 100,
                width: 100,
              },
              {
                src: net,
                height: 100,
                width: 100,
              },
              {
                src: antd,
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

    /*
    el primero
    <Particles
      width="100%"
      height="100%"
      params={{
        particles: {
          number: {
            value: 109,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: "#636e72",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
            },
            polygon: {
              nb_sides: 10,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            opacity: 0.9,
            width: 1,
            shadow: {
              enable: true,
              color: "#e74c3c",
              blur: 5,
            },
          },
          move: {
            enable: true,
            random: true,
            speed: 0.6,
            attract: {
              rotateX: 600,
              rotateY: 1200,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              speed: 40,
              size_min: 0.1,
            },
          },
          opacity: {
            value: 0.8,
            anim: {
              speed: 1,
              opacity_min: 0.1,
            },
          },
        },
      }}
    />
    */
  );
}

/*
este si
 <Particles
      width="100%"
      height="100vh"
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#c311e7", "#b8e986", "#4dc9ff", "#ffd300", "#ff7e79"],
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.9,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.5,
              sync: false,
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 30,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#141414",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 125,
              duration: 1,
            },
            push: {
              particles_nb: 3,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  */

export default Particle;

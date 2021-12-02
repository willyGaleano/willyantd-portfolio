import portadaEvento from "../../assets/images/eventoJun/portadaEventoJun.PNG";
import portadaAsistencia from "../../assets/images/asistenciaJun/portadaAsistenciaJun.PNG";
import img1Asis from "../../assets/images/asistenciaJun/img1.PNG";
import img2Asis from "../../assets/images/asistenciaJun/img2.PNG";
import portadaApiEvento from "../../assets/images/apiEvento/portadaApiEvento.PNG";
import img1 from "../../assets/images/apiEvento/img1.PNG";
import img2 from "../../assets/images/apiEvento/img2.PNG";
import img3 from "../../assets/images/apiEvento/img3.PNG";
import img4 from "../../assets/images/apiEvento/img4.PNG";
import img5 from "../../assets/images/apiEvento/img5.PNG";
import img6 from "../../assets/images/apiEvento/img6.PNG";
import img7 from "../../assets/images/apiEvento/img7.PNG";
import portadaPortfolio from "../../assets/images/portfolio/portadaPortfolio.PNG";

export const proyectos = [
  {
    id: 1,
    title: "Eventos Jun",
    descrip:
      "Aplicación para inscribirse y administrar eventos y/o charlas de una empresa.",
    url: "https://eventos-app.vercel.app",
    portada: portadaEvento,
    imagenes: {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
    },
  },
  {
    id: 2,
    title: "Asistencia Jun",
    descrip: "Aplicación para marcar asistencia de los eventos inscritos.",
    url: "https://asistencia-client.vercel.app",
    portada: portadaAsistencia,
    imagenes: {
      img1: img1Asis,
      img2: img2Asis,
    },
  },
  {
    id: 3,
    title: "API Evento",
    descrip: "API construida con una arquitectura limpia(Clean Architecture).",
    url: "https://willyneteventowebapi.azurewebsites.net",
    portada: portadaApiEvento,
  },
  {
    id: 4,
    title: "JunSlack",
    descrip: "Clon de Slack",
    url: "https://eventos-app.vercel.app",
  },
  {
    id: 5,
    title: "Portafolio",
    descrip: "Web Site personal para mostrar mis conocimientos.",
    url: "https://eventos-app.vercel.app",
    portada: portadaPortfolio,
  },
  {
    id: 6,
    title: "RentCar",
    descrip: "Rent Car",
    url: "https://eventos-app.vercel.app",
  },
];

import Particle from "../components/Particle";
import { Button, Col, Row, Space, Typography } from "antd";
import InstagramIcon from "../components/icons/InstagramIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import GithubIcon from "../components/icons/GithubIcon";
import "./HomePage.css";
import { motion } from "framer-motion";
import Text from "antd/lib/typography/Text";
import { Link } from "react-router-dom";
import cv from "../assets/files/williams-galeano-cv.pdf";

const { Title, Paragraph, Link: LinkAntd } = Typography;
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

const HomePage = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Particle />
      <Row
        align="middle"
        justify="center"
        className="typography"
        style={{ padding: 5 }}
      >
        <Col span={24}>
          <Title style={{ textAlign: "center", fontSize: 50 }}>
            Hola, soy <span className="name">Williams Galeano</span>
          </Title>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={18} sm={24} xs={24}>
          <Paragraph
            strong
            style={{ fontSize: 18, textAlign: "center", margin: 10 }}
          >
            Desarrollador Full Stack, apasionado por la programación, que
            apuesta por la educación autodidacta. Siempre dispuesto a aprender
            nuevas tecnologías, trabajar en equipo y afrontar retos.
          </Paragraph>
        </Col>
        <Col xxl={24} xl={24} lg={22} md={24} sm={24} xs={24}>
          <Space
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button type="ghost" style={{ marginLeft: 10 }}>
              <Link to="/proyectos" style={{ fontWeight: "bold" }}>
                MIS PROYECTOS
              </Link>
            </Button>
            <Button type="ghost">
              <LinkAntd
                href={cv}
                download="WilliamsGaleanoCV"
                style={{ fontWeight: "bold" }}
              >
                DESCARGAR CV
              </LinkAntd>
            </Button>
          </Space>
        </Col>
      </Row>
    </motion.div>
  );
};

export default HomePage;

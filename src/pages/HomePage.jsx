import Particle from "../components/Particle";
import { Col, Row, Typography } from "antd";
import InstagramIcon from "../components/icons/InstagramIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import GithubIcon from "../components/icons/GithubIcon";
import "./HomePage.css";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;
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
          <Paragraph strong style={{ fontSize: 18, textAlign: "center" }}>
            Desarrollador FullStack Junior, apasionado por la programación que
            apuesta por la educación autodidacta, siempre dispuesto a aprender
            nuevas tecnologías y afrontar nuevos retos.
          </Paragraph>
        </Col>
        <Col xxl={18} xl={18} lg={22} md={24} sm={24} xs={24}>
          <Row align="middle" justify="center" gutter={[0, 8]}>
            <Col xxl={1} xl={1} lg={1} md={2} sm={2} xs={3}>
              <a
                href="https://github.com/willyGaleano?tab=repositories"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </Col>

            <Col xxl={1} xl={1} lg={1} md={2} sm={2} xs={3}>
              <a
                href="https://www.linkedin.com/in/williams-david-galeano-gomez-2565771a0/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </Col>

            <Col xxl={1} xl={1} lg={1} md={2} sm={2} xs={3}>
              <a
                href="https://www.instagram.com/_willyvanilli/"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
};

export default HomePage;

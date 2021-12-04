import { Typography } from "antd";
import { Col, Row, Space } from "antd";
import "../HomePage.css";
import ParticleContact from "../../components/ParticleContact";
import GmailIcon from "../../components/icons/GmailIcon";
import { motion } from "framer-motion";
import WsappIcon from "../../components/icons/WsappIcon";
import cv from "../../assets/files/CV_Galeano.pdf";
import InstagramIcon from "../../components/icons/InstagramIcon";
import LinkedinIcon from "../../components/icons/LinkedinIcon";

const { Title, Link } = Typography;
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
const ContactoPage = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ParticleContact />
      <Row
        align="middle"
        justify="center"
        className="typography"
        style={{ padding: 5, width: "100%" }}
      >
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Title style={{ textAlign: "center", fontSize: 50 }}>
            Estas son mis redes, <span className="name">contáctame</span>
          </Title>
        </Col>

        <Col xxl={18} xl={18} lg={22} md={24} sm={24} xs={24}>
          <Row align="middle" justify="center" gutter={[0, 8]}>
            <Col xxl={1} xl={1} lg={6} md={6} sm={6} xs={12}>
              <Space>
                <Link href="mailto:willyrhcp96@gmail.com" target="_blank">
                  <GmailIcon />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=51979327473&text=Me%20interesó%20tu%20portafolio,%20quisiera%20saber%20un%20poco%20mas%20de..."
                  target="_blank"
                >
                  <WsappIcon />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/williams-david-galeano-gomez-2565771a0"
                  target="_blank"
                >
                  <LinkedinIcon />
                </Link>
                <Link
                  href="https://www.instagram.com/_willyvanilli"
                  target="_blank"
                >
                  <InstagramIcon />
                </Link>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ContactoPage;

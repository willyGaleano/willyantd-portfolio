import { Typography } from "antd";
import { Col, Row, Space } from "antd";
import "../HomePage.css";
import ParticleContact from "../../components/ParticleContact";
import GmailIcon from "../../components/icons/GmailIcon";
import { motion } from "framer-motion";
import WsappIcon from "../../components/icons/WsappIcon";
import cv from "../../assets/files/CV_Galeano.pdf";

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
            Contactame, <span className="name">envíame un correo</span>
          </Title>
        </Col>

        <Col xxl={18} xl={18} lg={22} md={24} sm={24} xs={24}>
          <Row align="middle" justify="center" gutter={[0, 8]}>
            <Col xxl={1} xl={1} lg={1} md={2} sm={2} xs={3}>
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
                <Link href={cv} download="williamsGaleano">
                  <GmailIcon />
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

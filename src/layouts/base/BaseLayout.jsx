import { Layout } from "antd";
import QueueAnim from "rc-queue-anim";
import NavBar from "../navbar/NavBar";
import "./BaseLayout.css";

const { Content, Footer } = Layout;

const BaseLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavBar />

      <Content className="site-layout">
        <QueueAnim
          type={["right", "left"]}
          ease={["easeOutQuart", "easeInOutQuart"]}
        >
          {children}
        </QueueAnim>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          background: "#deecee",
          opacity: 0.5,
          height: "25px",
        }}
      >
        Portfolio ©2021 Created by WillyNet
      </Footer>
    </Layout>
  );
};

export default BaseLayout;

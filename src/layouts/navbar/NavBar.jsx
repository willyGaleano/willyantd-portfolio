import { Drawer, Button, Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        padding: "0px 20px",
        background: "#B4CBD3",
        opacity: 0.7,
        //B4CBD3 CFE6EE
      }}
    >
      <Button
        style={{ background: "#E6EAF0" }}
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Willy"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Menu theme="light" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/resumen">Resumen</Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/proyectos">Proyectos</Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/contactame">Contacto</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default NavBar;

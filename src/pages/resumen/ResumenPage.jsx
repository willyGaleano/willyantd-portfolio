import { useState } from "react";
import { Timeline, List, Card, Col, Row, Divider, Space } from "antd";
import { UsbOutlined, BookOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import NetIcon from "../../components/icons/tecnologias/NetIcon";
import ReactIcon from "../../components/icons/tecnologias/ReactIcon";
import HtmlIcon from "../../components/icons/tecnologias/HtmlIcon";
import CssIcon from "../../components/icons/tecnologias/CssIcon";
import JsIcon from "../../components/icons/tecnologias/JsIcon";
import SqlServerIcon from "../../components/icons/tecnologias/SqlServerIcon";
import GitIcon from "../../components/icons/tecnologias/GitIcon";
import GitHubIcon from "../../components/icons/tecnologias/GitHubIcon";
import IISIcon from "../../components/icons/tecnologias/IISIcon";
import AntDIcon from "../../components/icons/tecnologias/AntDIcon";
import MaterialIcon from "../../components/icons/tecnologias/MaterialIcon";
import BootstrapIcon from "../../components/icons/tecnologias/BootstrapIcon";
import NodeIcon from "../../components/icons/tecnologias/NodeIcon";
import ReduxIcon from "../../components/icons/tecnologias/ReduxIcon";
import TypescriptIcon from "../../components/icons/tecnologias/TypescriptIcon";
import RedisIcon from "../../components/icons/tecnologias/RedisIcon";
import DockerIcon from "../../components/icons/tecnologias/DockerIcon";
import SharePointIcon from "../../components/icons/tecnologias/SharePointIcon";
import AzureIcon from "../../components/icons/tecnologias/AzureIcon";
import AWSIcon from "../../components/icons/tecnologias/AWSIcon";
import FlutterIcon from "../../components/icons/tecnologias/FlutterIcon";
import AngularIcon from "../../components/icons/tecnologias/AngularIcon";
import PythonIcon from "../../components/icons/tecnologias/PythonIcon";
import DjangoIcon from "../../components/icons/tecnologias/DjangoIcon";
import { motion } from "framer-motion";
import KomatsuIcon from "../../components/icons/Komatsu";

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

const ResumenPage = () => {
  const [show, setShow] = useState(false);
  const dataIntermedioAvanzado = [
    {
      title: ".Net Core",
      icon: <NetIcon />,
    },
    {
      title: "React JS",
      icon: <ReactIcon />,
    },
    {
      title: "Redux",
      icon: <ReduxIcon />,
    },
    {
      title: "Ant Design",
      icon: <AntDIcon />,
    },
    {
      title: "Azure",
      icon: <AzureIcon />,
    },
    {
      title: "Sql Server",
      icon: <SqlServerIcon />,
    },
    {
      title: "HTML5",
      icon: <HtmlIcon />,
    },
    {
      title: "CSS3",
      icon: <CssIcon />,
    },
    {
      title: "Javascript",
      icon: <JsIcon />,
    },

    {
      title: "Git",
      icon: <GitIcon />,
    },
    {
      title: "Github",
      icon: <GitHubIcon />,
    },

    {
      title: "Node JS",
      icon: <NodeIcon />,
    },

    {
      title: "SharePoint",
      icon: <SharePointIcon />,
    },

    {
      title: "IIS 10",
      icon: <IISIcon />,
    },
    {
      title: "Material UI",
      icon: <MaterialIcon />,
    },

    {
      title: "Typescript",
      icon: <TypescriptIcon />,
    },
    {
      title: "Redis",
      icon: <RedisIcon />,
    },
    {
      title: "Docker",
      icon: <DockerIcon />,
    },
  ];

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Row
        align="middle"
        justify="center"
        style={{
          padding: "74px 5px 10px",
          height: "100%",
        }}
      >
        <Col
          xxl={16}
          xl={20}
          lg={20}
          md={20}
          sm={22}
          xs={20}
          style={{ margin: "0px 10px" }}
        >
          <Divider>
            <Text strong keyboard>
              ESTUDIOS
            </Text>
          </Divider>
          <Timeline mode="left">
            <Timeline.Item
              label={
                <Text strong mark>
                  2016/03/01 - Ahora
                </Text>
              }
              dot={<BookOutlined style={{ fontSize: "18px" }} />}
            >
              <Text strong style={{ fontSize: 15 }}>
                Universidad Nacional Mayor de San Marcos (UNMSM)
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text strong style={{ fontSize: 15 }}>
                Ingeniería de Sistemas
              </Text>
            </Timeline.Item>
            <Timeline.Item
              label={
                <Text strong mark>
                  2021/09/01 - Ahora
                </Text>
              }
              dot={<BookOutlined style={{ fontSize: "18px" }} />}
            >
              <Text strong style={{ fontSize: 15 }}>
                Universidad Nacional De la Plata (UNLP)
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text strong style={{ fontSize: 15 }}>
                Analista de Sistemas
              </Text>
            </Timeline.Item>
          </Timeline>
          <Divider>
            <Text strong keyboard>
              EXPERIENCIA LABORAL
            </Text>
          </Divider>

          <Timeline mode="left">
            <Timeline.Item
              label={
                <Text strong mark>
                  2020/03/16 - 2021/12/30
                </Text>
              }
              dot={<UsbOutlined style={{ fontSize: "18px" }} />}
            >
              <Space direction="vertical">
                <KomatsuIcon />
                <Text strong style={{ fontSize: 15 }}>
                  Komatsu Mitsui Maquinarias Perú (KMMP)
                </Text>
              </Space>
            </Timeline.Item>
            <Timeline.Item>
              <Text strong style={{ fontSize: 15 }}>
                Desarrollamos un software para el seguimiento y reporte de las
              </Text>
              <br />
              <Text strong style={{ fontSize: 15 }}>
                reparaciones de componentes de equipos de minería y
                construcción.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text strong style={{ fontSize: 15 }}>
                Migré el software mencionado de Django a .Net Core.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text strong style={{ fontSize: 15 }}>
                Desplegué aplicaciones .net y react js al IIS 10.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text strong style={{ fontSize: 15 }}>
                LLevamos una aplicación MVC con Razor Page a una Web API + React
                JS.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text strong style={{ fontSize: 15 }}>
                Estuve a cargo del desarrollo de una aplicación en PowerApps +
                SharePoint para el registro y reporte de seguridad en el trabajo
                en taller.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text strong style={{ fontSize: 15 }}>
                Desarrollé un software para que nuestros clientes puedan
                monitorear sus componentes.
              </Text>
            </Timeline.Item>
          </Timeline>
          <Divider>
            <Text strong keyboard>
              SKILLS
            </Text>
          </Divider>
          <List
            grid={{
              gutter: 8,
              xs: 2,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 6,
              xxl: 6,
            }}
            dataSource={dataIntermedioAvanzado}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  style={{ textAlign: "center", borderRadius: 10 }}
                  title={item.icon}
                >
                  {item.title}
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </motion.div>
  );
};

export default ResumenPage;

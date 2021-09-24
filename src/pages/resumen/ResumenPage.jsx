import { useState } from "react";
import { Timeline, List, Card, Col, Row, Divider } from "antd";
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
import { Content } from "antd/lib/layout/layout";
import { motion } from "framer-motion";

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
      title: "HTML5",
      icon: <HtmlIcon />,
    },
    {
      title: "Javascript",
      icon: <JsIcon />,
    },
    {
      title: "MS. Sql Server",
      icon: <SqlServerIcon />,
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
      title: "Ant Design",
      icon: <AntDIcon />,
    },

    {
      title: "Bootstrap 4",
      icon: <BootstrapIcon />,
    },
    {
      title: "Node JS",
      icon: <NodeIcon />,
    },
    {
      title: "Redux",
      icon: <ReduxIcon />,
    },
    {
      title: "SharePoint",
      icon: <SharePointIcon />,
    },
  ];

  const dataBasicoIntermedio = [
    {
      title: "CSS3",
      icon: <CssIcon />,
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
      title: "Azure",
      icon: <AzureIcon />,
    },
    {
      title: "AWS",
      icon: <AWSIcon />,
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
    {
      title: "Python",
      icon: <PythonIcon />,
    },
    {
      title: "Django",
      icon: <DjangoIcon />,
    },
  ];

  const dataAprendiendo = [
    {
      title: "Flutter",
      icon: <FlutterIcon />,
    },
    {
      title: "Angular",
      icon: <AngularIcon />,
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
              label={"2016/03/01 - Ahora"}
              dot={<BookOutlined style={{ fontSize: "16px" }} />}
            >
              Universidad Nacional Mayor de San Marcos (UNMSM)
            </Timeline.Item>
            <Timeline.Item>Ingeniería de Sistemas</Timeline.Item>
            <Timeline.Item
              label={"2021/09/01 - Ahora"}
              dot={<BookOutlined style={{ fontSize: "16px" }} />}
            >
              Universidad Nacional De la Plata (UNLP)
            </Timeline.Item>
            <Timeline.Item>Analista de Sistemas</Timeline.Item>
          </Timeline>
          <Divider>
            <Text strong keyboard>
              EXPERIENCIA LABORAL
            </Text>
          </Divider>
          <Timeline mode="left">
            <Timeline.Item
              label={"2020/03/16 - 2021/12/30"}
              dot={<UsbOutlined style={{ fontSize: "16px" }} />}
            >
              Desarrollador FullStack - Komatsu Mitsui Maquinarias Perú (KMMP)
            </Timeline.Item>
            <Timeline.Item>
              Creación de aplicaciones para las diversas áreas de KMMP
              <br />
              como sistemas de gestión de control de flujo en sus procesos.
            </Timeline.Item>
            <Timeline.Item>
              Desarrollo de software en .Net Core, React JS y MS SQL Server
            </Timeline.Item>
            <Timeline.Item>
              Desarrollo de software en ASP .Net Core MVC, Razor Page y MS SQL
              Server
            </Timeline.Item>
            <Timeline.Item>
              Desarrollo de software en Power Apps con SharePoint
            </Timeline.Item>
            <Timeline.Item>Desplegando aplicaciones en IIS 10</Timeline.Item>
          </Timeline>
          <Divider>
            <Text strong keyboard>
              TECNOLOGÍAS
            </Text>
          </Divider>
          <Divider orientation="left">
            <Text keyboard>INTERMEDIO - AVANZADO</Text>
          </Divider>
          <List
            grid={{
              gutter: 16,
              xs: 1,
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
          <Divider orientation="left">
            <Text keyboard>BÁSICO - INTERMEDIO</Text>
          </Divider>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 6,
              xxl: 6,
            }}
            dataSource={dataBasicoIntermedio}
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
          <Divider orientation="left">
            <Text keyboard>APRENDIENDO</Text>
          </Divider>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 6,
              xxl: 6,
            }}
            dataSource={dataAprendiendo}
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

import {
  List,
  Card,
  Image,
  Col,
  Row,
  Divider,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import GithubAccIcon from "../../components/icons/acciones/GuthubAccIcon";
import DemoIcon from "../../components/icons/acciones/DemoIcon";
import DetailIcon from "../../components/icons/acciones/DetailIcon";
import { Link } from "react-router-dom";
import Text from "antd/lib/typography/Text";
import { Content } from "antd/lib/layout/layout";
import { motion } from "framer-motion";
import { proyectos } from "../../utils/data/proyectos";

const { Meta } = Card;
const { Link: LinkAntd } = Typography;

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
const ProyectosPage = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Row align="middle" justify="center" style={{ padding: "74px 5px 5px" }}>
        <Col xxl={16} xl={18} lg={20} md={18} sm={22} xs={20}>
          <Divider>
            <Text keyboard strong>
              PROYECTOS
            </Text>
          </Divider>
          <List
            grid={{
              gutter: [16, 16],
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3,
              xxl: 2,
            }}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 6,
            }}
            dataSource={proyectos}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  cover={
                    <Image
                      height={350}
                      width="100%"
                      style={{ objectFit: "cover" }}
                      src={item.portada}
                    />
                  }
                  actions={[
                    <LinkAntd
                      href="https://github.com/willyGaleano/WillyNet.SGP"
                      target="_blank"
                    >
                      <Tooltip placement="top" title={"Ver código"}>
                        <GithubAccIcon key="setting" />
                      </Tooltip>
                    </LinkAntd>,
                    <LinkAntd href={item.url} target="_blank">
                      <Tooltip placement="top" title={"Ver demo"}>
                        <DemoIcon key="edit" />
                      </Tooltip>
                    </LinkAntd>,
                    <Link to="/proyecto-detalle">
                      <Tooltip placement="top" title={"Ver detalles"}>
                        <DetailIcon key="ellipsis" />
                      </Tooltip>
                    </Link>,
                  ]}
                >
                  <Meta title={item.title} description={item.descrip} />
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </motion.div>
  );
};

export default ProyectosPage;

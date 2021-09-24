import { List, Card, Image, Col, Row, Divider, Tooltip } from "antd";
import { useState } from "react";
import GithubAccIcon from "../../components/icons/acciones/GuthubAccIcon";
import DemoIcon from "../../components/icons/acciones/DemoIcon";
import DetailIcon from "../../components/icons/acciones/DetailIcon";
import { Link } from "react-router-dom";
import Text from "antd/lib/typography/Text";
import { Content } from "antd/lib/layout/layout";
import { motion } from "framer-motion";

const { Meta } = Card;
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
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 7",
    },
    {
      title: "Title 8",
    },
  ];
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
              xxl: 3,
            }}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 6,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  cover={
                    <Image
                      height={250}
                      width="100%"
                      style={{ objectFit: "cover" }}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  }
                  actions={[
                    <a href="https://github.com/willyGaleano/WillyNet.SGP">
                      <Tooltip placement="top" title={"Ver código"}>
                        <GithubAccIcon key="setting" />
                      </Tooltip>
                    </a>,
                    <a href="https://github.com/willyGaleano/WillyNet.SGP">
                      <Tooltip placement="top" title={"Ver demo"}>
                        <DemoIcon key="edit" />
                      </Tooltip>
                    </a>,
                    <Link to="/proyecto-detalle">
                      <Tooltip placement="top" title={"Ver detalles"}>
                        <DetailIcon key="ellipsis" />
                      </Tooltip>
                    </Link>,
                  ]}
                >
                  <Meta
                    title={item.title}
                    description="This is the description"
                  />
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

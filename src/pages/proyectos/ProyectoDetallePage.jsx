import { useState } from "react";
import {
  Descriptions,
  Card,
  Col,
  Row,
  Typography,
  Divider,
  Image,
  Tooltip,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link as LinkRouter } from "react-router-dom";

const { Meta } = Card;
const { Link, Text } = Typography;

const ProyectoDetallePage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Row align="top" justify="center" style={{ padding: "74px 5px 5px" }}>
      <Col xxl={8} xl={8} lg={20} md={20} sm={20} xs={20}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            hoverable
            style={{ width: 350 }}
            cover={
              <>
                <Image
                  style={{ objectFit: "cover" }}
                  preview={{ visible: false }}
                  src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                  onClick={() => setVisible(true)}
                />
                <div style={{ display: "none" }}>
                  <Image.PreviewGroup
                    preview={{
                      visible,
                      onVisibleChange: (vis) => setVisible(vis),
                    }}
                  >
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                  </Image.PreviewGroup>
                </div>
              </>
            }
          >
            <Meta title="Sistema de Gestión de Proyectos" />
          </Card>
        </div>
      </Col>

      <Col xxl={12} xl={14} lg={20} md={20} sm={20} xs={20}>
        <Descriptions
          title={
            <Divider orientation="left">
              <LinkRouter
                style={{ color: "black", margin: "0px 5px" }}
                to="/proyectos"
              >
                <Tooltip title="Volver a proyectos" placement="bottom">
                  <ArrowLeftOutlined />
                </Tooltip>
              </LinkRouter>
              <Text strong keyboard>
                SGP
              </Text>
            </Divider>
          }
          layout="vertical"
          bordered
          column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="SITIO WEB">
            <Link href="mailto:willyrhcp96@gmail.com" target="_blank">
              https://cursosonline.azurewebsites.net
            </Link>
          </Descriptions.Item>
          <Descriptions.Item label="VERSIÓN">1.0</Descriptions.Item>
          <Descriptions.Item label="TIEMPO DE CREACIÓN (días)">
            120
          </Descriptions.Item>
          <Descriptions.Item span={3} label="TECNOLOGÍAS USADAS">
            .Net Core 5 Web Api
          </Descriptions.Item>

          <Descriptions.Item span={3} label="DESCRIPCIÓN">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
};

export default ProyectoDetallePage;

import { Card, Image, Col, Row, Divider, Tooltip, Typography, Tag } from "antd";
import { useState } from "react";
import GithubAccIcon from "../../components/icons/acciones/GuthubAccIcon";
import DemoIcon from "../../components/icons/acciones/DemoIcon";
import DetailIcon from "../../components/icons/acciones/DetailIcon";
import { Link } from "react-router-dom";
import Text from "antd/lib/typography/Text";
import { motion } from "framer-motion";

import portadaApiEvento from "../../assets/images/apiEvento/portadaApiEvento.PNG";
import portadaPortfolio from "../../assets/images/portfolio/portadaPortfolio.PNG";
import portadaAsistencia from "../../assets/images/asistenciaJun/portadaAsistenciaJun.PNG";
import img1Asis from "../../assets/images/asistenciaJun/img1.PNG";
import img2Asis from "../../assets/images/asistenciaJun/img2.PNG";
import portadaEvento from "../../assets/images/eventoJun/portadaEventoJun.PNG";
import img1 from "../../assets/images/apiEvento/img1.PNG";
import img2 from "../../assets/images/apiEvento/img2.PNG";
import img3 from "../../assets/images/apiEvento/img3.PNG";
import img4 from "../../assets/images/apiEvento/img4.PNG";
import img5 from "../../assets/images/apiEvento/img5.PNG";
import img6 from "../../assets/images/apiEvento/img6.PNG";
import img7 from "../../assets/images/apiEvento/img7.PNG";

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
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Row>
        <Col span={24}>
          <Divider style={{ padding: "74px 5px 5px" }}>
            <Text keyboard strong>
              PROYECTOS
            </Text>
          </Divider>
        </Col>
      </Row>

      <Row align="middle" justify="center" gutter={16} style={{ margin: 10 }}>
        <Col xxl={8} xl={18} lg={18} md={20} sm={22} xs={24}>
          <Card
            style={{ marginBottom: 10 }}
            hoverable
            cover={
              <>
                <Image
                  style={{ objectFit: "contain", height: "auto" }}
                  preview={{ visible: false }}
                  src={portadaEvento}
                  onClick={() => setVisible1(true)}
                />
                <div style={{ display: "none" }}>
                  <Image.PreviewGroup
                    preview={{
                      visible: visible1,
                      onVisibleChange: (vis) => setVisible1(vis),
                    }}
                  >
                    <Image src={portadaEvento} />
                    <Image src={img1} />
                    <Image src={img2} />
                    <Image src={img3} />
                    <Image src={img4} />
                    <Image src={img5} />
                    <Image src={img6} />
                    <Image src={img7} />
                  </Image.PreviewGroup>
                </div>
              </>
            }
            actions={[
              <LinkAntd
                href="https://github.com/willyGaleano/charlas-client"
                target="_blank"
              >
                <Tooltip placement="top" title={"Ver código"}>
                  <GithubAccIcon key="setting" />
                </Tooltip>
              </LinkAntd>,
              <LinkAntd href="https://eventos-app.vercel.app" target="_blank">
                <Tooltip placement="top" title={"Ver demo"}>
                  <DemoIcon key="edit" />
                </Tooltip>
              </LinkAntd>,

              <Tooltip placement="top" title={"Ver detalles"}>
                <DetailIcon key="ellipsis" />
              </Tooltip>,
            ]}
          >
            <Meta
              title={<Text strong>EventoJun</Text>}
              description={
                <>
                  <Tag color="purple">#NetCore5</Tag>
                  <Tag color="purple">#ReactJS</Tag>
                  <Tag color="purple">#AntDesign</Tag>
                  <Tag color="purple">#Redux</Tag>
                </>
              }
            />
          </Card>
        </Col>
        <Col xxl={8} xl={18} lg={18} md={20} sm={22} xs={24}>
          <Card
            hoverable
            cover={
              <>
                <Image
                  style={{ objectFit: "contain", height: "auto" }}
                  preview={{ visible: false }}
                  src={portadaAsistencia}
                  onClick={() => setVisible2(true)}
                />
                <div style={{ display: "none" }}>
                  <Image.PreviewGroup
                    preview={{
                      visible: visible2,
                      onVisibleChange: (vis) => setVisible2(vis),
                    }}
                  >
                    <Image src={portadaAsistencia} />
                    <Image src={img1Asis} />
                    <Image src={img2Asis} />
                  </Image.PreviewGroup>
                </div>
              </>
            }
            actions={[
              <LinkAntd
                href="https://github.com/willyGaleano/asistencia-client"
                target="_blank"
              >
                <Tooltip placement="top" title={"Ver código"}>
                  <GithubAccIcon key="setting" />
                </Tooltip>
              </LinkAntd>,
              <LinkAntd
                href="https://asistencia-client.vercel.app"
                target="_blank"
              >
                <Tooltip placement="top" title={"Ver demo"}>
                  <DemoIcon key="edit" />
                </Tooltip>
              </LinkAntd>,

              <Tooltip placement="top" title={"Ver detalles"}>
                <DetailIcon key="ellipsis" />
              </Tooltip>,
            ]}
          >
            <Meta
              title={<Text strong>AsistenciaJun</Text>}
              description={
                <>
                  <Tag color="purple">#NetCore5</Tag>
                  <Tag color="purple">#ReactJS</Tag>
                  <Tag color="purple">#ChakraUI</Tag>
                  <Tag color="purple">#QRReader</Tag>
                </>
              }
            />
          </Card>
        </Col>
      </Row>
      <Row align="middle" justify="center" gutter={16} style={{ margin: 10 }}>
        <Col xxl={8} xl={18} lg={18} md={20} sm={22} xs={24}>
          <Card
            hoverable
            style={{ marginBottom: 10 }}
            cover={
              <>
                <Image
                  style={{ objectFit: "contain", height: "auto" }}
                  preview={{ visible: false }}
                  src={portadaApiEvento}
                  onClick={() => setVisible3(true)}
                />
                <div style={{ display: "none" }}>
                  <Image.PreviewGroup
                    preview={{
                      visible: visible3,
                      onVisibleChange: (vis) => setVisible3(vis),
                    }}
                  >
                    <Image src={portadaApiEvento} />
                  </Image.PreviewGroup>
                </div>
              </>
            }
            actions={[
              <LinkAntd
                href="https://github.com/willyGaleano/WillyNet.Charlas"
                target="_blank"
              >
                <Tooltip placement="top" title={"Ver código"}>
                  <GithubAccIcon key="setting" />
                </Tooltip>
              </LinkAntd>,
              <LinkAntd
                href="https://willyneteventowebapi.azurewebsites.net/index.html"
                target="_blank"
              >
                <Tooltip placement="top" title={"Ver demo"}>
                  <DemoIcon key="edit" />
                </Tooltip>
              </LinkAntd>,

              <Tooltip placement="top" title={"Ver detalles"}>
                <DetailIcon key="ellipsis" />
              </Tooltip>,
            ]}
          >
            <Meta
              title={<Text strong>EventoAPI</Text>}
              description={
                <>
                  <Tag color="purple">#NetCore5</Tag>
                  <Tag color="purple">#SignalR</Tag>
                  <Tag color="purple">#SQLServer</Tag>
                  <Tag color="purple">#SOLID</Tag>
                  <Tag color="purple">#BlobStorage</Tag>
                  <Tag color="purple">#CleanArchitecture</Tag>
                  <Tag color="purple">#Azure</Tag>
                </>
              }
            />
          </Card>
        </Col>
        <Col xxl={8} xl={18} lg={18} md={20} sm={22} xs={24}>
          <Card
            hoverable
            cover={
              <>
                <Image
                  style={{ objectFit: "contain", height: "auto" }}
                  preview={{ visible: false }}
                  src={portadaPortfolio}
                  onClick={() => setVisible4(true)}
                />
                <div style={{ display: "none" }}>
                  <Image.PreviewGroup
                    preview={{
                      visible: visible4,
                      onVisibleChange: (vis) => setVisible4(vis),
                    }}
                  >
                    <Image src={portadaPortfolio} />
                    <Image src={img1Asis} />
                    <Image src={img2Asis} />
                  </Image.PreviewGroup>
                </div>
              </>
            }
            actions={[
              <LinkAntd
                href="https://github.com/willyGaleano/willyantd-portfolio"
                target="_blank"
              >
                <Tooltip placement="top" title={"Ver código"}>
                  <GithubAccIcon key="setting" />
                </Tooltip>
              </LinkAntd>,
              <LinkAntd
                href="https://williams-galeano.vercel.app"
                target="_blank"
              >
                <Tooltip placement="top" title={"Ver demo"}>
                  <DemoIcon key="edit" />
                </Tooltip>
              </LinkAntd>,

              <Tooltip placement="top" title={"Ver detalles"}>
                <DetailIcon key="ellipsis" />
              </Tooltip>,
            ]}
          >
            <Meta
              title={<Text strong>Portfolio</Text>}
              description={
                <>
                  <Tag color="purple">#ReactJS</Tag>
                  <Tag color="purple">#AntDesign</Tag>
                  <Tag color="purple">#TsParticles</Tag>
                </>
              }
            />
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ProyectosPage;

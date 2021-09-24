import Icon from "@ant-design/icons";

const DemoIcon = (props) => {
  const svg = () => (
    <svg
      t="1632350466494"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="15508"
      width="1.5em"
      height="1.5em"
    >
      <path
        d="M64 224h896v512H64V224z m532.496 640h309.35c65.38 0 118.154-54.164 118.154-121.264V217.264C1024 150.164 971.224 96 905.846 96H546V32h-68v64H118.154C52.774 96 0 150.164 0 217.264v525.472C0 809.836 52.776 864 118.154 864h311.6l-190.826 88.984 28.738 61.628L478 916.532V992h68v-76.516l210.704 98.252 28.738-61.63L596.496 864z"
        p-id="15509"
      ></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default DemoIcon;

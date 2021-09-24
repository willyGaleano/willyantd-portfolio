import Icon from "@ant-design/icons";

const DetailIcon = (props) => {
  const svg = () => (
    <svg
      t="1632350804692"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="25098"
      width="1.5em"
      height="1.5em"
    >
      <path
        d="M128 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill="#333333"
        p-id="25099"
      ></path>
      <path
        d="M512 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill="#333333"
        p-id="25100"
      ></path>
      <path
        d="M896 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill="#333333"
        p-id="25101"
      ></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default DetailIcon;

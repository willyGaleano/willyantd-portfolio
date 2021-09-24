import Icon from "@ant-design/icons";

const GmailIcon = (props) => {
  const svg = () => (
    <svg
      t="1632426165416"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="4131"
      width="3em"
      height="3em"
    >
      <path
        d="M928 896H96a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h832a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64"
        fill="#E3E3E3"
        p-id="4132"
      ></path>
      <path
        d="M992 832V192c0-9.984-2.464-19.296-6.528-27.68L509.984 544.224 56.32 244.992 671.296 896H928a64 64 0 0 0 64-64"
        fill="#D0CFCF"
        p-id="4133"
      ></path>
      <path
        d="M160 896H96a64 64 0 0 1-64-64V192a64 64 0 0 1 128 0v704z"
        fill="#D54B3D"
        p-id="4134"
      ></path>
      <path
        d="M928 896h-64V192a64 64 0 0 1 128 0v640a64 64 0 0 1-64 64"
        fill="#AC3D31"
        p-id="4135"
      ></path>
      <path
        d="M512 446.112L886.72 142.4a64.256 64.256 0 0 1 91.072 10.272 66.336 66.336 0 0 1-10.112 92.352L512 614.4 56.32 244.992a66.336 66.336 0 0 1-10.112-92.352 64.256 64.256 0 0 1 91.072-10.24L512 446.08z"
        fill="#D54B3D"
        p-id="4136"
      ></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default GmailIcon;

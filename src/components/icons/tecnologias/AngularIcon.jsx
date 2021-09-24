import Icon from "@ant-design/icons";

const AngularIcon = (props) => {
  const svg = () => (
    <svg
      t="1632337775247"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="11658"
      width="3em"
      height="3em"
    >
      <path
        d="M512 122.88L130.6624 258.8672l58.1632 504.2176L512 942.08l323.1744-178.9952 58.1632-504.2176z"
        fill="#DD0031"
        p-id="11659"
      ></path>
      <path
        d="M512 122.88v90.9312-0.4096V942.08l323.1744-178.9952 58.1632-504.2176L512 122.88z"
        fill="#C3002F"
        p-id="11660"
      ></path>
      <path
        d="M512 213.4016L273.6128 747.9296h88.8832l47.9232-119.6032h202.3424l47.9232 119.6032H749.568L512 213.4016z m69.632 341.1968h-139.264l69.632-167.5264 69.632 167.5264z"
        fill="#FFFFFF"
        p-id="11661"
      ></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default AngularIcon;

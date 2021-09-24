import Icon from "@ant-design/icons";

const CssIcon = (props) => {
  const svg = () => (
    <svg
      t="1632335066071"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="44542"
      width="3em"
      height="3em"
    >
      <path
        d="M88.064 27.648l77.824 871.424L512 996.352l346.112-97.28 77.824-871.424z"
        fill="#2196F3"
        p-id="44543"
      ></path>
      <path
        d="M771.072 312.32l-10.24 109.568-29.696 328.704L512 811.008l-220.16-60.416-14.336-172.032h107.52l7.168 89.088L512 700.416l119.808-32.768 16.384-148.48-375.808 1.024-11.264-101.376 395.264-4.096 8.192-108.544-413.696 1.024-7.168-101.376h536.576z"
        fill="#FAFAFA"
        p-id="44544"
      ></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default CssIcon;

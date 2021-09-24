import Icon from "@ant-design/icons";

const BootstrapIcon = (props) => {
  const svg = () => (
    <svg
      t="1632335927995"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="6584"
      width="3em"
      height="3em"
    >
      <path
        d="M602.576 520.192c-17.328-5.712-42.272-4.48-74.832-4.48h-130.816v170.752h139.904c21.856 0 37.2-2.336 46.048-3.968a110.448 110.448 0 0 0 39.072-14.72c10.464-6.496 19.072-16.368 25.824-28.8 6.736-12.448 10.128-27.008 10.128-43.296 0-19.056-4.896-33.696-14.672-47.776-9.76-14.08-23.312-22.016-40.64-27.712z m-17.952-78.08c17.2-5.104 30.176-14.032 38.88-25.888 8.736-11.856 13.104-26.944 13.104-44.864 0-16.96-4.08-32.032-12.224-44.96-8.144-12.896-19.76-17.904-34.88-22.672-15.12-4.752-41.056-3.312-77.808-3.312h-114.768v148.48h123.136c30.016 0 51.52-2.816 64.56-6.784zM976 171.424A123.424 123.424 0 0 0 852.576 48H171.424A123.424 123.424 0 0 0 48 171.424v681.152A123.424 123.424 0 0 0 171.424 976h681.152A123.424 123.424 0 0 0 976 852.576V171.424z m-263.152 490.88c-10.112 20.576-22.624 36.448-37.52 47.616-14.88 11.168-33.552 20.64-56 26.352-22.432 5.696-49.952 9.584-82.496 9.584h-206.72V233.6h203.568c39.072 0 70.4 4.528 94.016 14.864 23.616 10.352 42.112 25.968 55.488 47.472 13.376 21.52 20.064 43.856 20.064 67.36 0 21.856-5.936 42.368-17.792 61.664-11.872 19.312-29.776 34.848-53.728 46.72 30.928 9.072 54.72 24.528 71.344 46.384 16.64 21.856 24.944 47.68 24.944 77.44 0 23.952-5.056 46.208-15.168 66.8z"
        fill="#5B4282"
        p-id="6585"
      ></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default BootstrapIcon;
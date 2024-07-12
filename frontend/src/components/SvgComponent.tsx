import { tSvgComponent } from "../types/tSvgComponent";

const SvgComponent = (props: tSvgComponent) => {
  const { svgWidth, svgImage, imgAlt, classNameImg } = props;

  return (
    <>
      <img
        src={svgImage}
        alt={imgAlt}
        style={{ width: svgWidth }}
        className={classNameImg}
      />
    </>
  );
};

export default SvgComponent;

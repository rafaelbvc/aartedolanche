import { tSvgComponent } from "../types/tSvgComponent";

const SvgComponent = (props: tSvgComponent) => {
  const { svgWidth, svgImage, imgAlt } = props;

  return (
    <>
      <img src={svgImage} alt={imgAlt} style={{ width: svgWidth }} />
    </>
  );
};

export default SvgComponent;

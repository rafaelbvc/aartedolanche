import { ReactSVG } from "react";
import { tSvgComponent } from "../types/tSvgComponent";

const SvgComponent = (props: tSvgComponent) => {
  const { svgWidth, svgColorFill, svgImage, svgColorStroke } = props;

  return (
    <>
      {svgImage}

    </>
  );
};

export default SvgComponent;

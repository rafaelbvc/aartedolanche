import { Helmet } from 'react-helmet';
import { helmetT } from '../types/HelmeT';

const HelmetComponent = (props: helmetT) => {
  const {
    titleHeader,
    contentKeywords,
    contentDescriptionA,
    contentDescriptionB,
  } = props;

  return (
    <Helmet>
      <title>{titleHeader}</title>
      <meta name="description" content={contentDescriptionA} />
      {contentDescriptionB && (
        <meta name="description" content={contentDescriptionB} />
      )}
      <meta name="keywords" content={contentKeywords} />
    </Helmet>
  );
};

export default HelmetComponent;

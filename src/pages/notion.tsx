import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { BlockMapType, NotionRenderer } from 'react-notion';

interface GetStaticProps {
  props: {
    blockMap: BlockMapType;
  };
}

export async function getStaticProps(): Promise<GetStaticProps> {
  const data = await fetch(
    'https://notion-api.splitbee.io/v1/page/Next-js-752553becb634756830af26e7b18e94e',
  ).then(res => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

interface P {
  blockMap: BlockMapType;
}

const Notion: React.FC<P> = ({ blockMap }) => (
  <div className="flex justify-center">
    <div className="max-w-screen-md">
      <NotionRenderer blockMap={blockMap} />
    </div>
  </div>
);

export default Notion;

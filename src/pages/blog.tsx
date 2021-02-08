import Link from 'next/link';
import { Layout } from 'src/components';
import Image from 'next/image';

interface Thumbnail {
  name: string;
  url: string;
  rawUrl: string;
}

interface NotionImage {
  name: string;
  url: string;
  rawUrl: string;
}

export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  images: NotionImage[];
  description: string;
  thumbnail?: Thumbnail[];
};

export const getAllPosts = async (): Promise<Post[]> => {
  const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID;
  if (!NOTION_BLOG_ID) {
    return [];
  }
  return await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`).then((res) =>
    res.json(),
  );
};

export async function getStaticProps() {
  const data = await getAllPosts();
  const posts = data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return {
    props: {
      posts,
    },
  };
}

interface P {
  posts: Post[];
}

const Blog: React.FC<P> = ({ posts }) => (
  <Layout title="BLOG | NOZOMI ISHII">
    <div>
      <h1 className="m-4 text-4xl">Blog</h1>
    </div>
    <div className="flex flex-wrap">
      {posts.map(({ date, id, description, slug, tags, images }) => {
        return (
          <div key={id} className="m-4 rounded">
            <Link href="/blog/[slug]" as={`/blog/${slug}`}>
              <a className="w-full flex">
                <Image src={images[0].url} alt="Picture of the author" width={100} height={100} />
                <div className="ml-4">
                  <p className="bg-green-700 text-white px-2 inline rounded">{tags}</p>
                  <p className="text-2xl mt-2">{description}</p>
                  <p className="mt-4">Posted on {date}</p>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  </Layout>
);

export default Blog;

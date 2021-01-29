import Link from 'next/link';
import { Layout } from 'src/components';

interface Thumbnail {
  name: string;
  url: string;
  rawUrl: string;
}

export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  thumbnail?: Thumbnail[];
};

export const getAllPosts = async (): Promise<Post[]> => {
  const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID;
  if (!NOTION_BLOG_ID) {
    return [];
  }
  return await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`).then(res =>
    res.json(),
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();
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
      <h1 className="text-4xl">Posts</h1>
    </div>
    <div>
      {posts.map(post => {
        return (
          <div key={post.id} className="bg-gray-300 m-4">
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              <a>
                <b>{post.title}</b>
                <p>posted on {post.date}</p>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  </Layout>
);

export default Blog;

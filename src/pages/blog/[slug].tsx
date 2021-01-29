import { NotionRenderer, BlockMapType } from 'react-notion';
import { getAllPosts, Post } from '../blog';
import Link from 'next/link';
import { Layout } from 'src/components';

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find(post => post.slug === slug);

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then(res =>
    res.json(),
  );

  return {
    props: {
      blocks,
      post,
    },
  };
}

const BlogPost: React.FC<{ post: Post; blocks: BlockMapType }> = ({ post, blocks }) => {
  if (!post) return null;

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-screen max-w-screen-lg">
          <Link href="/blog">
            <a>Go back</a>
          </Link>
          <h1 className="text-4xl">{post.title}</h1>
          <NotionRenderer blockMap={blocks} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => `/blog/${post.slug}`),
    fallback: true,
  };
}

export default BlogPost;

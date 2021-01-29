import Link from 'next/link';

export const TemporaryPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-4 text-4xl">🦸🏻‍♂️: 2021年版のホームページ制作はじめました！</div>
      <div className="mb-4">
        <div className="mb-2 hover:text-green-600">
          <Link href="/blog">
            <a>ブログをのぞく</a>
          </Link>
        </div>
        <div className="mb-2 hover:text-green-600">
          <a href="https://relaxed-edison-03ff06.netlify.app/">2020年版にいく</a>
        </div>
      </div>
    </div>
  );
};

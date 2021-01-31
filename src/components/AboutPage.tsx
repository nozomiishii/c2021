import Image from 'next/image';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 px-2">
      <div className="my-4">お知らせ: 2021年版のホームページ制作はじめました！</div>
      <div className="mb-4">
        <button className="px-2 bg-red-400 text-white rounded hover:bg-red-200">
          <a href="https://relaxed-edison-03ff06.netlify.app/">去年の2020年版のやつをのぞく</a>
        </button>
        <p>去年のもお気に入り</p>
      </div>
      <div>
        <Image
          src="/images/profile.jpg"
          alt="Picture of Nozomi"
          width={160}
          height={160}
          className="rounded-full"
        />
      </div>
      <div className="my-4">
        <div className="mb-2">
          <p>いしい のぞみ</p>
        </div>
        <div className="mb-2">
          <p>Three.jsが好きです。</p>
          <p>Three.js, TypeScript, Reactで制作活動をしています。</p>
          <p>触って遊べるにこだわってます。</p>
        </div>
        <div className="my-4">
          <button className="mr-2 px-2 bg-blue-400 text-white rounded hover:bg-blue-200">
            <a href="https://twitter.com/nozomiishii_jp">Twitter: @nozomiishii_jp</a>
          </button>

          <button className="mb-2 px-2 bg-gray-400 text-white rounded hover:bg-gray-200">
            <a href="https://github.com/nozomiishii">Github: nozomiishii</a>
          </button>
        </div>
      </div>
    </div>
  );
};

import Link from 'next/link';
import React from 'react';

type HeaderName = 'about' | 'blog' | 'art' | 'contact';
type HeaderSlug = '/' | '/about' | '/blog' | '/art' | '/contact';

interface HeaderItem {
  name: HeaderName;
  slug: HeaderSlug;
}

const headerItems: HeaderItem[] = [
  // { name: 'about', slug: '/about' },
  // { name: 'art', slug: '/art' },
  { name: 'blog', slug: '/blog' },
  // { name: 'contact', slug: '/contact' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-400 p-4 fixed w-full">
      <div className="text-white mr-6">
        <Link href="/">
          <a className="font-semibold text-xl tracking-tight">NOZOMI ISHII</a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-2 py-1 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          🦸🏻‍♂️
        </button>
      </div>
      <div className="w-full text-sm flex flex-col items-end lg:flex-row lg:items-center lg:w-auto ">
        {headerItems.map(({ name, slug }) => (
          <Link href={slug} key={name}>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

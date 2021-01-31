import Link from 'next/link';
import { useState } from 'react';

type HeaderName = 'about' | 'blog' | 'art' | 'contact';
type HeaderSlug = '/' | '/about' | '/blog' | '/art' | '/contact';

interface NavbarItem {
  name: HeaderName;
  slug: HeaderSlug;
}

const navbarItems: NavbarItem[] = [
  { name: 'about', slug: '/about' },
  // { name: 'art', slug: '/art' },
  { name: 'blog', slug: '/blog' },
  // { name: 'contact', slug: '/contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const Menu = navbarItems.map(({ name, slug }) => (
    <Link href={slug} key={name}>
      <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-gray-800 hover:text-green-400 mr-4">
        {name}
      </a>
    </Link>
  ));

  return (
    <nav className="flex py-2 px-4 items-center justify-between flex-wrap lg:p-4 fixed w-full">
      {/* logo */}
      <div className="text-gray-800 mr-6">
        <Link href="/">
          <a className="font-semibold text-xl tracking-tight">NOZOMI ISHII</a>
        </Link>
      </div>

      {/* toggle button for mobile */}
      <div className="block lg:hidden">
        <button
          className="flex justify-center items-center w-8 h-8 border rounded-full border-gray-800 hover:text-green-400 hover:border-green-400"
          onClick={() => setOpen((state) => !state)}
        >
          🦸🏻‍♂️
        </button>
      </div>

      {/* Navbar Items */}
      <div className="hidden w-full text-sm lg:flex lg:flex-row lg:items-center lg:w-auto">
        {Menu}
      </div>
      {/* for mobile TODO: 上と共通化する*/}
      {open && (
        <div className="w-full text-sm flex flex-col items-end lg:flex-row lg:items-center lg:w-auto">
          {Menu}
        </div>
      )}
    </nav>
  );
};

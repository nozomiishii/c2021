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

  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-400 p-4 fixed w-full">
      {/* logo */}
      <div className="text-white mr-6">
        <Link href="/">
          <a className="font-semibold text-xl tracking-tight">NOZOMI ISHII</a>
        </Link>
      </div>

      {/* toggle button for mobile */}
      <div className="block lg:hidden">
        <button
          className="flex items-center px-2 py-1 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
          onClick={() => setOpen((state) => !state)}
        >
          🦸🏻‍♂️
        </button>
      </div>

      {/* Navbar Items */}
      <div className="hidden w-full text-sm lg:flex lg:flex-row lg:items-center lg:w-auto">
        {navbarItems.map(({ name, slug }) => (
          <Link href={slug} key={name}>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              {name}
            </a>
          </Link>
        ))}
      </div>
      {/* for mobile TODO: 上と共通化する*/}
      {open && (
        <div className="w-full text-sm flex flex-col items-end lg:flex-row lg:items-center lg:w-auto">
          {navbarItems.map(({ name, slug }) => (
            <Link href={slug} key={name}>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                {name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

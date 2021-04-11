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
  // { name: 'blog', slug: '/blog' },
  // { name: 'contact', slug: '/contact' },
];

export const NavbarBgBlack: React.FC = () => {
  const [open, setOpen] = useState(false);

  const Menu = navbarItems.map(({ name, slug }) => (
    <Link href={slug} key={name}>
      <a className="text-teal-lighter block mr-4 mt-4 hover:text-green-700 text-white lg:inline-block lg:mt-0">
        {name}
      </a>
    </Link>
  ));

  return (
    <nav className="fixed flex flex-wrap items-center justify-between px-4 py-2 w-full lg:p-4">
      {/* logo */}
      <div className="mr-6 text-white">
        <Link href="/">
          <a className="text-xl font-semibold tracking-tight">NOZOMI ISHII</a>
        </Link>
      </div>

      {/* toggle button for mobile */}
      <div className="block lg:hidden">
        <button
          className="border-teal-light flex items-center justify-center w-8 h-8 hover:text-green-700 border hover:border-green-700 rounded-full"
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
        <div className="flex flex-col items-end w-full text-sm lg:flex-row lg:items-center lg:w-auto">
          {Menu}
        </div>
      )}
    </nav>
  );
};

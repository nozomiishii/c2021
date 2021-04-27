import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
interface NavbarItem {
  name: 'about' | 'blog' | 'art' | 'contact';
  slug: '/' | '/about' | '/blog' | '/art' | '/contact';
}

const navbarItems: NavbarItem[] = [
  { name: 'about', slug: '/about' },
  // { name: 'art', slug: '/art' },
  // { name: 'blog', slug: '/blog' },
  // { name: 'contact', slug: '/contact' },
];

interface P {
  isFullScreen?: boolean;
}

export const Navbar: React.FC<P> = ({ isFullScreen = false }) => {
  const [open, setOpen] = useState(false);

  const logoColorClass = classNames('mr-6', {
    'text-white': isFullScreen,
    'text-gray-800': !isFullScreen,
  });

  const toggleButtonClass = classNames(
    'flex items-center justify-center w-8 h-8 hover:text-green-700 border hover:border-green-700 rounded-full',
    {
      'border-white': isFullScreen,
      'border-gray-800 ': !isFullScreen,
    },
  );

  const linkClass = classNames(
    'text-teal-lighter block mr-4 mt-4 hover:text-green-700 lg:inline-block lg:mt-0',
    {
      'text-white': isFullScreen,
      'text-gray-800': !isFullScreen,
    },
  );

  const Menu = navbarItems.map(({ name, slug }) => (
    <Link href={slug} key={name}>
      <a className={linkClass}>{name}</a>
    </Link>
  ));

  return (
    <nav className="fixed flex flex-wrap items-center justify-between px-4 py-2 w-full lg:p-4">
      {/* logo */}
      <div className={logoColorClass}>
        <Link href="/">
          <a className="text-xl font-semibold tracking-tight">NOZOMI ISHII</a>
        </Link>
      </div>

      {/* Navbar Items */}
      <div className="hidden w-full text-sm lg:flex lg:flex-row lg:items-center lg:w-auto">
        {Menu}
      </div>

      {/* toggle button for mobile */}
      <div className="block lg:hidden">
        <button className={toggleButtonClass} onClick={() => setOpen((state) => !state)}>
          🦸🏻‍♂️
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="flex flex-col items-end w-full text-sm lg:flex-row lg:items-center lg:w-auto">
          {Menu}
        </div>
      )}
    </nav>
  );
};

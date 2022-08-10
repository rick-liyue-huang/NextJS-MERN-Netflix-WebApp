import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* this is svg, so donot use Image  */}
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">HOME</li>
          <li className="headerLink">TV SHOWS</li>
          <li className="headerLink">MOVIES</li>
          <li className="headerLink">NEW & FEATURE</li>
          <li className="headerLink">MY LIST</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden w-6 h-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" />
        <Link href={'/account'}>
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleNavToggleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsActive(!isActive);
  };
  const handleNavToggleClickOff = (event: React.MouseEvent<HTMLElement>) => {
    if (isActive) setIsActive(!isActive);
  };

  return (
    <header className="flex justify-between h-[60px] items-center px-[5%] bg-[#0e141b] z-50 py-1 shadow-xl sticky top-0">
      <div className="flex gap-2 text-white">
        {/* <!-- Mobile menu button --> */}
        <div
          className="md:hidden flex items-center"
          onClick={handleNavToggleClick}
        >
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <Link className="font-bold logo" href={'/'}>
          Fudera
        </Link>
      </div>

      <div className="flex w-full md:max-w-max relative gap-2 items-center">
        <nav
          className={
            isActive
              ? 'header-nav flex absolute top-[60px] left-0 p-5 text-center bg-[#0e141b] shadow-xl md:max-w-max w-full items-center justify-center'
              : 'header-nav hidden md:flex'
          }
        >
          <ul
            className={
              'flex flex-col gap-3 items-center md:max-w-max w-full md:flex-row text-white'
            }
          >
            <li className="nav__item" onClick={handleNavToggleClickOff}>
              <Link href={'/dish'}>Dishes</Link>
            </li>
            <li className="nav__item" onClick={handleNavToggleClickOff}>
              <Link href={'/'}>Drinks</Link>
            </li>
            <li className="nav__item" onClick={handleNavToggleClickOff}>
              <Link href={'/'}>Recipes</Link>
            </li>
            <li className="nav__item" onClick={handleNavToggleClickOff}>
              <Link href={'/'}>Guides</Link>
            </li>
            <li className="nav__item" onClick={handleNavToggleClickOff}>
              <Link href={'/'}>Watch Episodes</Link>
            </li>
          </ul>
        </nav>

        <div className="text-green-600 text-sm justify-self-end ml-auto">
          Login/signup
        </div>
      </div>
    </header>
  );
}

export default Header;

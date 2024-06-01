"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex w-full mb-8 py-3 px-10 bg-gray-200">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Estü Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">ESTÜ MEZUN</p>
      </Link>
      <div className="sm:flex hidden items-center px-16 gap-6">
        <Link href="/about">
          <span className="hover:underline">Hakkımızda</span>
        </Link>
        <Link href="/announcements">
          <span className="hover:underline">Duyurular</span>
        </Link>
        <Link href="/career">
          <span className="hover:underline">Kariyer Fırsatları</span>
        </Link>
        <Link href="/contact">
          <span className="hover:underline">İletişim</span>
        </Link>
      </div>
      <div className="sm:flex hidden items-center ml-auto">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5 items-center">
            <button
              type="button"
              onClick={signOut}
              aria-label="Sign out"
              className="hover:underline outline_btn"
            >
              Çıkış
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                alt="profile image"
                className="rounded-full"
                width={37}
                height={37}
                aria-label="Profile"
              />
            </Link>
          </div>
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <button
              type="button"
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className="black_btn"
              aria-label={`Sign in with ${provider.name}`}
            >
              Giriş
            </button>
          ))
        )}
      </div>
      <div className="sm:hidden flex relative items-center ml-auto">
        {session?.user ? (
          <div className="flex items-center">
            <Image
              src={session?.user.image}
              alt="Profile Logo"
              className="rounded-full cursor-pointer"
              width={37}
              height={37}
              aria-label="Toggle Dropdown"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setToggleDropdown(false)}
                >
                  Profil
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setToggleDropdown(false)}
                >
                  Hakkımızda
                </Link>
                <Link
                  href="/announcements"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setToggleDropdown(false)}
                >
                  Duyurular
                </Link>
                <Link
                  href="/career"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setToggleDropdown(false)}
                >
                  Kariyer Fırsatları
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setToggleDropdown(false)}
                >
                  İletişim
                </Link>
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  aria-label="Sign out"
                >
                  Çıkış
                </button>
              </div>
            )}
          </div>
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <button
              type="button"
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className="black_btn"
              aria-label={`Sign in with ${provider.name}`}
            >
              Giriş
            </button>
          ))
        )}
      </div>
    </nav>
  );
};

export default Nav;

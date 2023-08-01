import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="h-14">
      <div className="h-full py-2 px-20">
        <Link className="h-full" href="/">
          <Image
            width={500}
            height={500}
            src={'/top-movies-logo.png'}
            alt="logo"
            className="object-contain h-full w-40"
          />
        </Link>
      </div>
    </nav>
  );
}

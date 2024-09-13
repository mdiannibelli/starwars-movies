import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Links from './Links';

const Header = () => {
    return (
        <header className='flex justify-around items-center p-4 md:py-8 md:px-16'>
            <div className=''>
                <Link href='/' className='flex items-center flex-col'>
                    <Image width={150} height={100} src='/starwars-logo.png' alt="Star Wars Logo" />
                </Link>
            </div>
            <nav className='flex-1'>
                <ul className='flex justify-center gap-8 '>
                    <Links />
                </ul>
            </nav>
        </header>
    );
};

export default Header;

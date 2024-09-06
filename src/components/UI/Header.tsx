import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-around items-center p-8'>
            <div>
                <Link href='/' className='flex items-center flex-col'>
                    <h1 className='text-yellow-500 font-semibold text-4xl italic uppercase'>Star Wars</h1>                </Link>
            </div>
            <nav>
                <ul className='flex gap-8 [&>li]:text-yellow-500 [&>li]:text-md'>
                    <li className='hover:text-yellow-300'><Link href='/'>Home</Link></li>
                    <li className='hover:text-yellow-300'><Link href='/films'>Films</Link></li>
                    <li className='hover:text-yellow-300'><Link href='/chracters'>Chracters</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

const CharactersFilters = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearchGender = (filter: string) => {
        const params = new URLSearchParams(searchParams);
        if (filter !== 'all') {
            params.set('gender', filter);
        } else {
            params.delete('gender');
        }

        replace(`${pathname}?${params.toString()}`);
    };

    const handleSearchEyeColors = (filter: string) => {
        const params = new URLSearchParams(searchParams);
        if (filter !== 'all') {
            params.set('eye_color', filter);
        } else {
            params.delete('eye_color');
        }

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <form className='flex justify-center items-center gap-x-12'>
            <div>
                <label className='text-white text-2xl mr-8' htmlFor="gender">Gender</label>
                <select
                    className='rounded py-1 px-6 select-none outline-none border-[1.5px] border-yellow-500 bg-transparent text-white'
                    name="gender"
                    id="gender"
                    defaultValue={searchParams.get('gender')?.toString() || 'all'}
                    onChange={(e) => handleSearchGender(e.target.value)}
                >
                    <option className='bg-black text-yellow-500' value="all">All</option>
                    <option className='bg-black text-yellow-500' value="male">Male</option>
                    <option className='bg-black text-yellow-500' value="female">Female</option>
                </select>
            </div>
            <div>
                <label className='text-white text-2xl mr-8' htmlFor="eye_color">Eyes Color</label>
                <select
                    className='rounded py-1 px-6 select-none outline-none border-[1.5px] border-yellow-500 bg-transparent text-white'
                    name="eye_color"
                    id="eye_color"
                    defaultValue={searchParams.get('eye_color')?.toString() || 'all'}
                    onChange={(e) => handleSearchEyeColors(e.target.value)}
                >
                    <option className='bg-black text-yellow-500' value="all">All</option>
                    <option className='bg-black text-yellow-500' value="red">Red</option>
                    <option className='bg-black text-yellow-500' value="blue">Blue</option>
                    <option className='bg-black text-yellow-500' value="yellow">Yellow</option>
                    <option className='bg-black text-yellow-500' value="gold">Gold</option>
                    <option className='bg-black text-yellow-500' value="orange">Orange</option>
                    <option className='bg-black text-yellow-500' value="black">Black</option>
                    <option className='bg-black text-yellow-500' value="white">White</option>
                    <option className='bg-black text-yellow-500' value="pink">Pink</option>
                    <option className='bg-black text-yellow-500' value="brown">Brown</option>
                    <option className='bg-black text-yellow-500' value="hazel">Hazel</option>
                </select>
            </div>
        </form>
    );
};

export default CharactersFilters;

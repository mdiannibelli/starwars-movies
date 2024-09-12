import React from 'react';
import { getFilms } from '../actions/films/getFilms';
import FilmsGrid from '@/components/Films/FilmsGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Star Wars - Films",
    description: "All Star Wars films.",
};

export default async function Films() {
    const films = await getFilms();
    return (
        <main className='flex flex-col justify-center items-center my-12'>
            <FilmsGrid films={films.results} />
        </main>
    );
}

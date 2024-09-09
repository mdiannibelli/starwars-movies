import React from 'react';
import { getFilms } from '../actions/films/getFilms';
import { AllStarwarsFilms } from '@/types';
import FilmsGrid from '@/components/Films/FilmsGrid';

export default async function Films() {
    const films: AllStarwarsFilms = await getFilms();
    console.log(films);
    return (
        <main className='flex flex-col justify-center items-center my-12'>
            <FilmsGrid films={films.results} />
        </main>
    );
}

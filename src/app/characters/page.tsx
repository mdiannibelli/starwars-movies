import CharactersGrid from '@/components/Characters/CharactersGrid';
import React from 'react';
import { getAllCharacters } from '../actions/characters/getAllCharacters';
import { Metadata } from 'next';
import CharactersFilters from '@/components/Filters/CharactersFilters';

export const metadata: Metadata = {
    title: "Star Wars - Characters",
    description: "All Star Wars characters.",
};

interface Props {
    searchParams?: {
        gender?: string
        eye_color?: string
        name?: string
    }
}

export default async function page({ searchParams }: Props) {
    const characters = await getAllCharacters(1);
    const gender = searchParams?.gender;
    const eye_color = searchParams?.eye_color;
    const name = searchParams?.name;
    return (
        <main>
            <CharactersFilters />
            <CharactersGrid characters={characters} gender={gender} eye_color={eye_color} name={name} />
        </main>
    );
}

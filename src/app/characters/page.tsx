import CharactersGrid from '@/components/Characters/CharactersGrid';
import React from 'react';
import { getAllCharacters } from '../actions/characters/getAllCharacters';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Star Wars - Characters",
    description: "All Star Wars characters.",
};

export default async function page() {
    const characters = await getAllCharacters(1);
    return (
        <main>
            <CharactersGrid characters={characters} />
        </main>
    );
}

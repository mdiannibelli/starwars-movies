import CharactersGrid from '@/components/Characters/CharactersGrid';
import React from 'react';
import { getAllCharacters } from '../actions/characters/getAllCharacters';

export default async function page() {
    const characters = await getAllCharacters(1);
    return (
        <main>
            <CharactersGrid characters={characters} />
        </main>
    );
}

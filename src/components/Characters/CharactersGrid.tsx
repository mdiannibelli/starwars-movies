import { CharacterType } from '@/types';
import React from 'react';
import LoadMoreCharacters from './LoadMoreCharacters';
import CharacterCard from './CharacterCard';

interface Props {
    characters: CharacterType[]
}

const CharactersGrid = ({ characters }: Props) => {
    return (
        <section className='grid grid-cols-3 max-w-[924px] mx-auto my-8 justify-items-center'>
            {
                characters.map((character, index) => (
                    <>
                        <CharacterCard key={character.name} character={character} index={index} />
                    </>
                ))
            }
            <LoadMoreCharacters />
        </section>
    );
};

export default CharactersGrid;

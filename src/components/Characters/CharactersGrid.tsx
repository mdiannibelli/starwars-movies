import { CharacterType } from '@/types';
import React from 'react';
import LoadMoreCharacters from './LoadMoreCharacters';
import CharacterCard from './CharacterCard';

interface Props {
    characters: CharacterType[]
    gender?: string
    eye_color?: string
}

const CharactersGrid = ({ characters, gender, eye_color }: Props) => {
    return (
        <section className='grid grid-cols-3 max-w-[924px] mx-auto my-8 justify-items-center'>
            {
                characters
                    .filter(ch =>
                        (!eye_color || ch.eye_color.includes(eye_color)) &&
                        (!gender || ch.gender === gender))
                    .map((character, index) => (
                        <>
                            <CharacterCard key={character.name} character={character} index={index} />
                        </>
                    ))
            }
            <LoadMoreCharacters gender={gender} eye_color={eye_color} />
        </section>
    );
};

export default CharactersGrid;

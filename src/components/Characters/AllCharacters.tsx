'use client';

import { CharacterType } from '@/types';
import React, { useState } from 'react';
import CharacterCard from './CharacterCard';

interface Props {
    characters: CharacterType[]
}

const AllCharacters = ({ characters }: Props) => {
    const [viewAllCharacters, setViewAllCharacters] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-6 justify-center gap-8 my-12 max-w-[1260px] w-full">
            {
                !viewAllCharacters ?

                    <button className='text-white font-light text-xl col-span-6 my-6' onClick={() => setViewAllCharacters(true)}>
                        Show all characters
                    </button>

                    :
                    <>
                        {
                            characters.slice(6).map((character, index) => (
                                <>
                                    <CharacterCard key={character.name} character={character} index={index} />
                                </>
                            ))
                        }
                        <button className='text-white font-light text-xl col-span-6 my-6' onClick={() => setViewAllCharacters(false)}>Show less</button>
                    </>
            }
        </div>
    );
};

export default AllCharacters;

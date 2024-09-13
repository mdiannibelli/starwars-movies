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
        <>
            {
                !viewAllCharacters ?
                    <div className='w-full justify-center flex'>
                        <button className='text-white font-light text-xl my-6' onClick={() => setViewAllCharacters(true)}>
                            Show all characters
                        </button>

                    </div>

                    :
                    <>
                        {
                            characters.slice(6).map((character, index) => (
                                <>
                                    <CharacterCard key={character.name} character={character} index={index} />
                                </>
                            ))
                        }
                        <div className='w-full justify-center flex'>
                            <button className='text-white font-light text-xl my-6' onClick={() => setViewAllCharacters(false)}>Show less</button>
                        </div>

                    </>
            }
        </>
    );
};

export default AllCharacters;

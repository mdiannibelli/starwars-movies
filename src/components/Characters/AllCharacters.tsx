'use client';

import { CharacterType } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
    characters: CharacterType[]
}

const AllCharacters = ({ characters }: Props) => {
    const [viewAllCharacters, setViewAllCharacters] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-6 justify-center gap-8 mt-8 max-w-[1260px] w-full">
            {
                !viewAllCharacters ?

                    <button className='text-white font-light text-xl col-span-6 my-12' onClick={() => setViewAllCharacters(true)}>
                        Show all characters
                    </button>

                    :
                    <>
                        {
                            characters.slice(6).map((character, index) => (
                                <>
                                    {
                                        character ? (
                                            /* //TODO getIdFromUrl */
                                            <Link href={`/characters/${index}`} key={index}>
                                                <figure>
                                                    {/* //TODO Insertar imagen */}
                                                </figure>
                                                <div>
                                                    <span className="text-white text-xl font-medium">{character.name}</span>
                                                </div>
                                            </Link>
                                        ) : <div>
                                            <figure>
                                                {/* //TODO Insertar imagen por defecto */}
                                            </figure>
                                            <span className="text-white text-xl font-medium">Character not found</span>
                                        </div>
                                    }
                                </>
                            ))
                        }
                        <button className='text-white font-light text-xl col-span-6 my-12' onClick={() => setViewAllCharacters(false)}>Show less</button>
                    </>
            }
        </div>
    );
};

export default AllCharacters;

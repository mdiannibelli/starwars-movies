'use client';

import { imageCharacterUrls } from '@/constants/imageUrls';
import { CharacterType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
    characters: CharacterType[]
}

const AllCharacters = ({ characters }: Props) => {
    const [viewAllCharacters, setViewAllCharacters] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-6 justify-center gap-8 my-12 max-w-[1260px] w-full">
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
                                                    <Image src={imageCharacterUrls[character.name] ?? 'https://res.cloudinary.com/dvvtskcux/image/upload/v1726067493/starwars/characters/404.webp'} alt={character.name} width={240} height={200} className='object-cover w-full h-full max-w-[240px] min-h-[220px] max-h-[220px] bg-center' />
                                                </figure>
                                                <div className='mt-2'>
                                                    <span className="text-white text-xl font-medium">{character.name}</span>
                                                </div>
                                            </Link>
                                        ) : <div>
                                            <figure>
                                                <Image src='https://res.cloudinary.com/dvvtskcux/image/upload/v1726067493/starwars/characters/404.webp' alt={`Character not found ${index}`} width={240} height={200} className='object-cover w-full h-full max-w-[240px] min-h-[220px] max-h-[220px] bg-center' />
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

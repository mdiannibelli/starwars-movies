import { imageCharacterUrls } from '@/constants/imageUrls';
import { getIdFromUrl } from '@/hooks/useGetIdFromUrl';
import { CharacterType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    characters: CharacterType[]
}

const CharactersGrid = ({ characters }: Props) => {
    return (
        <section className='grid grid-cols-3 max-w-[1278px] mx-auto my-8 justify-items-center'>
            {
                characters.map((character, index) => (
                    <>
                        {
                            character ? (
                                <Link className='max-w-fit mt-12' href={`/characters/${getIdFromUrl({ query: { url: character.url, q: "people" } })}`} key={index}>
                                    <figure>
                                        <Image src={imageCharacterUrls[character.name] ?? 'https://res.cloudinary.com/dvvtskcux/image/upload/v1726067493/starwars/characters/404.webp'} alt={character.name} width={160} height={200} className='object-cover rounded-md h-full max-w-[240px] min-h-[220px] max-h-[220px] bg-center' />
                                    </figure>
                                    <div className="mt-2">
                                        <span className="text-yellow-500 text-xl font-regular">{character.name}</span>
                                    </div>
                                </Link>
                            ) : <div className='max-w-fit mt-12'>
                                <figure>
                                    <Image src='https://res.cloudinary.com/dvvtskcux/image/upload/v1726067493/starwars/characters/404.webp' alt={`Character not found ${index}`} width={160} height={200} className='object-cover rounded-md h-full max-w-[240px] min-h-[220px] max-h-[220px] bg-center' />
                                </figure>
                                <span className="text-yellow-500 text-xl font-regular">Character not found</span>
                            </div>
                        }
                    </>
                ))
            }
        </section>
    );
};

export default CharactersGrid;

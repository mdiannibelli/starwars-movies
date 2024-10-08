import { imageCharacterUrls } from '@/constants/imageUrls';
import { getIdFromUrl } from '@/hooks/useGetIdFromUrl';
import { CharacterType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    character: CharacterType
    index: number
}

const CharacterCard = ({ character, index }: Props) => {
    return (
        <>
            {
                character ? (
                    <Link className='max-w-fit mt-12' href={`/characters/${getIdFromUrl({ query: { url: character.url, q: "people" } })}`} key={index}>
                        <figure>
                            <Image src={imageCharacterUrls[character.name] ?? 'https://res.cloudinary.com/dvvtskcux/image/upload/v1726067493/starwars/characters/404.webp'} alt={character.name} width={160} height={200} className='object-cover rounded-md max-w-[120px] max-h-[150] md:max-w-[240px] min-h-[220px] md:max-h-[220px] bg-center' />
                        </figure>
                        <div className="mt-2">
                            <span className="text-yellow-500 text-sm md:text-xl font-regular">{character.name}</span>
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
    );
};

export default CharacterCard;

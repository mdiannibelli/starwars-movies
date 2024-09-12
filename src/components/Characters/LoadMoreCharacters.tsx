'use client';

import { getAllCharacters } from '@/app/actions/characters/getAllCharacters';
import { CharacterType } from '@/types';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CharacterCard from './CharacterCard';

let page = 2;

interface Props {
    gender?: string
    eye_color?: string
}

const LoadMoreCharacters = ({ gender, eye_color }: Props) => {
    const [characters, setAllCharacters] = useState<CharacterType[]>([]);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            if (page < 10) {
                getAllCharacters(page).then((res) => {
                    setAllCharacters([...characters, ...res]);
                });
            }
            page++;
        }
    }, [characters, inView]);

    return (
        <>
            {
                characters
                    .filter(ch => {
                        (!eye_color || ch.eye_color.includes(eye_color)) &&
                            (!gender || ch.gender === gender);
                    })
                    .map((character, index) => (
                        <CharacterCard key={character.name} character={character} index={index} />
                    ))
            }
            {page < 10 &&
                <div className='flex justify-center items-center w-full' ref={ref}>
                    <span className='text-white text-center'>Loading...</span>
                </div>
            }
        </>
    );
};

export default LoadMoreCharacters;

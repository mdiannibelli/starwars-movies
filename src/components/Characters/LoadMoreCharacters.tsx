'use client';

import { getAllCharacters } from '@/app/actions/characters/getAllCharacters';
import { CharacterType } from '@/types';
import React, { Suspense, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CharacterCard from './CharacterCard';

let page = 2;

interface Props {
    gender?: string
    eye_color?: string
    name?: string
}

const LoadMoreCharacters = ({ gender, eye_color, name }: Props) => {
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
            <Suspense fallback={<span className='text-white'>Loading characters...</span>} key={`${gender}-${eye_color}`}>
                {
                    characters
                        .filter(ch =>
                            (!eye_color || ch.eye_color.includes(eye_color)) &&
                            (!gender || ch.gender === gender) &&
                            (!name || ch.name.toLowerCase().includes(name.toLowerCase())))
                        .map((character, index) => (

                            <CharacterCard key={character.name} character={character} index={index} />

                        ))
                }
            </Suspense>
            {page < 10 &&
                <div ref={ref} className='flex justify-center items-center w-full'>
                    <span className='text-white text-center'>Loading...</span>
                </div>
            }
        </>
    );
};

export default LoadMoreCharacters;

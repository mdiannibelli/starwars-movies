import { getCharacterById } from '@/app/actions/characters/getCharacterById';
import { getHomeworld } from '@/app/actions/homeworld/getHomeworld';
import { getStarships } from '@/app/actions/starships/getStarships';
import { getVehicles } from '@/app/actions/vehicles/getVehicles';
import { imageCharacterUrls } from '@/constants/imageUrls';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { IoIosFemale, IoIosMale } from 'react-icons/io';

interface Props {
    params: {
        id: number
    }
}

export async function generateMetadata({params}: Props):Promise<Metadata> {
    const id = params.id;
    const character = await getCharacterById(id);
    return {
        title: `${character.name} - Star Wars`,
        description: `Name: ${character.name} - ${character.gender}: ${character.height}`,
        openGraph: {
            images: [imageCharacterUrls[character.name]]
        }
    };
}

export default async function page({params}: Props) {
    // Get character
    const character = await getCharacterById(params.id);

    // Get homeworld
    const homeworld = await getHomeworld(character.homeworld);

    // Get vehicles
    const vehicles = await getVehicles(character.vehicles);

    // Get starships
    const starships = await getStarships(character.starships);
  return (
    <main>
        {
            character ? (
                <section className='grid grid-cols-[auto_1fr] justify-items-center max-w-[720px] mx-auto'>
                    <div>
                        <figure>
                            <Image src={imageCharacterUrls[character.name] ?? 'https://res.cloudinary.com/dvvtskcux/image/upload/v1726067493/starwars/characters/404.webp'} alt={character.name} width={320} height={320} className='object-cover rounded-md h-full max-w-[240px] min-h-[280px] max-h-[320px] bg-center'/>
                        </figure>
                    </div>
                    <aside>
                        <h1 className='text-2xl text-yellow-500 font-medium'>{character.name}</h1>
                        <div className='flex items-center gap-x-4 mt-2'>
                            <span className='text-md text-white font-light'>
                                Gender:
                            </span>
                            <p className='text-white'>{character.gender === 'female' ? <IoIosFemale size={20} /> : <IoIosMale size={20} />}</p>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='text-md text-white font-light'>
                                Height: {character.height}cm
                            </span>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='text-md text-white font-light'>
                                Mass: {character.mass}kg
                            </span>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='text-md text-white font-light'>
                                Hair color: {character.hair_color}
                            </span>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='text-md text-white font-light'>
                                Skin color: {character.skin_color}
                            </span>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='text-md text-white font-light'>
                                Eye color: {character.eye_color}
                            </span>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='text-md text-white font-light'>
                                Birthyear: {character.birth_year}
                            </span>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='text-md text-white font-light'>
                                Homeworld: {homeworld.name}
                            </span>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <span className='text-md text-white font-light'>Vehicles: </span>
                            {
                                vehicles.length > 0 ? 
                                <ul>
                                    {vehicles.map((vehicle, index) => (
                                        <li className='text-white' key={index}>
                                            - {vehicle.name}
                                        </li>
                                    ))}
                                </ul>
                                
                                : <span className='text-white'>{`Doesn't have vehicles`}</span>
                            }
                        </div>
                        <div className='flex flex-col mt-2'>
                            <span className='text-md text-white font-light'>Starships: </span>
                            {
                                starships.length > 0 ? 
                                <ul>
                                    {starships.map((starship, index) => (
                                        <li className='text-white' key={index}>
                                            - {starship.name}
                                        </li>
                                    ))}
                                </ul>
                                
                                : <span className='text-white'>{`Doesn't have starships`}</span>
                            }
                        </div>
                    </aside>
        </section>
            ) : <span className='text-yellow-500 text-2xl'>Character not found!</span>
        }
    </main>
  );
}


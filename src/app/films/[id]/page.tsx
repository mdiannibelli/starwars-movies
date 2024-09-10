import { getCharacters } from "@/app/actions/characters/getCharacters";
import { getFilmById } from "@/app/actions/films/getFilmById";
import AllCharacters from "@/components/Characters/AllCharacters";
import { imageFilmsUrls } from "@/constants/imageUrls";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params: {
        id: number
    }
}

//TODO INSERT DYNAMIC METADATA


export default async function page({ params }: Props) {
    const { id } = params;
    // Get film
    const film = await getFilmById(id);

    // Get characters (6)
    const characters = await getCharacters(film.characters);

    // Dynamic characters
    function allCharacters() {
        return <AllCharacters characters={characters} />;
    }

    const DynamicAllCharacteres = dynamic(async () => allCharacters, { ssr: false });

    return (
        <>
            {film &&
                <section className="flex flex-col justify-center p-6">
                    <div className="grid grid-cols-[auto_1fr] mx-auto gap-x-8">
                        <figure>
                            <Image
                                src={imageFilmsUrls[film.title] || 'https://res.cloudinary.com/dvvtskcux/image/upload/v1725891908/starwars/film-banner.webp'}
                                alt={film.title}
                                width={520}
                                height={220}
                                className="h-[320px] w-full object-cover" />
                        </figure>
                        <div className="flex flex-col w-[520px]">
                            <h1 className="font-medium text-6xl text-white">{film.title}</h1>
                            <span className="text-yellow-500 font-light text-4xl mt-2">Episode: {film.episode_id}</span>
                            <span className="text-white font-light text-2xl italic mt-4">{film.director}</span>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-center items-center flex-col">
                        <h2 className="text-yellow-500 font-regular text-2xl tracking-wide">Characters</h2>
                        <div className="grid grid-cols-6 justify-center gap-8 mt-8 max-w-[1260px] w-full">
                            {
                                characters.slice(0, 6).map((character, index) => (
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
                        </div>
                        <DynamicAllCharacteres />
                    </div>
                </section>
            }
        </>
    );
}

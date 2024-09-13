import { getCharacters } from "@/app/actions/characters/getCharacters";
import { getFilmById } from "@/app/actions/films/getFilmById";
import CharacterCard from "@/components/Characters/CharacterCard";
import { imageFilmsUrls } from "@/constants/imageUrls";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

interface Props {
    params: {
        id: number
    }
}

// Load dynamic component AllCharacters
const AllCharacters = dynamic(() => import("@/components/Characters/AllCharacters"), {
    ssr: false,
    loading: () => <p className="text-white">Loading characters...</p>
});

// Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = params.id;
    const film = await getFilmById(id);
    return {
        title: `${film.title} - Star Wars`,
        description: film.opening_crawl,
        openGraph: {
            images: [imageFilmsUrls[film.title]]
        }
    };

}


export default async function page({ params }: Props) {
    const { id } = params;
    // Get film
    const film = await getFilmById(id);

    // Get characters (6)
    const characters = await getCharacters(film.characters);

    return (
        <main>
            {film &&
                <section className="flex flex-col justify-center p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] mx-auto gap-x-8">
                        <figure>
                            <Image
                                src={imageFilmsUrls[film.title] || 'https://res.cloudinary.com/dvvtskcux/image/upload/v1725891908/starwars/film-banner.webp'}
                                alt={film.title}
                                width={520}
                                height={220}
                                className="h-[320px] w-full object-cover"
                                loading="lazy" />
                        </figure>
                        <div className="flex flex-col md:w-[520px] m-4">
                            <h1 className="font-medium text-2xl md:text-4xl xl:text-6xl text-white">{film.title}</h1>
                            <span className="text-yellow-500 font-light text-xl md:text-2xl xl:text-4xl mt-2">Episode: {film.episode_id}</span>
                            <span className="text-white font-light text-md md:text-xl xl:text-2xl italic mt-4">{film.director}</span>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center items-center flex-col mx-auto">
                        <h2 className="text-yellow-500 font-regular text-2xl tracking-wide">Characters</h2>
                        <div className="flex flex-wrap justify-center gap-8 max-w-[1260px] w-full">
                            {
                                characters.slice(0, 6).map((character, index) => (
                                    <CharacterCard key={character.name} character={character} index={index} />
                                ))
                            }
                            <Suspense fallback={<p className="text-white">Loading characters...</p>}>
                                <AllCharacters characters={characters} />
                            </Suspense>
                        </div>
                    </div>
                </section>
            }
        </main>
    );
}

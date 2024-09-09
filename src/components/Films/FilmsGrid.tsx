import { imageFilmsUrls } from "@/constants/imageUrls";
import { FilmType } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    films: FilmType[]
}

const FilmsGrid = ({ films }: Props) => {
    const sortedFilmsByEpisode = films.sort((a, b) => a.episode_id - b.episode_id);
    return (
        <div className="grid grid-cols-3 gap-24 justify-center items-center">
            {
                sortedFilmsByEpisode.map((film) => (
                    <Link href={`/films/${film.title}`} key={film.episode_id}>
                        <figure>
                            <Image
                                src={imageFilmsUrls[film.title] || 'https://res.cloudinary.com/dvvtskcux/image/upload/v1725891908/starwars/film-banner.webp'}
                                alt={film.title}
                                width={320}
                                height={220}
                                className="h-[220px]" />
                        </figure>
                        <div className="mt-4 flex flex-col gap-y-2">
                            <span className="text-yellow-500 font-medium text-xl">{film.title}</span>
                            <span className="text-yellow-500 font-medium text-sm">Episode: {film.episode_id}</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default FilmsGrid;

import { imageFilmsUrls } from "@/constants/imageUrls";
import { getIdFromUrl } from "@/hooks/useGetIdFromUrl";
import { FilmType } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    films: FilmType[]
}

const FilmsGrid = ({ films }: Props) => {
    //const sortedFilmsByEpisode = films.sort((a, b) => a.episode_id - b.episode_id);
    return (
        <div className="grid grid-cols-1 px-6 md:px-12 md:grid-cols-2 xl:grid-cols-3 gap-24 justify-center items-center">
            {
                films.map((film) => (
                    <Link href={`/films/${getIdFromUrl({ query: { url: film.url, q: "films" } })}`} key={film.episode_id}>
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

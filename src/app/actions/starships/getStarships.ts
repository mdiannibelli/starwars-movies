'use server';

import { StarshipType } from "@/types";

export async function getStarships(starships:string[]):Promise<StarshipType[]> {
    const starshipsPromises = starships.map((starship) => fetch(starship).then(res => res.json()));
    return await Promise.all(starshipsPromises);
}
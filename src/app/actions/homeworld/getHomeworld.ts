'use server';

import { PlanetType } from "@/types";

export async function getHomeworld(homeworld: string):Promise<PlanetType> {
    const response = await fetch(homeworld);
    const data = response.json();
    return data;
}
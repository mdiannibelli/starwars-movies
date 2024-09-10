'use server';

import { API_FILMS_URL } from "@/constants/apiUrl";
import { FilmType } from "@/types";

export async function getFilmById(id: number): Promise<FilmType> {
    try {
        const response = await fetch(`${API_FILMS_URL}/${id}`);
        if (!response.ok) throw new Error(`Response failed at ${API_FILMS_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error at fetching Star Wars film ${id}: ${error}`);
    }
}
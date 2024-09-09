'use server';

import { API_FILMS_URL } from "@/constants/apiUrl";

export async function getFilms() {
    try {
        const response = await fetch(API_FILMS_URL);
        if (!response.ok) throw new Error(`Response failed at ${API_FILMS_URL}`);
        const data = response.json();
        return data;
    } catch (error) {
        throw new Error(`Error at fetching Star Wars films: ${error}`);
    }
}
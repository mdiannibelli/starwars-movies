'use server';

import { API_CHARACTERS_URL } from "@/constants/apiUrl";
import { CharacterType } from "@/types";

export async function getAllCharacters(page: number): Promise<CharacterType[]> {
    try {
        const response = await fetch(`${API_CHARACTERS_URL}/?page=${page}`);
        if (!response.ok) throw new Error(`Response failed at ${API_CHARACTERS_URL}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw new Error(`Error at fetching Star Wars characters: ${error}`);
    }
}
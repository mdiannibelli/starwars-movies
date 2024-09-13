'use server';

import { API_CHARACTERS_URL } from "@/constants/apiUrl";
import { CharacterType } from "@/types";

export async function getCharacterById(id: number):Promise<CharacterType> {
    try {
        const response = await fetch(`${API_CHARACTERS_URL}/${id}`);
        if(!response.ok) throw new Error(`Response failed at ${API_CHARACTERS_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error at fetching Star Wars character ${id}: ${error}`);
    }
}
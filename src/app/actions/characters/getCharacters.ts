import { CharacterType } from "@/types";

export async function getCharacters(characterUrl: string[]): Promise<CharacterType[]> {
    const charactersPromise = characterUrl.map(url => fetch(url).then(res => res.json()));
    return await Promise.all(charactersPromise);
}
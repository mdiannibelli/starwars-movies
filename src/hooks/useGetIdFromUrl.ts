import { CharacterType, FilmType } from "@/types";

type filmQueryType = {
    url: FilmType["url"],
    q: "films"
}

type characterQueryType = {
    url: CharacterType["url"],
    q: "people"
}

interface idProps {
    query: filmQueryType | characterQueryType
}

export const getIdFromUrl = ({ query }: idProps) => {
    const id = query.url.replace(`https://swapi.dev/api/${query.q}/`, "").replace("/", "");
    // https://swapi.dev/api/people/ => ""
    // 1
    // / => ""
    return id;
};
import { ArtObject, ArtObjectDetails, FilterProps } from "./types";

const API_KEY = process.env.API_KEY;

export async function getArtcraftsList(searchParams: FilterProps): Promise<{
    objects: ArtObject[],
    pageCount: number,
    totlaCount: number,
}> {
    const pageNumber = searchParams.page || 1;
    const query = searchParams.query || '';

    const countPerPage = 9;
    const link = `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&p=${pageNumber}&ps=${countPerPage}&q=${query}`;

    const response = await fetch(link);
    const result = await response.json();
    const artcraftslist = result.artObjects;
    const count = result.count;
    const pageCount = Math.floor(count / countPerPage);

    return { objects: artcraftslist, pageCount: pageCount, totlaCount: count };
}

export async function getArtcraftsDetail(objectNumber: string): Promise<ArtObjectDetails> {
    const link = `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=${API_KEY}`;

    const response = await fetch(link);
    const result = await response.json();
    const artcraftsDetails = result.artObject;

    return artcraftsDetails;

}
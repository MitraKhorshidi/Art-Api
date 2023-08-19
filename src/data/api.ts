import { ArtObject, ArtObjectDetails } from "./types";

const API_KEY = '2esrTh6M' /*process.env.API_KEY */; // TODO: Secure Me

export async function getArtcraftsList(pageNumber: number): Promise<ArtObject[]> {
    const link = `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&p=${pageNumber}&ps=9`;

    const response = await fetch(link);
    const result = await response.json();
    const artcraftslist = result.artObjects;

    console.log('fetch result', result);

    return artcraftslist;
}

export async function getArtcraftsDetail(objectNumber: string): Promise<ArtObjectDetails> {
    const link = `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=${API_KEY}`;

    const response = await fetch(link);
    const result = await response.json();
    const artcraftsDetails = result.artObject;

    return artcraftsDetails;

}
import { ArtObject, ArtObjectDetails } from "./types";

const API_KEY = '2esrTh6M' /*process.env.API_KEY */; // TODO: Secure Me

export async function getArtcraftsList(pageNumber: number): Promise<{
    objects:ArtObject[],
    pageCount:number,
}> {
    const countPerPage = 9;
    const link = `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&p=${pageNumber}&ps=${countPerPage}`;
    // const test = 'https://www.rijksmuseum.nl/api/nl/collection?key=2esrTh6M&q=painting'

    const response = await fetch(link);
    const result = await response.json();
    const artcraftslist = result.artObjects;
    const count = result.count;
    const pageCount = Math.floor(count/countPerPage);
    console.log('count of all ',count);

    console.log('fetch result', result);

    return {objects:artcraftslist , pageCount:pageCount};
}

export async function getArtcraftsDetail(objectNumber: string): Promise<ArtObjectDetails> {
    const link = `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=${API_KEY}`;

    const response = await fetch(link);
    const result = await response.json();
    const artcraftsDetails = result.artObject;

    return artcraftsDetails;

}
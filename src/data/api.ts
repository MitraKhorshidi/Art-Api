import { ArtObject , ArtObjectDetails } from "./types";
import {SAMPLE_LIST} from "@/data/sampleList";
import {SAMPLE_SINGLE} from "@/data/sampleSingle";

export async function getArtcraftList(pageNumber:number):Promise<ArtObject[]> {
    return SAMPLE_LIST.artObjects;
}

export async function getArtcraftsDetail(objectNumber:string): Promise<ArtObjectDetails> {

    const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=2esrTh6M`);
    const result = await response.json();
    const artcraftsDetails = result.artObject;
    console.log('result fetch', artcraftsDetails);
    return artcraftsDetails;
    
}
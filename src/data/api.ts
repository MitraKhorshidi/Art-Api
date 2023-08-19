import { ArtObject , ArtObjectDetails } from "./types";
import {SAMPLE_LIST} from "@/data/sampleList";
import {SAMPLE_SINGLE} from "@/data/sampleSingle";

export async function getArtcraftList(pageNumber:number):Promise<ArtObject[]> {
    return SAMPLE_LIST.artObjects;
}

export async function getArtcraftsDetail(objectNumber:string): Promise<ArtObjectDetails> {
    return SAMPLE_SINGLE.artObject;
    
}
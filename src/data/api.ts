import { ArtObject } from "./ArtObject";
import {SAMPLE_LIST} from "@/data/sample";

export async function getArtcraftList(pageNumber:number):Promise<ArtObject[]> {

    const list = SAMPLE_LIST.artObjects;
    return list;
    
}
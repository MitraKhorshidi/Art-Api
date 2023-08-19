
export interface ArtObject {
    id: string,
    objectNumber: string,
    title: string,
    hasImage: boolean,
    principalOrFirstMaker: string,
    longTitle: string,
    webImage: ArtImage,
}

export interface ArtImage {
    guid: string,
    offsetPercentageX: number,
    offsetPercentageY: number,
    width: number,
    height: number,
    url: string,
}

export interface ArtObjectDetails extends ArtObject {
    description: string,
    objectTypes: string[],
    dimensions: Dimention[],
    principalMaker: string,


}

export interface Dimention {
    unit: string,
    type: string,
    value: string,
}
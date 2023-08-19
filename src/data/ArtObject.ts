export type ArtObject= {
    "id": string,
    "objectNumber": string,
    "title": string,
    "hasImage": boolean,
    "principalOrFirstMaker": string,
    "longTitle": string,
    "showImage": boolean,
    "permitDownload": boolean,
    "webImage": ArtImage,
    "headerImage": ArtImage,
    "productionPlaces": string[],
}

export type ArtImage ={
    "guid": string,
    "offsetPercentageX": number,
    "offsetPercentageY": number,
    "width": number,
    "height": number,
    "url": string,
}
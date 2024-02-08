export interface responseGifs {
    data:IGitApi
}

interface imgOriginal {
    height: string
    width: string
    size: string
    url: string
    mp4_size: string
    mp4: string
    webp_size: string
    webp: string
    frames: string
    hash: string
}

export interface IGitApi{
    id:string;
    title:string;
    images:{
        original:imgOriginal
    }
}

export interface IGif {
    id:string;
    title:string;
    url:string;
}

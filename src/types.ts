export interface Photo {
    photo: string;
}

export interface Card {
    className?: string;
    cardTitle: string;
    cardPargraph: string;
    user: Photo
}
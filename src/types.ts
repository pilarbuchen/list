export interface Photo {
    photo: string;
}

export interface Card {
    user: Photo;
    className?: string;
    cardTitle: string;
    cardPargraph: string;
}
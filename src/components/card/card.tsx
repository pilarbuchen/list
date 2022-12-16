import styles from './card.module.scss';
import checkMark from '../../assets/check.svg';
import Photo from '../photo/Photo';
import type { Card as CommentType } from '../../types'

export interface CardProps {
    className?: string;
    cardTitle: string;
    cardPargraph: string;
    user: {photo}
}

export const Card = ({ className, cardPargraph, cardTitle, user }: CardProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.imageContainer}>
            <img src={checkMark} />
            <Photo />
        </div>
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{cardTitle}</h2>
            <h6 className={styles.paragraph}>{cardPargraph}</h6></div></div>;
};

import styles from './card.module.scss';
import { memo } from 'react';
import checkMark from '../../assets/check.svg';
import Photo from '../photo/Photo';
import type { Card as CommentType } from '../../types'

interface CardProps extends CommentType{}

const Card = ({ className, cardPargraph, cardTitle, user: {photo} }: CardProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.imageContainer}>
            <img src={checkMark} />
            <Photo src={photo} />
        </div>
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{cardTitle}</h2>
            <h6 className={styles.paragraph}>{cardPargraph}</h6></div></div>;
};

export default memo(Card)
import styles from './card-container.module.scss';
import { AddCartButton } from '../add-cart-button/add-cart-button';
import CardList from '../card-list/card-list';
import { Card  } from '../../types'
import { useState } from 'react';

export interface CardContainerProps {
    className?: string;
    color: string;
    columnTitle: string;
    cards: Card[]
}

export const CardContainer = ({ className, color, columnTitle, cards }: CardContainerProps) => {

    return <div className={`${styles.root} ${className} `} style={{ borderTop: `10px solid ${color}` }}>
        <div className={styles.title}>
            <h1 className={styles.title}>{columnTitle}</h1>
        </div>
        <div className={styles.cardContainer}>
            <CardList cards={cards} />
            <AddCartButton />
        </div>
    </div>;
};
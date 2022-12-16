import styles from './card-container.module.scss';
import { Card } from '../card/card';
import { AddCartButton } from '../add-cart-button/add-cart-button';

export interface CardContainerProps {
    className?: string;
    color: string;
    columnTitle: string; 
}

export const CardContainer = ({ className, color, columnTitle }: CardContainerProps) => {
    return <div className={`${styles.root} ${className} `} style={{borderTop: `10px solid ${color}`}}>
        <div className={styles.title}>
            <h1 className={styles.title}>{columnTitle}</h1>
        </div>
        <div className={styles.cardContainer}>
            <Card />
            <AddCartButton />
        </div>
    </div>;
};
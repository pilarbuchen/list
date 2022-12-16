import styles from './card-container.module.scss';
import { Card } from '../card/card';
import { AddCartButton } from '../add-cart-button/add-cart-button';

export interface CardContainerProps {
    className?: string;
}

export const CardContainer = ({ className }: CardContainerProps) => {
    return <div className={`${styles.root} ${className} ${styles['to-doroot']}`}>
        <div className={styles.title}>
            <h1 className={styles.title}>To-Do</h1>
        </div>
        <div className={styles.cardContainer}>
            <Card />
            <AddCartButton />
        </div>
    </div>;
};

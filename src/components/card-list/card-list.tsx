import styles from './card-list.module.scss';
import { Card } from '../card/card';

export interface CardListProps {
    className?: string;
    card: [typeof Card],
}

export const CardList = ({ className, card }: CardListProps) => {
    return <div className={`${styles.root} ${className}`}>
        <Card cardPargraph="Testing 1" cardTitle="Testing 1" />
    </div>;
};

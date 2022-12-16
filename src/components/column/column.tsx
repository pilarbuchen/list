import styles from './column.module.scss';
import { CardContainer } from '../card-container/card-container3';
import { CardContainer as CardContainer0 } from '../card-container/card-container2';
import { CardContainer as CardContainer1 } from '../card-container/card-container';

export interface ColumnProps {
    className?: string;
}

export const Column = ({ className }: ColumnProps) => {
    return <div className={`${styles.root} ${className} ${styles.columnContainer}`}>
        <CardContainer0 />
        <CardContainer></CardContainer>
        <CardContainer1 />
    </div>;
};

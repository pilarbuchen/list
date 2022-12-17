import styles from './card-list.module.scss';
import Card from '../card/card';
import type { Card as CommentType } from '../../types'

interface CardListProps {
    className?: string;
    cards: CommentType[];
}

const CardList = ({ className, cards }: CardListProps) => {
    return <ul className={styles.longList}>
        {cards.map(({ cardTitle, cardPargraph, user }) => (
            <Card
                user={user}
                cardTitle={cardTitle}
                cardPargraph={cardPargraph}
            />
        ))}
    </ul>
};

export default CardList;

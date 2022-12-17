import styles from './card-container.module.scss';
import { AddCartButton } from '../add-cart-button/add-cart-button';
import CardList from '../card-list/card-list';
import { Card as CommentType } from '../../types'

export interface CardContainerProps {
    className?: string;
    color: string;
    columnTitle: string;
    cardlist: React.ReactNode
    cards: CommentType[]
}

export const CardContainer = ({ className, color, columnTitle, cardlist, cards }: CardContainerProps) => {
    return <div className={`${styles.root} ${className} `} style={{ borderTop: `10px solid ${color}` }}>
        <div className={styles.title}>
            <h1 className={styles.title}>{columnTitle}</h1>
        </div>
        <div className={styles.cardContainer}>
        {cardlist=<CardList cards={cards}/>}
            <CardList cards={[{
                cardPargraph: 'Test 1',
                cardTitle: 'Test 1',
                user: {
                    photo: 'https://history-biography.com/wp-content/uploads/2019/12/Manu-Chao-Biography.jpg'
                }
            }, {
                cardPargraph: 'Test 2',
                cardTitle: 'Test 2',
                user: {
                    photo: 'https://static01.nyt.com/images/2022/05/05/arts/05bad-bunny1/05bad-bunny1-mediumSquareAt3X.jpg'
                }
            }]} />
            <AddCartButton />
        </div>
    </div>;
};
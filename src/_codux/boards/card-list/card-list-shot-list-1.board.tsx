import { createBoard } from '@wixc3/react-board';
import CardList from '../../../components/card-list/card-list';
import Card from '../../../components/card/card';

export default createBoard({
    name: 'CardList - ShotList 1',
    Board: () => <CardList cards={[{
        cardPargraph: 'Test 3',
        cardTitle: 'Test 3',
        user: {
            photo: 'https://m.media-amazon.com/images/M/MV5BOWRiMzRlZGUtNjA1Zi00OGJlLTg3Y2QtYjQ3MDNhOTQ1OWVjXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }
    },]} />,
    environmentProps: {
        windowHeight: 897
    }
});

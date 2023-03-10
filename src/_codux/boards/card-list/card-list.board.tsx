import { createBoard } from '@wixc3/react-board';
import CardList from '../../../components/card-list/card-list';
import Card from '../../../components/card/card';

export default createBoard({
    name: 'CardList - LongerList',
    Board: () => <CardList cards={[{
        cardPargraph: 'Test 3',
        cardTitle: 'Test 3',
        user: {
            photo: 'https://m.media-amazon.com/images/M/MV5BOWRiMzRlZGUtNjA1Zi00OGJlLTg3Y2QtYjQ3MDNhOTQ1OWVjXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }
    }, {
        cardPargraph: 'Test 4',
        cardTitle: 'Test 4',
        user: {
            photo: 'https://i.discogs.com/K0k7-P2l5D3B0OOqylzDQdhoidMZZfCcJcfVlnMcCA4/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTUxNDI3/NzUtMTUwNzM4Nzcx/OS02ODM0LmpwZWc.jpeg'
        }
    }, {
        cardPargraph: 'Test 5',
        cardTitle: 'Test 5',
        user: {
            photo: 'https://history-biography.com/wp-content/uploads/2019/12/Manu-Chao-Biography.jpg'
        }
    }]} />,
    environmentProps: {
        windowHeight: 897
    }
});

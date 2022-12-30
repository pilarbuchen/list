import { createBoard } from '@wixc3/react-board';
import Card from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card cardPargraph="Test again" cardTitle="Test" user={{
        photo: 'https://static01.nyt.com/images/2022/05/05/arts/05bad-bunny1/05bad-bunny1-mediumSquareAt3X.jpg'
    }}></Card>
});

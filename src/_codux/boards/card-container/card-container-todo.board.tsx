import { createBoard } from '@wixc3/react-board';
import { CardContainer } from '../../../components/card-container/card-container3';

export default createBoard({
    name: 'CardContainer - Todo',
    Board: () => <CardContainer columnTitle="To-do" color="red" cards={[{
        cardPargraph: 'test 4',
        cardTitle: 'test 4',
        user: {
            photo: 'https://imageio.forbes.com/specials-images/imageserve/639ba21c2c89cf5733659135/0x0.jpg?format=jpg&width=1200'
        }
    }]} />
});

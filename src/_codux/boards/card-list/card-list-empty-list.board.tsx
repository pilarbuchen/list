import { createBoard } from '@wixc3/react-board';
import CardList from '../../../components/card-list/card-list';
import Card from '../../../components/card/card';

export default createBoard({
    name: 'CardList - EmptyList',
    Board: () => <CardList cards={[]} />,
    environmentProps: {
        windowHeight: 897
    }
});

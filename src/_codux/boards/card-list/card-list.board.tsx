import { createBoard } from '@wixc3/react-board';
import { CardList } from '../../../components/card-list/card-list';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'CardList',
    Board: () => <CardList />,
    environmentProps: {
        windowHeight: 897
    }
});

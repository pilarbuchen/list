import { createBoard } from '@wixc3/react-board';
import { CardContainer } from '../../../components/card-container/card-container3';

export default createBoard({
    name: 'CardContainer - Done',
    Board: () => <CardContainer columnTitle="Done" color="blue" />
});

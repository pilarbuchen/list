import { createBoard } from '@wixc3/react-board';
import { CardContainer } from '../../../components/card-container/card-container3';

export default createBoard({
    name: 'CardContainer - Doing',
    Board: () => <CardContainer color="orange" columnTitle="Doing" />
});

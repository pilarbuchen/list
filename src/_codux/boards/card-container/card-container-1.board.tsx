import { createBoard } from '@wixc3/react-board';
import { CardContainer } from '../../../components/card-container/card-container3';

export default createBoard({
    name: 'CardContainer - Doing',
    Board: () => <CardContainer color="rgba(199, 133, 167, 0.8)" columnTitle="Doing" cards={[{
        cardPargraph: 'test',
        cardTitle: 'hello',
        user: {
            photo: 'data:image/jpeg;base64,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'
        }
    }]} />
});

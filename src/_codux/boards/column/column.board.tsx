import { createBoard } from '@wixc3/react-board';
import { Column } from '../../../components/column/column';

export default createBoard({
    name: 'Column',
    Board: () => <Column />,
    environmentProps: {
        canvasBackgroundColor: '#ef6e6e'
    }
});
